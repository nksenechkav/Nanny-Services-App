// src/components/loginForm/LoginForm.jsx

import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';
import css from './LoginForm.module.scss';
import Modal from 'react-modal';
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

export const LoginForm = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const [showPassword, setShowPassword] = useState(false);

  // Функция для переключения видимости пароля
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn({
      email: values.email,
      password: values.password,
    }))
      .unwrap()
      .then(() => toast.success('Login success. Congratulations!'))
      .catch(() => toast.error('Login failed. Please check your credentials!'));
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
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form} autoComplete="off">
      <p className={css['form-header']}>Log In</p>
      <p className={css['form-text']}>Welcome back! Please enter your credentials to access your account and continue your babysitter search.</p>
        <div className={css['form-wrapper']}>
          {/* <label className={css.label} htmlFor={emailFieldId}>Email</label> */}
          <Field className={css.field} type="email" name="email" id={emailFieldId} placeholder="Email" />
          <ErrorMessage name="email" component="p" className={css.error} />
        </div>
        <div className={css['form-wrapper']}>
          {/* <label className={css.label} htmlFor={passwordFieldId}>Password</label> */}
          <Field className={css.field}  type={showPassword ? 'text' : 'password'} name="password" id={passwordFieldId} placeholder="Password"/> 
          <button
        type="button"
        onClick={togglePasswordVisibility}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        {showPassword ? <RiEyeLine className={css['my-icon']} size={20} /> : <RiEyeOffLine className={css['my-icon']} size={20} />}
      </button>
          <ErrorMessage name="password" component="p" className={css.error} />
        </div>
        <button className={css.btn} type="submit">Log In</button>
        <Toaster />
      </Form>
    </Formik>
    <button className={css['close-button']} onClick={onRequestClose}>
    <AiOutlineClose size={24} />
    </button>
    </Modal>
  );
};
