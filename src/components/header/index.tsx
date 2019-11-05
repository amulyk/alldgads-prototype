import React, { FC, ReactElement, useState } from 'react';
import styles from './styles/index.module.scss';

type Props = {
  title?: string;
  children?: never;
};

export const Header: FC<Props> = ({ title }: Props): ReactElement => {
  const content = typeof title === 'string' ? title.toLocaleLowerCase() : title;
  const [counter, setCounter] = useState(0);

  const increase = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <section className={styles.header}>
      <h1>{content}</h1>
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

Header.defaultProps = {
  title: 'Hello!',
};
