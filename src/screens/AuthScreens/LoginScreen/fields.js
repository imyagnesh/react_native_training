import TextInput from '../../../components/TextInput';

export const fields = [
  {
    name: 'username',
    component: TextInput,
    placeholder: 'Username',
    validate: value => {
      if (!value) {
        return 'Required';
      }
      return '';
    },
  },
  {
    name: 'password',
    component: TextInput,
    secureTextEntry: true,
    placeholder: 'Password',
    validate: value => {
      if (!value) {
        return 'Required';
      }
      return '';
    },
  },
];

export const initialValues = fields.reduce((p, c) => {
  return {...p, [c.name]: ''};
}, {});
