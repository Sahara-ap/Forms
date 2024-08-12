import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { FormApi } from 'final-form';

import { useAppDispatch } from 'store/store';
import { setForm1ElementsAction } from 'store/form1-reducer/form1.reducer';
import { formatTelNumber } from 'utils/formatters/format-tel-number';
import { composeValidators } from 'utils/validators/compose-validators';
import { isRequired } from 'utils/validators/is-required';
import { AppRoute } from 'utils/route/AppRoute';
import { hasExactLength } from 'utils/validators/has-exact-length';

import { Input } from 'components/ui/Input';
import { Select } from 'components/ui/Select';
import { Button } from 'components/ui/Button';

import { selectForm1Data } from 'store/form1-reducer/form1.selectors';
import { IForm1Values } from './types/form1-values.interface';

import { TEL_LENGTH } from 'utils/validators/constants/validation.constants';
import * as S from './PageForm1.styled';



export const PageForm1: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form1data = useSelector(selectForm1Data);
  const [selectValue, setSelectValue] = useState(form1data.sex);

  const handleSelectChange = (
    value: string,
    form: FormApi<IForm1Values, Partial<IForm1Values>>,
  ) => {
    console.log(value);
    setSelectValue(value);
    form.change('sex', value);
  };

  const handleTelChange = (
    userTelValue: string,
    form: FormApi<IForm1Values, Partial<IForm1Values>>,
  ) => {
    form.change('tel', formatTelNumber(userTelValue));
  };

  const handleFormSubmit = (values: IForm1Values) => {
    dispatch(setForm1ElementsAction(values));
    navigate(AppRoute.Form2())
  };

  useEffect(() => {
    setSelectValue(form1data.sex);
  }, [form1data]);

  return (
    <>
      <Form onSubmit={handleFormSubmit} initialValues={form1data}>
        {({
          handleSubmit,
          submitFailed,
          hasValidationErrors,
          form,
        }) => (
          <S.Form onSubmit={handleSubmit} $isFailed={submitFailed}>
            <S.FormSection>
              <S.FormSectionTitle>Form1</S.FormSectionTitle>
              <S.Form1Wrapper>
                <Field
                  name="firstname"
                  validate={composeValidators([isRequired])}

                >
                  {({ input, meta }) => (
                    <S.InputLabel>
                      <S.LabelText>Имя</S.LabelText>
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
                <Field
                  name="lastname"
                  validate={composeValidators([isRequired])}
                >
                  {({ input, meta }) => (
                    <S.InputLabel>
                      <S.LabelText>Фамилия</S.LabelText>
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

                <Field
                  name="sex"
                  validate={composeValidators([isRequired])}
                >
                  {({ input, meta }) => (
                    <S.SexLabel>
                      <S.LabelText>Пол</S.LabelText>
                      <Select
                        {...input}
                        items={[
                          { text: 'мужской', value: 'man' },
                          { text: 'женский', value: 'woman' },
                        ]}
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
                  name="tel"
                  validate={composeValidators([isRequired, hasExactLength(TEL_LENGTH)])}
                >
                  {({ input, meta }) => (
                    <S.InputLabel>
                      <S.LabelText>Телефон</S.LabelText>
                      <Input
                        {...input}
                        type="tel"
                        placeholder="0XXX XXX XXX"
                        onChange={(event) =>
                          handleTelChange(event.currentTarget.value, form)
                        }
                        hasErrors={meta.error && submitFailed}
                        autoComplete="off"
                      />
                      {meta.error && submitFailed && (
                        <S.ErrorText>{meta.error}</S.ErrorText>
                      )}
                    </S.InputLabel>
                  )}
                </Field>
              </S.Form1Wrapper>
            </S.FormSection>

            <Button
              type="submit"
              variant="borderless"
              text="Далее"
              onSubmit={handleSubmit}
              disabled={submitFailed && hasValidationErrors}
            />
          </S.Form>
        )}
      </Form>
    </>
  );
};
