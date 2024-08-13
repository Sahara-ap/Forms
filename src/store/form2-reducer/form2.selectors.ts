import { createSelector } from '@reduxjs/toolkit';
import { IForm2State } from './form2.reducer';
import { TRootState } from 'store/store';


const getForm2State = (state: TRootState): IForm2State => state.form2Reducer;

export const selectForm2Data = createSelector(
  [getForm2State],
  (state) => state.form2Elements,
);

export const selectWorkPlaces = createSelector(
  [getForm2State],
  (state) => state.workPlaces,
);

export const selectWorkPlacesFetchStatus = createSelector(
  [getForm2State],
  (state) => state.workPlacesFetchStatus,
);

