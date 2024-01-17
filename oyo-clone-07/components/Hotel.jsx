import Image from 'next/image';

const Hotel = () => {
  return (
    <div className='border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5'>
      <div>
        <Image
          src={'/hotel-1.jpg'}
          width={200}
          height={200}
          alt='hotel'
          className='w-96 h-large-box mr-5'
        ></Image>
        <div className='grid grid-rows-3 gap-2'></div>
      </div>
    </div>
  );
};

export default Hotel;
