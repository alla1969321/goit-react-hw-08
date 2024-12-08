import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]{1}/, 'First symbol must be letter')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /[0-9]{3}-[0-9]{2}-[0-9]{2}/,
      'Number must be in format <123-45-67>'
    )
    .max(9, 'Too Long!')
    .required('Required'),
});
