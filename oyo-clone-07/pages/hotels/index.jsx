import Filters from '@/components/Filters';
import Header1 from '@/components/Header1';
import Hotel from '@/components/Hotel';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Hotels = ({ hotels }) => {
  const [price, setprice] = useState(3500);
  const [list, setlist] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);
    if (data?.hotels) {
      setlist(data.hotels);
    }
  };

  const handleCheckList = async () => {
    const { data } = await axios.get(
      `/api/facilities/search?val=${checkedList}`
    );
    if (data?.hotels) {
      setlist(data.hotels);
    }
  };

  useEffect(() => {
    if (checkedList) {
      handleCheckList();
    }
  }, [checkedList]);

  return (
    <>
      <Header1 />
      <div className='grid grid-cols-12'>
        <div className='col-span-3'>
          <Filters
            price={price}
            setprice={setprice}
            handlePrice={handlePrice}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </div>
        <div className='col-span-9'>
          {list.length > 0
            ? list.map((e) => {
                return (
                  <div className=' m-5 ' key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className=' m-5 ' key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();
  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
