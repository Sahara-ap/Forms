import { createSelector } from '@reduxjs/toolkit';
import { TRootState } from 'store/store';

import { IForm1State } from './form1.reducer';

const getForm1State = (state: TRootState): IForm1State => state.form1Reducer;

export const selectForm1Data = createSelector(
  [getForm1State],
  (state) => state.form1Elements,
);

