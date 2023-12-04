import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  gap: 8px;
`;

export const FormField = styled(Field)`
  margin-left: 4px;
`;

export const FormButton = styled.button`
  margin-left: 24px;
  height: 24px;
`;

export const FormError = styled(ErrorMessage)`
  color: tomato;
`;
