## how to use prisma



#### install

```
npm i -D prisma
```

```
npm i @prisma/client
```



#### in Nextjs ,create a db 

设置 Prisma 客户端的实例，并确保在 Node.js 应用程序中只创建一个 Prisma 实例。这个做法有助于避免在开发过程中每次热重载时都创建新的 Prisma 实例

```ts
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
```



#### init prisma

```
npx prisma init
```

it will generate a .env  and prisma\schema.prisma

.env

```properties
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"
#postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```

prisma\schema.prisma

```scheme
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}


model User{
  id String @id @default(cuid())
  name String
}
```



generate table

```
npx prisma generate

npx prisma db push
```





```sh
npx prisma migrate dev --name init
```







