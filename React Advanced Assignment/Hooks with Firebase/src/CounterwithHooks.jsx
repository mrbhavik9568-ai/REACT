import { useState } from 'react';

function CounterwithHooks() {
  let[count,setCount]= useState(0)
  function increase(){
    setCount(++count)
  }
  function decrease(){
    setCount(--count)
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <div className='style'>
        <button onClick={increase}>+</button>
        <p>{count}</p>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}
export default CounterwithHooks;
