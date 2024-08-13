import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { FormApi } from 'final-form';

import { useAppDispatch } from 'store/store';
import { setForm2ElementsAction } from 'store/form2-reducer/form2.reducer';
import {
  selectForm2Data,
  selectWorkPlaces,
} from 'store/form2-reducer/form2.selectors';
import { fetchWorkPlacesThunkAction } from 'store/form2-reducer/form2.thunk-actions';
import { composeValidators } from 'utils/validators/compose-validators';
import { isRequired } from 'utils/validators/is-required';
import { AppRoute } from 'utils/route/AppRoute';

import { Input } from 'components/ui/Input';
import { Select } from 'components/ui/Select';
import { Button } from 'components/ui/Button';

import { IForm2Values } from './types/form2-values.interface';

import * as S from './PageForm2.styled';

export const PageForm2: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form2data = useSelector(selectForm2Data);
  const workplaces = useSelector(selectWorkPlaces);
  const [selectValue, setSelectValue] = useState(form2data.workplace);

  const handleSelectChange = (
    value: string,
    form: FormApi<IForm2Values, Partial<IForm2Values>>,
  ) => {
    setSelectValue(value);
    form.change('workplace', value);
  };

  const handleFormSubmit = (values: IForm2Values) => {
    dispatch(setForm2ElementsAction(values));
    navigate(AppRoute.Form3());
  };

  useEffect(() => {
    setSelectValue(form2data.workplace);
  }, [form2data]);

  useEffect(() => {
    dispatch(fetchWorkPlacesThunkAction());
  }, [dispatch]);

  return (
    <>
      <Form onSubmit={handleFormSubmit} initialValues={form2data}>
        {({ handleSubmit, submitFailed, hasValidationErrors, form }) => (
          <S.Form onSubmit={handleSubmit} $isFailed={submitFailed}>
            <S.FormSection>
              <S.FormSectionTitle>Form2</S.FormSectionTitle>
              <S.FormWrapper>
                <Field
                  name="workplace"
                  validate={composeValidators([isRequired])}
                >
                  {({ input, meta }) => (
                    <S.SexLabel>
                      <S.LabelText>Место работы</S.LabelText>
                      <Select
                        {...input}
                        items={workplaces}
                        currentValue={selectValue}
                        onChange={(newValue) =>
                          handleSelectChange(newValue, form)
                        }
                      />
                      {meta.error && submitFailed && (
                        <S.ErrorText>{meta.error}</S.ErrorText>
                      )}
                    </S.SexLabel>
                  )}
                </Field>
                <Field
                  name="address"
                  validate={composeValidators([isRequired])}
                >
                  {({ input, meta }) => (
                    <S.InputLabel>
                      <S.LabelText>Адрес</S.LabelText>
                      <Input
                        {...input}
                        type="text"
                        hasErrors={meta.error && submitFailed}
                      />
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
                onClick={() => navigate(AppRoute.Form1())}
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
