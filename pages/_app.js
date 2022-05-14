import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ventas, by Eze Gatica</title>
      </Head>
      <Link href="/">
        Home
      </Link>
      <hr />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
