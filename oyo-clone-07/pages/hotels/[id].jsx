'use client';

import Head from 'next/head';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Link from 'next/link';

const Singlehotel = ({ hotel }) => {
  let auth;
  if (typeof window !== 'undefined') {
    auth = Cookies.get('user');
  }

  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <div className='w-7/12 mx-auto my-10'>
        <Image
          src={hotel?.banner}
          width={2000}
          height={2000}
          alt='hotel'
          className='w-full h-large-box my-3  '
        ></Image>
        <div>
          <h3 className='text-3xl font-bold'>{hotel?.name}</h3>
          <p className='my-4 text-xl text-justify'>{hotel?.description}</p>
          <button
            type='button'
            class='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-xl text-xl px-5 py-2.5 text-center me-2 mb-2'
          >
            Price : &#8377;{hotel?.price}
          </button>
          <p className='text-3xl font-bold mt-5'>Facilities :</p>
          <ul className='flex text-xl justify-between mb-5 mt-3'>
            {hotel
              ? hotel.facilities?.map((ele) => {
                  return (
                    <li key={ele.name} className='mr-10 mb-3 flex items-center'>
                      <span>
                        <Image
                          src={ele.img}
                          width={200}
                          height={200}
                          className='w-9 h-9 rounded-full'
                        ></Image>
                      </span>
                      <span className='ml-5'>{ele.name}</span>
                    </li>
                  );
                })
              : ''}
          </ul>
          {auth ? (
            <button
              type='button'
              class='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'
            >
              Book now
            </button>
          ) : (
            <Link href={'/login'}>
              <button class='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
                <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  Login to book your stay!
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(ctx) {
  // console.log(ctx);
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      hotel: data.hotel ? data.hotel : data.allhotels,
    },
  };
}

export default Singlehotel;
