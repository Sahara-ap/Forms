import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IForm1Elements } from './types/form1-elements.interface';



export interface IForm1State {
  form1Elements: IForm1Elements;
}

const initialState: IForm1State = {
  form1Elements: {
    name: '',
    lastName: '',
    tel: '',
    sex: '',
  },
};

export const form1Slice = createSlice({
  name: 'form1',
  initialState,
  reducers: {
    setForm1ElementsAction: (state, {payload}: {payload: IForm1Elements}) => {
      state.form1Elements = payload;
    }
  },
});

export const {setForm1ElementsAction} = form1Slice.actions;
export const form1Reducer = form1Slice.reducer;
