import { createSlice } from '@reduxjs/toolkit';
import { IForm1Values } from 'pages/PageForm1/types/form1-values.interface';

export interface IForm1State {
  form1Elements: IForm1Values;
}

const initialState: IForm1State = {
  form1Elements: {
    firstname: '',
    lastname: '',
    sex: '',
    tel: '',
  },
};

export const form1Slice = createSlice({
  name: 'form1',
  initialState,
  reducers: {
    setForm1ElementsAction: (state, {payload}: {payload: IForm1Values}) => {
      state.form1Elements = payload;
    }
  },
});

export const {setForm1ElementsAction} = form1Slice.actions;
export const form1Reducer = form1Slice.reducer;
