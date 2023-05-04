import prisma from '@/lib/prisma';

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default async function Home() {
  const items = await prisma.item.findMany()

  return (
    <div>
      {
        items.map((item) => (
          <div key={item.id}>
            <h1>{item.nombre}</h1>
            </div>
        ))
      }
    </div>
  )
}
