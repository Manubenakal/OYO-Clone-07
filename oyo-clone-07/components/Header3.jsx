'use client';

import Link from 'next/link';

const Header3 = () => {
  return (
    <div className='h-60 bg-gradient-to-r from-red-600 to-red-400'>
      <div className=' p-5'>
        <h2 className='font-bold text-white text-4xl text-center'>
          Over 174,000+ hotels and homes across 35+ countries
        </h2>
        <div className='grid grid-cols-5 my-5 mx-20'>
          <input
            type='text'
            placeholder='Search'
            className='outline-none px-3 h-16 text-lg border-gray-400  border-r-2 col-span-2'
          />
          <input
            type='text'
            placeholder='Search'
            className='outline-none px-3 h-16 text-lg border-r-2 border-gray-400 col=span-1'
          />
          <input
            type='text'
            placeholder='Search'
            className='outline-none px-3 h-16 text-lg border-r-2 border-gray-400 col-span-1'
          />
          <Link href={'/hotels'}>
            <button
              type='submit'
              className='h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer w-full hover:bg-green-500 text-white '
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
