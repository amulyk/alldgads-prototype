import { useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return { counter, increase, decrease };
};
