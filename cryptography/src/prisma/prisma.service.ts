import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { CryptoService } from 'src/Crypto/crypto.service';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private client: PrismaClient;
  private shouldDecrypt = true;

  constructor(private readonly cryptoService: CryptoService) {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    const baseClient = new PrismaClient({ adapter });

    const encrypt = async (data: string): Promise<string> => {
      return await this.cryptoService.encrypt(data);
    };

    const decrypt = async (data: string): Promise<string> => {
      return await this.cryptoService.decrypt(data);
    };

    const getShouldDecrypt = () => this.shouldDecrypt;

    this.client = baseClient.$extends({
      query: {
        entity: {
          async create({ args, query }) {
            if (args.data.userDocument) {
              args.data.userDocument = await encrypt(args.data.userDocument);
            }
            if (args.data.creditCardToken) {
              args.data.creditCardToken = await encrypt(
                args.data.creditCardToken,
              );
            }
            return query(args);
          },
          async findMany({ args, query }) {
            const results = await query(args);
            if (getShouldDecrypt() && Array.isArray(results)) {
              await Promise.all(
                results.map(async (item) => {
                  if (item.userDocument) {
                    item.userDocument = await decrypt(item.userDocument);
                  }
                  if (item.creditCardToken) {
                    item.creditCardToken = await decrypt(item.creditCardToken);
                  }
                }),
              );
            }
            return results;
          },
        },
      },
    }) as unknown as PrismaClient;
  }

  async withoutDecryption<T>(callback: () => Promise<T>): Promise<T> {
    this.shouldDecrypt = false;
    try {
      return await callback();
    } finally {
      this.shouldDecrypt = true;
    }
  }

  get entity() {
    return this.client.entity;
  }

  async onModuleInit() {
    await this.client.$connect();
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }
}
