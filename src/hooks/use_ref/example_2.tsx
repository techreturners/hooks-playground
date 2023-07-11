import React, { useRef } from 'react';

export const Example2 : React.FC = () => {
  
    const divRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if(divRef.current) {
        divRef.current.style.backgroundColor = 'red';
    }
  };

  return (
    <div>
      <div ref={divRef} style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}