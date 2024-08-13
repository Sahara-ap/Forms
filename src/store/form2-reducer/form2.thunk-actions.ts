import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestWorkPlaces } from 'store/api/form2/form2.service';
import { IWorkPlacesMapped } from 'store/api/form2/types/work-places-response.interface';
import { workPlacesMapper } from 'utils/mappers/work-places.mapper';
import { notifyError } from 'utils/notify/notify.utils';

export const fetchWorkPlacesThunkAction = createAsyncThunk(
  'form2/fetchWorkPlaces',
  async(): Promise<IWorkPlacesMapped[]> => {
    return await requestWorkPlaces()
      .then((res) => workPlacesMapper(res))
      .catch((error) => {
        notifyError('Sorry can\'t handle your request at this moment');
        throw error;
      });
  }
);
