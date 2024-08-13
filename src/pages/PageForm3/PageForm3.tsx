import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { FormApi } from 'final-form';

import { useAppDispatch } from 'store/store';

import { fetchWorkPlacesThunkAction } from 'store/form2-reducer/form2.thunk-actions';
import { composeValidators } from 'utils/validators/compose-validators';
import { isRequired } from 'utils/validators/is-required';
import { AppRoute } from 'utils/route/AppRoute';

import { Button } from 'components/ui/Button';

import * as S from './PageForm3.styled';
import { openFinishApplyPopupAction } from 'store/modals-reducer/modals.reducer';
import { isGreaterOrEqual } from 'utils/validators/is-greater-or-equal';
import { IForm3Values } from './types/form2-values.interface';
import { selectForm3Data } from 'store/form3-reducer/form3.selectors';
import { setForm3ElementsAction } from 'store/form3-reducer/form3.reducer';
import { postFinishApplyThunkAction } from 'store/form3-reducer/form3.thunk-actions';
import { selectForm1Data } from 'store/form1-reducer/form1.selectors';

export const PageForm3: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form3data = useSelector(selectForm3Data);
  const {firstname, lastname} = useSelector(selectForm1Data);

  const [moneyValue, setMoneyValue] = useState('0');
  const [moneyTerm, setMoneyTerm] = useState('0');

  const handleMoneyValueChange = (
    value: string,
    form: FormApi<IForm3Values, Partial<IForm3Values>>,
  ) => {
    setMoneyValue(value);
    form.change('money-value', value);
  };

  const handleMoneyTermChange = (
    value: string,
    form: FormApi<IForm3Values, Partial<IForm3Values>>,
  ) => {
    setMoneyTerm(value)
    form.change('money-term', value);
  };

  const handleFormSubmit = (values: IForm3Values) => {
    dispatch(setForm3ElementsAction(values));
    const body = {
      title: `${firstname} ${lastname}`,
    };

    dispatch(postFinishApplyThunkAction({
      body,
      onSuccessCb: () => dispatch(openFinishApplyPopupAction()),
    }))
  };




  return (
    <>
      <Form onSubmit={handleFormSubmit} initialValues={form3data}>
        {({ handleSubmit, submitFailed, hasValidationErrors, form }) => (
          <S.Form onSubmit={handleSubmit} $isFailed={submitFailed}>
            <S.FormSection>
              <S.FormSectionTitle>Form3</S.FormSectionTitle>
              <S.FormWrapper>

                <Field
                  name="money-value"
                  validate={composeValidators([isRequired, isGreaterOrEqual(1)])}
                >
                  {({ input, meta }) => (
                    <S.InputLabel>
                      <S.LabelText>Сумма займа</S.LabelText>
                      <input
                        {...input}
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        onChange={(evt) => handleMoneyValueChange(evt.currentTarget.value, form)}
                      />
                      <S.InputRangeValue>{`${moneyValue} тыс руб`}</S.InputRangeValue>

                      {meta.error && submitFailed && (
                        <S.ErrorText>{meta.error}</S.ErrorText>
                      )}
                    </S.InputLabel>
                  )}
                </Field>
                <Field
                  name="money-term"
                  validate={composeValidators([isRequired, isGreaterOrEqual(1)])}
                >
                  {({ input, meta }) => (
                    <S.InputLabel>
                      <S.LabelText>Срок займа</S.LabelText>
                        <input
                          {...input}
                          type="range"
                          min={0}
                          max={120}
                          step={1}
                          onChange={(evt) => handleMoneyTermChange(evt.currentTarget.value, form)}
                        />
                      <S.InputRangeValue>{`${moneyTerm} месяцев`}</S.InputRangeValue>

                      {meta.error && submitFailed && (
                        <S.ErrorText>{meta.error}</S.ErrorText>
                      )}
                    </S.InputLabel>
                  )}
                </Field>
              </S.FormWrapper>
            </S.FormSection>
            <S.ButtonWrapper>
              <Button
                type="button"
                variant="borderless"
                text="Назад"
                onClick={() => navigate(AppRoute.Form2())}
              />

              <Button
                type="submit"
                variant="borderless"
                text="Далее"
                onSubmit={handleSubmit}
                disabled={submitFailed && hasValidationErrors}
              />
            </S.ButtonWrapper>
          </S.Form>
        )}
      </Form>
    </>
  );
};
