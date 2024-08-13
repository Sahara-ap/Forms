import { dummyjsonApi } from 'store/api/dummyjson.api';
import { DummyjsonRoute } from 'store/api/dummyjson.routes';
import { IFinishApplyResponse } from './types/finish-apply-response.interface';
import { IFinishApplyRequestBody } from './types/finish-apply-request-body.interface';



export const requestFinishApply = async (body:IFinishApplyRequestBody): Promise<IFinishApplyResponse> =>
  await dummyjsonApi.post(DummyjsonRoute.Form3Apply(), body).then((res) => res.data);

