'use client';

import Image from 'next/image';

const Header4 = () => {
  return (
    <div className='flex my-14 items-center justify-between border-2 border-gray-300 rounded-xl px-5 '>
      <div className='flex items-center'>
        <Image
          src={'/fire.jpg'}
          width={200}
          height={200}
          alt='fire'
          className='h-20 w-20 rounded-full mr-5'
        />

        <div className='text-xl'>
          <p className='font-bold'>Get acces to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className='flex'>
        <input
          type='email'
          className='px-6 py-3 rounded-lg mr-5 w-80 h-16 outline-none border border-gray-300'
          placeholder='e.g. manubenakal@gmail.com'
        />
        <button
          type='submit'
          className=' w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer '
        >
          Notify
        </button>
      </div>
    </div>
  );
};

export default Header4;
