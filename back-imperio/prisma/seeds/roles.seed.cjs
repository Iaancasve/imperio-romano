async function seedRoles(prisma) {
  console.log('🌱 Seeding roles...');
  await prisma.rol.createMany({
    data: [
      { descripcion: 'Senado' },
      { descripcion: 'Gobernador' },
    ],
    skipDuplicates: true,
  });
  console.log('✅ Roles seeded');
}

module.exports = { seedRoles };