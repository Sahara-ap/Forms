import { createSelector } from '@reduxjs/toolkit';
import { IForm3State } from './form3.reducer';
import { TRootState } from 'store/store';


const getForm3State = (state: TRootState): IForm3State => state.form3Reducer;

export const selectForm3Data = createSelector(
  [getForm3State],
  (state) => state.form3Elements,
);

export const selectServerResponse = createSelector(
  [getForm3State],
  (state) => state.serverResponse,
);

export const selectServerResponseFetchStatus = createSelector(
  [getForm3State],
  (state) => state.serverResponseFetchStatus,
);

