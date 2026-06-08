require('dotenv').config();
const { PrismaClient } = require('../../generated/prisma2');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const { seedRoles } = require('./roles.seed.cjs');
const { seedProvincias } = require('./provincias.seed.cjs');
const { seedUsuarios } = require('./usuarios.seed.cjs');
const { seedLegiones } = require('./legiones.seed.cjs');
const { seedGobernadores } = require('./gobernadores.seed.cjs');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seed...');

  await seedRoles(prisma);
  await seedProvincias(prisma);
  await seedUsuarios(prisma);
  await seedLegiones(prisma);
  await seedGobernadores(prisma);

  console.log('🌱 Database seed completed');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });