import { Pool } from "pg";
import config from "./utils/env";
import { PrismaPg } from "../node_modules/@prisma/adapter-pg/dist/index";
import { PrismaClient } from "../dist/generated/client";

let prisma: PrismaClient;

export const getPrisma = () => {
  if (!prisma) {
    const pool = new Pool({ connectionString: config.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    prisma = new PrismaClient({ adapter });
  }
  return prisma;
};

const prismaInstance = getPrisma();
export default prismaInstance;
