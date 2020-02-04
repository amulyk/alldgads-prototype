import React, { ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useStarshipsFetch } from './hooks/useStarshipsFetch';
import { Title } from '../../elements/title';
import { Starship } from './types';

import ArrowSvg from './arrow.svg';

export const StarshipsComponent = (): ReactElement => {
  const { isFetching, data, error } = useStarshipsFetch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('ru');
  }, []);

  const changeLocaleToRu = (): void => {
    i18n.changeLanguage('en');
  };

  const errorMessage = typeof error === 'object' && error.status === 404 && <p>Not found!</p>;

  const loader = isFetching && <p>Loading data from API...</p>;

  const list = isFetching
    || data.results.map(
      ({ name }: Starship, index: number): ReactElement => <li key={Number(index)}>{name}</li>,
    );

  return (
    <>
      <Title>Starships</Title>
      {errorMessage}
      {loader}
      {list}
      {t('common:title')}
      <button type="submit" onClick={changeLocaleToRu}>Ru</button>
      <ArrowSvg />
    </>
  );
};
