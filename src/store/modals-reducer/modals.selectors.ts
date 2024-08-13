import { createSelector } from '@reduxjs/toolkit';
import { TRootState } from 'store/store';

import { IModalsState } from './modals.reducer';

const getMenusState = (state: TRootState): IModalsState => state.modalsReducer;

export const selectIsFinishApplyOpened = createSelector(
  [getMenusState],
  ({ popupMode }) => popupMode === 'finish-apply',
);

