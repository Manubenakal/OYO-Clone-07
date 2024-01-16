//import React from 'react'

import Header2 from '../components/Header2';
import Header1 from '../components/Header1';
import Header3 from '@/components/Header3';
import Image from 'next/image';
import Head from 'next/head';
import Header4 from '@/components/Header4';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO Clone</title>
        <link rel='icon' href='/icon.png'></link>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className='mx-20'>
        <div className=' my-14'>
          <Image
            src={'/banner1.avif'}
            alt='banner'
            width={200}
            height={200}
            className='h-60 w-full rounded-2xl'
          />
        </div>
        <div className='mb-14'>
          <Image
            src={'/banner2.avif'}
            alt='banner'
            width={200}
            height={200}
            className='h-35 w-full rounded-2xl'
          />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
