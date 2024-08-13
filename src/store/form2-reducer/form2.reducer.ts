import { createSlice } from '@reduxjs/toolkit';
import { IForm2Values } from 'pages/PageForm2/types/form2-values.interface';
import { IWorkPlacesMapped } from 'store/api/form2/types/work-places-response.interface';
import { fetchWorkPlacesThunkAction } from './form2.thunk-actions';
import { TFetchStatus } from 'store/api/types/fetch-status.type';

export interface IForm2State {
  form2Elements: IForm2Values;
  workPlaces: IWorkPlacesMapped[];
  workPlacesFetchStatus: TFetchStatus;
  debagError: string | null;
}

const initialState: IForm2State = {
  form2Elements: {
    workplace: '',
    address: '',
  },
  workPlaces: [],
  workPlacesFetchStatus: 'initial',
  debagError: null,
};

export const form2Slice = createSlice({
  name: 'form2',
  initialState,
  reducers: {
    setForm2ElementsAction: (state, {payload}: {payload: IForm2Values}) => {
      state.form2Elements = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkPlacesThunkAction.pending, (state) => {
        state.workPlacesFetchStatus = 'pending';
        state.debagError = null;
      })
      .addCase(fetchWorkPlacesThunkAction.fulfilled, (state, action) => {
        state.workPlacesFetchStatus = 'fulfilled';
        state.workPlaces = action.payload;

      })
      .addCase(fetchWorkPlacesThunkAction.rejected, (state, error) => {
        state.workPlacesFetchStatus = 'rejected';
        state.debagError = JSON.stringify(error);

      });
  }
});

export const {setForm2ElementsAction} = form2Slice.actions;
export const form2Reducer = form2Slice.reducer;
