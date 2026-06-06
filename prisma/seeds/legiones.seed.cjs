async function seedLegiones(prisma) {
   console.log('🌱 Seeding legiones...');
   const hispania = await prisma.provincia.findUnique({ where: { nombre: 'Hispania' }});
   const galia = await prisma.provincia.findUnique({ where: { nombre: 'Galia' }});

   await prisma.legion.createMany({
     data: [
       { nombre: 'Legio IX Hispana', numeroSoldados: 5000, experiencia: 8, moral: 90, estado: 'activa', provinciaId: hispania?.id },
       { nombre: 'Legio VI Ferrata', numeroSoldados: 4800, experiencia: 7, moral: 85, estado: 'campaña', provinciaId: galia?.id },
     ],
     skipDuplicates: true,
   });
   console.log('✅ Legiones seeded');
}

module.exports = { seedLegiones };