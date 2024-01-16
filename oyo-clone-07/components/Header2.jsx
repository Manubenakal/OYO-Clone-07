const Header2 = () => {
  const List = [
    {
      name: 'Bengaluru',
    },
    {
      name: 'Hyderabad',
    },
    {
      name: 'Chennai',
    },
    {
      name: 'Kochi',
    },
    {
      name: 'Mumbai',
    },
  ];

  return (
    <div className='flex px-8 py-3 bg-gray-400 justify-between'>
      {List.map((e) => {
        return <span key={e.name}>{e.name}</span>;
      })}
    </div>
  );
};

export default Header2;
