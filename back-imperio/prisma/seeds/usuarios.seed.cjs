const bcrypt = require('bcrypt'); 

async function seedUsuarios(prisma) {
  console.log('🌱 Seeding usuarios...');
  
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash('senado123', saltRounds);
  
  let admin = await prisma.usuario.findFirst({ where: { nombre: 'Julio Cesar' } });
  
  if (!admin) {
    admin = await prisma.usuario.create({
      data: {
        nombre: 'Julio Cesar',
        contrasena: passwordHash, 
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