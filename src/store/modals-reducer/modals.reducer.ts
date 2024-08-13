import { createSlice } from '@reduxjs/toolkit';

import { TPopupMode } from './types/modal-reducer.types';

export interface IModalsState {
  popupMode: TPopupMode;
}

const initialState: IModalsState = {
  popupMode: 'disabled',
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    closePopupAction: (state) => {
      state.popupMode = 'disabled';
    },
    openFinishApplyPopupAction: (state) => {
      state.popupMode = 'finish-apply';
    },
  },
});

export const {
  closePopupAction,
  openFinishApplyPopupAction,
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
