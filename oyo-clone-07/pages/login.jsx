'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setlogin] = useState(false);

  const router = useRouter();

  const handleSignUp = async () => {
    const res = await axios.post('/api/users/register', {
      name,
      email,
      password,
    });
    if (res?.data) {
      Cookies.set('user', res.data.token);
      alert(res.data.msg);
      router.push('/');
    }
  };

  const handleLogin = async () => {
    const res = await axios.post('/api/users/login', {
      email,
      password,
    });
    if (res?.data) {
      Cookies.set('user', res.data.token);
      alert(res.data.msg);
      router.push('/');
    }
  };

  const handleToggle = () => {
    setlogin(!login);
  };

  return (
    <div>
      <Head>
        <title>OYO Login</title>
      </Head>
      <div className='flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85'>
        <div className=' absolute w-full top-10 px-20 flex items-center text-white'>
          <Link href={'/'}>
            <h2 className='text-4xl font-bold mr-5'>OYO</h2>
          </Link>
          <p className=' font-bold text-xl  '>
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className='flex justify-center w-9/12'>
          <div className='pt-20 text-white'>
            <p className='font-bold text-4xl text-justify'>
              There's a smarter way to OYO around
            </p>
            <p className='text-2xl text-justify mt-5'>
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners
            </p>
          </div>
          <div className='w-10/12 ml-20 border-2 pb-20  bg-slate-50'>
            <p className='h-10 px-10 bg-gradient-to-r from-red-400 to-red-600 items-center text-white text-lg font-bold'>
              Sign up & Get ₹500 OYO Money
            </p>
            <div className='px-10'>
              <h3 className='text-3xl font-bold my-5 '>Login/Sign up</h3>
              <p className='font-bold text-lg mb-1'>
                Please enter your phone number to continue
              </p>
              {login ? (
                ''
              ) : (
                <input
                  type='text'
                  placeholder='Enter your Name'
                  className='outline-none border my-3 border-black px-3 py-1 w-96 h-10'
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type='email'
                placeholder='Enter your Mail'
                className='outline-none border my-3 border-black px-3 py-1 w-96 h-10'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Enter your Password'
                className='outline-none border my-3 border-black px-3 py-1 w-96 h-10'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='submit'
                className='w-96 h-10 font-bold bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white my-5 rounded-lg'
                onClick={login ? handleLogin : handleSignUp}
              >
                {login ? 'Login' : 'Sign Up'}
              </button>
              <p className='my-1 text-xl'>
                <span>
                  {login
                    ? " Don't have an account"
                    : 'Already have an account?'}
                </span>
                <span
                  className='ml-3 border-b-2 border-red-500 pb-1 hover:cursor-pointer hover:text-red-600 text-red-400'
                  onClick={handleToggle}
                >
                  {login ? 'Sign Up ' : 'Login'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
