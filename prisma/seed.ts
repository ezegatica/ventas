import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    prisma.item.upsert({
      where: { slug: "ps4" },
      update: {},
      create: {
        nombre: "PS4",
        slug: "ps4",
        precio: 1000,
        descripcion: "Consola de videojuegos PlayStation 4",
        short_descripcion: "La play 4",
        imagen: ["https://i.ezegatica.com/20230504-2232T.jpeg"],
      },
    }),
    prisma.item.upsert({
      where: { slug: "jordan-11s" },
      update: {},
      create: {
        nombre: "Air Jordan 11s",
        slug: "jordan-11s",
        precio: 1222,
        descripcion: "Zapatillas Air Jordan 11s",
        short_descripcion: "Altas llantas",
        imagen: ["https://i.ezegatica.com/20230504-2229G.jpeg"],
      },
    }),
    prisma.item.upsert({
      where: { slug: "remera-blanca" },
      update: {},
      create: {
        nombre: "Remera blanca",
        slug: "remera-blanca",
        precio: 1222,
        descripcion:
          "Una remera blanca manufacturada por los dioses en el barrio de Palermo",
        short_descripcion: "Remera blanca cuello en V",
        imagen: [
          "https://i.ezegatica.com/20230504-2230v.jpeg",
          "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        ],
      },
    }),
  ]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
