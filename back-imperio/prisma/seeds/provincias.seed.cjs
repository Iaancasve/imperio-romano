async function seedProvincias(prisma) {
  console.log('🌱 Seeding provincias...');
  await prisma.provincia.createMany({
    data: [
      { nombre: 'Hispania', lealtad: 80, prosperidadEconomica: 70, impuestos: 50, conflictosInternos: 10, riesgoRebelion: 15 },
      { nombre: 'Galia', lealtad: 60, prosperidadEconomica: 85, impuestos: 60, conflictosInternos: 30, riesgoRebelion: 40 },
      { nombre: 'Egipto', lealtad: 90, prosperidadEconomica: 95, impuestos: 80, conflictosInternos: 5, riesgoRebelion: 10 },

    ],
    skipDuplicates: true,
  });
  console.log('✅ Provincias seeded');
}

module.exports = { seedProvincias };