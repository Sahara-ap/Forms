import { dummyjsonApi } from 'store/api/dummyjson.api';
import { DummyjsonRoute } from 'store/api/dummyjson.routes';
import { TWorkPlacesResponse } from './types/work-places-response.interface';



export const requestWorkPlaces = async (): Promise<TWorkPlacesResponse> =>
  await dummyjsonApi.get(DummyjsonRoute.Form2WorkPlace()).then((res) => res.data);

