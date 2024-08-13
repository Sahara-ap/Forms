import { createSlice } from '@reduxjs/toolkit';

import { IForm3Values } from 'pages/PageForm3/types/form2-values.interface';
import { TFetchStatus } from 'store/api/types/fetch-status.type';
import { IFinishApplyResponse } from 'store/api/form3/types/finish-apply-response.interface';

import { postFinishApplyThunkAction } from './form3.thunk-actions';

export interface IForm3State {
  form3Elements: IForm3Values;
  serverResponse: IFinishApplyResponse;
  serverResponseFetchStatus: TFetchStatus;
  debagError: string | null;
}

const initialState: IForm3State = {
  form3Elements: {
    'money-value': '0',
    'money-term': '0',
  },
  serverResponse: {
    title: '',
    id: '',
  },
  serverResponseFetchStatus: 'initial',
  debagError: null,
};

export const form3Slice = createSlice({
  name: 'form2',
  initialState,
  reducers: {
    setForm3ElementsAction: (state, {payload}: {payload: IForm3Values}) => {
      state.form3Elements = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postFinishApplyThunkAction.pending, (state) => {
        state.serverResponseFetchStatus = 'pending';
        state.debagError = null;
      })
      .addCase(postFinishApplyThunkAction.fulfilled, (state, action) => {
        state.serverResponseFetchStatus = 'fulfilled';
        state.serverResponse = action.payload;

      })
      .addCase(postFinishApplyThunkAction.rejected, (state, error) => {
        state.serverResponseFetchStatus = 'rejected';
        state.debagError = JSON.stringify(error);

      });
  }
});

export const {setForm3ElementsAction} = form3Slice.actions;
export const form3Reducer = form3Slice.reducer;
