import React from 'react';

function CounterUseState() {
  const [count, setCount] = React.useState(0);

  console.log('Rendered with countUseState:', count);

  const handleClickCounter = () => {
    setCount(count + 1);
    localStorage.setItem('countUseState', count + 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClickCounter} className="bg-white p-4 rounded-lg mt-2">
        Click
      </button>
    </div>
  );
}

export default CounterUseState;
