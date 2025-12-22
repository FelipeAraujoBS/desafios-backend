import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async ValidateUser(username: string, password: string) {
    const user = await this.userService.findByUsername(username);

    if (!user) {
      throw new UnauthorizedException('Credenciais invalidas');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Credenciais invalidas');
    }

    const { password: _, ...result } = user;
    return result;
  }

  async login(username: string, password: string) {
    const user = await this.ValidateUser(username, password);

    const payload = {
      sub: user.id,
      username: user.username,
    };

    return {
      acess_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }
}
