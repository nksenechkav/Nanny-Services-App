// src/components/bookingForm/BookingForm.jsx

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './BookingForm.module.scss';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const BookingForm = ({ isOpen, onRequestClose }) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name is too short!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    bookingDate: Yup.date()
      .required('Booking date is required')
      .nullable(),
    comment: Yup.string()
      .min(5, 'Comment is too short!')
  });

  const onSubmit = (values, { resetForm }) => {
    toast.success('Booking successful!');
    resetForm();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      className={css['modal-content']}
      overlayClassName={css['modal-overlay']}
    >
      <div className={css['modal-content-inner']}>
      <div className={css['modal-window']}> 
      <div className={css['booking-form-container']}>
      <p className={css['booking-header']}>Make an appointment with a babysitter</p>
      <p>Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css['booking-form']}>
            <div className={css['form-group']}>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" className={css['error']} />
            </div>

            <div className={css['form-group']}>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className={css['error']} />
            </div>

            <div className={css['form-group']}>
              <div className={css['date-picker-wrapper']}>
                <input
                  type="text"
                  value={values.bookingDate ? values.bookingDate.toLocaleDateString() : ''}
                  readOnly
                  placeholder="Booking date"
                  onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                  className={css['date-picker-input']}
                />
                <svg
                  className={css["my-icon"]}
                  width="24"
                  height="24"
                  onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                >
                  <use href="/icons.svg#icon-calendar"></use>
                </svg>
                {isDatePickerOpen && (
                  <DatePicker
                    selected={values.bookingDate}
                    onChange={(date) => {
                      setFieldValue('bookingDate', date);
                      setIsDatePickerOpen(false);
                    }}
                    onClickOutside={() => setIsDatePickerOpen(false)}
                    inline
                    className={css['date-picker']}
                  />
                )}
              </div>
              <ErrorMessage name="bookingDate" component="div" className={css['error']} />
            </div>

            <div className={css['form-group']}>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="div" className={css['error']} />
            </div>

            <button type="submit" className={css['submit-button']}>Send</button>
          </Form>
        )}
      </Formik>

      <ToastContainer />
      </div>
    </div>
  </div>
      
    </Modal>
   
  );
};

export default BookingForm;
