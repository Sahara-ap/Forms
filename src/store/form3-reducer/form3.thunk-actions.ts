import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestFinishApply } from 'store/api/form3/form3.service';
import { IFinishApplyRequestBody } from 'store/api/form3/types/finish-apply-request-body.interface';
import { IFinishApplyResponse } from 'store/api/form3/types/finish-apply-response.interface';
import { notifyError } from 'utils/notify/notify.utils';

export const postFinishApplyThunkAction = createAsyncThunk(
  'form3/postFinishApply',
  async ({body, onSuccessCb,}: {body: IFinishApplyRequestBody;onSuccessCb: () => void;}): Promise<IFinishApplyResponse> => {
    return await requestFinishApply(body)
      .then((res) => {
        onSuccessCb();
        return res;
      })
      .catch((error) => {
        notifyError("Sorry can't handle your request at this moment");
        throw error;
      });
  },
);
