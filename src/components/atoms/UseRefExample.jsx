import { useRef } from 'react';

const CounterWithRef = () => {
  const countRef = useRef(0);

  console.log('Rendered with countRef:', countRef.current);

  const increment = () => {
    countRef.current += 1;
    console.log('Updated countRef:', countRef.current);
    localStorage.setItem('countRef', countRef.current);
  };

  return (
    <div>
      <p>{countRef.current}</p>
      <button onClick={increment} className="btn bg-white-300">
        Tambah useREf
      </button>
    </div>
  );
};

export default CounterWithRef;
