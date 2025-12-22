# 🔐 Cryptography with NestJS, AES & Prisma

Backend boilerplate em **TypeScript** com **NestJS**, integrado com **Prisma ORM**, que demonstra **criptografia simétrica AES** para proteger dados sensíveis antes de gravar no banco de dados.

Este projeto serve tanto como exemplo de uso de criptografia com NestJS + Prisma quanto base para aplicações reais.

---

## 🚀 Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **NestJS** | Framework Node.js estruturado e escalável |
| **TypeScript** | Tipagem forte para segurança e produtividade |
| **Prisma** | ORM para modelagem e acesso ao banco de dados |
| **AES (crypto)** | Criptografia simétrica de campos sensíveis |
| **Jest** | Testes unitários e de integração |

---

## 📦 Funcionalidades

✔ Exemplo de criptografia AES para campos do banco  
✔ Estrutura modular NestJS  
✔ Integração com Prisma ORM  
✔ Scripts para desenvolvimento e produção  
✔ Testes automatizados  

---

## ⚙️ Setup

### Pré-requisitos

- Node.js >= 18
- npm ou yarn
- Banco de dados compatível (PostgreSQL, MySQL, SQLite, etc.)

---

### Instalação

Clone o repositório:

```bash
git clone https://github.com/FelipeAraujoBS/cryptography-TS-NestJS-AES-Prisma.git
cd cryptography-TS-NestJS-AES-Prisma

```
Instale as dependências:

```bash
npm install
# ou
yarn

```

Configuração ambiente

Crie um arquivo .env com suas variáveis:
```bash
DATABASE_URL="sua_connection_string"
AES_SECRET_KEY="chave_secreta_aes_256_bits"
```

Banco de Dados

Gere o cliente do Prisma:
```bash
npx prisma generate
```

Aplique migrations:
```bash
npx prisma migrate dev
```

🧪 Rodando a aplicação
Ambiente de desenvolvimento

```bash
npm run start:dev
```

🔒 Criptografia AES

Este projeto usa o módulo crypto do Node.js para criptografar e descriptografar dados sensíveis com AES antes de persistir no banco. 
NestJS Docs

Exemplo de uso:

```bash
// encrypt.service.ts
import { createCipheriv, randomBytes, scryptSync } from "crypto";

const iv = randomBytes(16);
const key = scryptSync(process.env.AES_SECRET_KEY, "salt", 32);

const cipher = createCipheriv("aes-256-ctr", key, iv);
const encrypted = Buffer.concat([cipher.update(plainText), cipher.final()]);
```
🧩 Estrutura de Pastas

```bash
src/
├── common/         # Utilitários e helpers
├── modules/        # Módulos de funcionalidade
├── prisma/         # Config do ORM Prisma
├── app.module.ts
├── main.ts
test/                # Testes automatizados
```

📜 Testes

Execute todos os testes:

```bash
npm run test
```
Cobertura:

```bash
npm run test:cov
```

📝 Contribuições

Contribuições são bem-vindas!
Abra issues, envie PRs ou sugestões.

📄 License

MIT License

