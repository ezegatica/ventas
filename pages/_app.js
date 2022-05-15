import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <>
      <Head>
        <title>Ventas, by Eze Gatica</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
