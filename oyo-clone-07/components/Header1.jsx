'use client';

import Image from 'next/image';
import Block from './Block';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Header1 = () => {
  let auth;

  useEffect(() => {
    auth = Cookies.get('user');
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('user');
    router.push('/');
  };

  return (
    <div className='flex justify-between border-b-2 border-gray-300 h-24 px-10 items-center'>
      <Image
        src={'/oyo-logo.png'}
        alt='logo'
        width={200}
        height={200}
        className='w-28 h-28 mr-7'
      ></Image>
      <div className=' border-gray-300 h-full flex'>
        <Block title={'Become a member'} para={'Additional 10% off'} />
        <Block title={'OYO for business'} para={'Trusted by 5000 companies'} />
        <Block
          title={'List your properties'}
          para={'Start earning in 30mins'}
        />
        <Block title={'8055'} para={'Call us to book now'} />
        <div className='flex items-center px-3'>
          <Image
            src={'/user-interface.png'}
            alt='demo'
            width={200}
            height={200}
            className='w-10 h-10 rounded-full mr-5'
          />
          {auth ? (
            <h3 className='font-bold cursor-pointer' onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href={'/login'}>
              <h3 className='font-bold'>Login/Sign up</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
