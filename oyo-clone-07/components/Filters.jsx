'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';

const Filters = ({
  price,
  setprice,
  handlePrice,
  checkedList,
  setCheckedList,
}) => {
  const [list, setlist] = useState([]);

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get('/api/facilities');
      if (data?.facilities) {
        setlist(data.facilities);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckList = async (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setCheckedList(newList);
      return;
    }
    newList = newList.filter((i) => i !== e.target.value);
    setCheckedList(newList);
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <>
      <div className='border-2 border-red-500 rounded-md m-5 h-auto py-10 px-3'>
        <label htmlFor='price' className='text-lg mr-1 font-bold'>
          Price :{' '}
        </label>
        <input
          type='range'
          name='price'
          id='price'
          min={500}
          max={10000}
          onChange={(e) => setprice(e.target.value)}
          defaultValue={price ? price : 0}
        ></input>
        <span className='ml-2 text-sm inline-block border-2 border-black  font-bold p-2 rounded-xl'>
          &#8377;{price ? price : ''}
        </span>
        <div className='mt-3 ml-5'>
          <button
            onClick={handlePrice}
            class='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
          >
            <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              Search
            </span>
          </button>
        </div>
        <div className='my-10'>
          <h3 className='text-xl font-bold ml-1'>Filter by facilities :</h3>
          {list?.map((e) => {
            return (
              <p key={e} className='items-center my-3 grid grid-cols-4'>
                <label htmlFor='checkbox' className='col-span-2'>
                  {e}
                </label>
                <input
                  type='checkbox'
                  name='checkbox'
                  id='checkbox'
                  value={e}
                  onChange={handleCheckList}
                  className='w-5 h-5 ml-3 col-span-1'
                ></input>
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filters;
