async function seedGobernadores(prisma) {
   console.log('🌱 Seeding gobernadores...');
   const hispania = await prisma.provincia.findUnique({ where: { nombre: 'Hispania' }});
   const galia = await prisma.provincia.findUnique({ where: { nombre: 'Galia' }});

   await prisma.gobernador.createMany({
     data: [
       { nombre: 'Lucio Anneo Séneca', edad: 45, nivelCompetencia: 9, nivelCorrupcion: 2, tiempoCargo: 5, provinciaId: hispania?.id },
       { nombre: 'Cayo Julio Vindex', edad: 52, nivelCompetencia: 7, nivelCorrupcion: 6, tiempoCargo: 3, provinciaId: galia?.id },
     ],
     skipDuplicates: true,
   });
   console.log('✅ Gobernadores seeded');
}

module.exports = { seedGobernadores };