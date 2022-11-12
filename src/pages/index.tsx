import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meet Sometime</title>
        <meta
          name='description'
          content='Schedule meeting with whomever you want, whenever you want'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-screen flex flex-col justify-center items-center gap-3 md:gap-6 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white'>Meet Sometime</h1>
        <p className='text-md md:text-xl'>Coming Soon...</p>
      </main>
    </>
  );
}
