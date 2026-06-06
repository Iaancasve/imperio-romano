async function seedUsuarios(prisma) {
  console.log('🌱 Seeding usuarios...');
  
  let admin = await prisma.usuario.findFirst({ where: { nombre: 'Julio Cesar' } });
  
  if (!admin) {
    admin = await prisma.usuario.create({
      data: {
        nombre: 'Julio Cesar',
        contrasena: 'senado123',
      }
    });
  }

  const rolSenado = await prisma.rol.findUnique({ where: { descripcion: 'Senado' }});
  
  if (rolSenado) {
     const asig = await prisma.rolAsignado.findFirst({ where: { usuarioId: admin.id, rolId: rolSenado.id } });
     if(!asig) {
        await prisma.rolAsignado.create({
            data: { usuarioId: admin.id, rolId: rolSenado.id }
        });
     }
  }
  console.log('✅ Usuarios seeded');
}

module.exports = { seedUsuarios };