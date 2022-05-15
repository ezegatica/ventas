import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
  return (
    <>
      <Head>
        <title>Ventas, by Eze Gatica</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
