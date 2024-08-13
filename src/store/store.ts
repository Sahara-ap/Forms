import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { form1Reducer } from './form1-reducer/form1.reducer';
import { form2Reducer } from './form2-reducer/form2.reducer';
import { modalsReducer } from './modals-reducer/modals.reducer';


const rootReducer = combineReducers({
  form1Reducer,
  form2Reducer,
  modalsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export type TGetStateFn = () => TRootState;
