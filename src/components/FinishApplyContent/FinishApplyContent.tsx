import React from 'react';

import * as S from './FinishApplyContent.styled';
import { useSelector } from 'react-redux';
import { selectForm1Data } from 'store/form1-reducer/form1.selectors';
import { selectForm3Data } from 'store/form3-reducer/form3.selectors';

export const FinishApplyContent: React.FC = () => {
  const { 'money-value': moneyValue, 'money-term': moneyTerm } = useSelector(selectForm3Data);

  return (
    <S.Container>
      Вам одобрена сумма {moneyValue} тысячи руб  на {moneyTerm} дней.
    </S.Container>
  );
};
