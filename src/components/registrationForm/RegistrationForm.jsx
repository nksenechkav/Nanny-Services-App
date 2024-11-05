// src/components/registrationForm/RegistrationForm.jsx

import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import css from './RegistrationForm.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { RiEyeOffLine, RiEyeLine } from 'react-icons/ri';

Modal.setAppElement('#root');

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().trim()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, 'Invalid email address')
    .required('Required'),
  password: Yup.string().trim()
    .matches(/^(?=.*[a-zA-Z])(?=.*\d).{5,}$/, 'Password must contain at least one letter, one digit, and be at least 5 characters long')
    .required('Required'),
});

export const RegistrationForm = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const [showPassword, setShowPassword] = useState(false);

  // Функция для переключения видимости пароля
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, actions) => {
    dispatch(register({
      name: values.name,
      email: values.email,
      password: values.password,
    }))
      .unwrap()
      .then(() => toast.success('Registration success. Congratulations!'))
      .catch(() => toast.error('Registration failed. Please check your credentials!'));
    actions.resetForm();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      className={css['modal-content']}
      overlayClassName={css['modal-overlay']}
    >
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form} autoComplete="off">
      <p className={css['form-header']}>Registration</p>
      <p className={css['form-text']}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
        <div className={css['form-wrapper']}>
          {/* <label className={css.label} htmlFor={nameFieldId}>Username</label> */}
          <Field className={css.field} type="text" name="name" id={nameFieldId} placeholder="Name" autoComplete="current-username"/>
          <ErrorMessage name="name" component="p" className={css.error} />
        </div>
        <div className={css['form-wrapper']}>
          {/* <label className={css.label} htmlFor={emailFieldId}>Email</label> */}
          <Field className={css.field} type="email" name="email" id={emailFieldId} placeholder="Email" autoComplete="current-email"/>
          <ErrorMessage name="email" component="p" className={css.error} />
        </div>
        <div className={css['form-wrapper']}>
          {/* <label className={css.label} htmlFor={passwordFieldId}>Password</label> */}
          <Field className={css.field}  type={showPassword ? 'text' : 'password'} name="password" id={passwordFieldId} placeholder="Password" autoComplete="current-password"/> 
          <button
        type="button"
        onClick={togglePasswordVisibility}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        {showPassword ? <RiEyeLine className={css['my-icon']} size={20} /> : <RiEyeOffLine className={css['my-icon']} size={20} />}
      </button>
          <ErrorMessage name="password" component="p" className={css.error} />
        </div>
        <button className={css.btn} type="submit">Sign In</button>
        <Toaster />
      </Form>
    </Formik>
    <button className={css['close-button']} onClick={onRequestClose}>
    <AiOutlineClose size={24} />
    </button>
    </Modal>
  );
};
