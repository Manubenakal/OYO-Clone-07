import Image from 'next/image';
import Link from 'next/link';

const Hotel = () => {
  return (
    <div className='border-2 border-red-500 rounded-lg h-75 w-full mb-5 p-5 '>
      <div className='flex'>
        <Image
          src={'/hotel-1.jpg'}
          width={200}
          height={200}
          alt='hotel'
          className='w-96 h-70 mr-3'
        ></Image>
        <div className='grid grid-rows-3 '>
          <Image
            src={'/hotel-1.jpg'}
            width={200}
            height={200}
            alt='hotel'
            className='w-28  '
          ></Image>
          <Image
            src={'/hotel-1.jpg'}
            width={200}
            height={200}
            alt='hotel'
            className='w-28  '
          ></Image>
          <Image
            src={'/hotel-1.jpg'}
            width={200}
            height={200}
            alt='hotel'
            className='w-28  '
          ></Image>
          <Image
            src={'/hotel-1.jpg'}
            width={200}
            height={200}
            alt='hotel'
            className='w-28  '
          ></Image>
        </div>
        <div className='ml-20'>
          <h2 className='font-bold line-clamp-1 text-3xl'>
            whbiq dqhbqhbf hbf jhb
          </h2>
          <p className='text-justify my-5 text-lg'>
            orem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus!
          </p>
          <p className='my-5 text-2xl'>
            <span className='font-bold'>Facilities:</span>
            <span>Free wifi, swimming pool,jacuzzi,Laundry</span>
          </p>
          <div className='flexs items-center'>
            <button className='w-60 h-14 rounded-3xl bg-blue-500 text-lg font-bold text-white'>
              Price : 7500
            </button>
            <Link
              href={'/hotels/2'}
              className='text-xl  font-bold text-red-600 ml-10'
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
