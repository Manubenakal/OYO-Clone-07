'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header3 = () => {
  const [city, setcity] = useState(' ');
  return (
    <div className='h-60 bg-gradient-to-r from-red-600 to-red-400'>
      <div className=' p-5'>
        <h2 className='font-bold text-white text-4xl text-center'>
          Over 174,000+ hotels and homes across 35+ countries
        </h2>
        <div className='flex justify-center  my-5 mx-20'>
          <input
            type='text'
            placeholder='Search'
            className='outline-none w-6/12 px-3 h-16 text-lg border-gray-400  border-r-2 col-span-2'
            onChange={(e) => {
              setcity(e.target.value);
            }}
          />
          {/* <input
            type='date'
            placeholder='DD-MM-YYYY'
            className='outline-none px-3 h-16 text-lg border-r-2 border-gray-400 col=span-1'
          />
          <input
            type='date'
            placeholder='DD-MM-YYYY'
            className='outline-none px-3 h-16 text-lg border-r-2 border-gray-400 col-span-1'
          /> */}
          <Link href={`/hotels?city=${city}`}>
            <button
              type='submit'
              className='h-16 px-3 py-2  bg-green-400 hover:cursor-pointer w-60 hover:bg-green-500 text-white '
            >
              Search
            </button>
          </Link>
        </div>
        <div className='flex mx-20 my-5 font-bold'>
          <button
            type='submit'
            className='h-16 px-3 py-2   hover:cursor-pointer text-white text-xl mr-5'
          >
            Continue your search
          </button>
          <button
            type='submit'
            className='h-16 px-3 py-2   hover:cursor-pointer text-white  mr-5 border-2 border-white hover:bg-slate-300 rounded-xl'
          >
            Homestays in India
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
