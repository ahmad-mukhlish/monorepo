import { url } from "inspector";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: "./prisma/dev.db",
});

export const prismaDb = new PrismaClient({ adapter });
