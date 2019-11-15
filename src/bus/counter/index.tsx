import React, { FC, ReactElement } from 'react';
import { useCounter } from './hooks/useCounter';

export const Counter: FC = (): ReactElement => {
  const { counter, increase, decrease } = useCounter();

  return (
    <section>
      <button type="button" onClick={decrease}>
        -
      </button>
      <h3>{counter}</h3>
      <button type="button" onClick={increase}>
        +
      </button>
    </section>
  );
};
