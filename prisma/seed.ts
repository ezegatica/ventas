import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
    await Promise.all([
        prisma.item.upsert({
            where: { slug: 'ps4' },
            update: {},
            create: {
                nombre: 'PS4',
                slug: 'ps4',
                precio: 1000,
                descripcion: 'Consola de videojuegos PlayStation 4',
                short_descripcion: 'La play 4'
            }
        }),
        prisma.item.upsert({
            where: { slug: 'jordan-11s' },
            update: {},
            create: {
                nombre: 'Air Jordan 11s',
                slug: 'jordan-11s',
                precio: 1222,
                descripcion: 'Zapatillas Air Jordan 11s',
                short_descripcion: 'Altas llantas'
            }
        })
    ])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })