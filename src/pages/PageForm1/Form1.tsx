import { Form, Field } from 'react-final-form';

import * as S from './Form1.styled';
import { Input } from 'components/ui/Input';
import { Select } from 'components/ui/Select';
import { useEffect, useState } from 'react';
import { FormApi } from 'final-form';
import { formatTelNumber } from 'utils/formatters/format-tel-number';
import { Button } from 'components/ui/Button';
import { AppRoute } from 'utils/route/AppRoute';
import { useNavigate } from 'react-router-dom';
import { composeValidators } from 'utils/validators/compose-validators';
import { isRequired } from 'utils/validators/is-required';
import { hasExactLength } from 'utils/validators/has-exact-length';
import { TEL_LENGTH } from 'utils/validators/constants/validation.constants';

interface IForm1Values {
  firstName: string;
  lastName: string;
  sex: string;
  tel: string;
}

export const PageForm1: React.FC = () => {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState('man');

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
    navigate(AppRoute.Form2())
  };

  useEffect(() => {
    setSelectValue('man');
  }, []);

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        {({
          handleSubmit,
          submitFailed,
          hasValidationErrors,
          form,
          pristine,
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
              disabled={pristine || (submitFailed && hasValidationErrors)}
            />
          </S.Form>
        )}
      </Form>
    </>
  );
};
