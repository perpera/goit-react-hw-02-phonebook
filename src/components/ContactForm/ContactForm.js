import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  FormStyle,
  FormButton,
  //   FormError,
  FormField,
} from './ContactForm.styled';

const validation = Yup.object().shape({
  name: Yup.string().required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <FormStyle>
        <label>
          Name
          <FormField type="text" name="name" required></FormField>
        </label>

        <FormButton type="submit">Add contact</FormButton>
      </FormStyle>
    </Formik>
  );
};
