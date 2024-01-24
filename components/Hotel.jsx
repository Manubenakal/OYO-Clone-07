import Image from 'next/image';
import Link from 'next/link';

const Hotel = ({ e }) => {
  return (
    <div className='border-2 border-red-500 rounded-lg h-90 w-full mb-5 p-5 '>
      <div className='flex'>
        <Image
          src={e?.banner}
          width={200}
          height={200}
          alt='hotel'
          className='w-96 h-70 mr-3'
        ></Image>
        <div className='flex flex-col justify-between '>
          {e
            ? e.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    width={200}
                    height={200}
                    alt='hotel'
                    className='w-28 h-14 '
                  ></Image>
                );
              })
            : ''}
        </div>
        <div className='ml-20'>
          <h2 className='font-bold line-clamp-1 text-3xl'>{e?.name}</h2>
          <p className='text-justify my-5 text-lg line-clamp-2'>
            {e?.description}
          </p>
          <div className='my-5 text-2xl'>
            <span className='font-bold'>Facilities:</span>
            <ul className='flex '>
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className='mr-10 mb-3 flex items-center'
                      >
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
          </div>
          <div className='flexs items-center'>
            <button className='w-60 h-14 rounded-3xl bg-blue-500 text-lg font-bold text-white'>
              Price : &#8377; {e?.price}
            </button>
            <Link
              href={`/hotels/${e?._id}`}
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
