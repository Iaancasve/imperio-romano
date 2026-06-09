# Imperio Romano - Sistema de Gestión Imperial

Este proyecto es una plataforma para la gestión de provincias, gobernadores, rebeliones e informes del Imperio Romano, desarrollada con NestJS (Backend) y React/Vite (Frontend).

## 🚀 Requisitos previos
- Node.js (versión 24 o superior recomendada)
- PostgreSQL instalado y corriendo
- Yarn (o npm)

## 📋 Configuración del Backend

1. Entra en la carpeta del backend:
```bash
   cd back-imperio
   Instala las dependencias:
   yarn install
   cp .env.example .env

  CREAR TABLAS
  npx prisma migrate dev --name init

  LANZAR SEEDERS

  node prisma/seeds/seed.cjs

  LEVANTAR EL SERVIDOR (BACK)

  yarn start:dev

1. Entra en la carpeta del frontend:
```bash
   cd front-imperio
   Instala las dependencias:
   npm install

   LEVANTAR EL SERVIDOR (FRONT)

   npm run dev
