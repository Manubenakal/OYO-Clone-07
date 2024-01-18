import Image from 'next/image';

const Singlehotel = () => {
  return (
    <div className='w-7/12 mx-auto my-10'>
      <Image
        src={'/hotel-1.jpg'}
        width={2000}
        height={2000}
        alt='hotel'
        className='w-full h-large-box my-3  '
      ></Image>
      <div>
        <h3 className='text-3xl font-bold'>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </h3>
        <p className='my-4 text-xl text-justify'>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis no
        </p>
        <button className='w-60 h-14 rounded-3xl bg-blue-500 text-lg font-bold text-white'>
          Price : 7500
        </button>
        <p className='text-3xl font-bold my-5'>Facilities :</p>
        <ul className='flex text-xl justify-between'>
          <li>Swimming Pool</li>
          <li>Jacuzzi</li>
          <li>Laundry</li>
          <li>Spa</li>
        </ul>
        <button className='w-60 h-14 rounded-3xl bg-red-500 text-lg font-bold my-5 text-white'>
          Book now
        </button>
      </div>
    </div>
  );
};

export default Singlehotel;
