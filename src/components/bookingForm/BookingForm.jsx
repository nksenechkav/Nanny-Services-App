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
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineClockCircle } from "react-icons/ai";

Modal.setAppElement('#root');

const BookingForm = ({ content, isOpen, onRequestClose }) => {
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
      <button className={css['close-button']} onClick={onRequestClose}>
      <AiOutlineClose size={24} />
      </button>
      <p className={css['booking-header']}>Make an appointment with a babysitter</p>
      <p className={css['booking-text']}>Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>
      <div className={css['nanny-info']}>
      <div className={css["image-wrapper"]}> 
      <img className={css["image"]} src={content.avatar_url} alt={content.name} />
      <span className={css["circle"]}></span>
      </div>
      <div className={css["info-name-wrapper"]}>
      <p className={css["info-span"]}>Nanny</p>
      <p className={css["info-name"]}>{content.name}</p>
      </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css['booking-form']}>
            <div className={css['form-group-block-small']}>
            <div>
              <Field className={css['form-group-small']}
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              />
              <ErrorMessage name="address" component="div" className={css['error']} />
            </div>

            <div>
              <Field className={css['form-group-small']}
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+380"
              />
              <ErrorMessage name="age" component="div" className={css['error']} />
            </div>

            <div>
              <Field className={css['form-group-small']}
                type="text"
                id="age"
                name="age"
                placeholder="Child's age"
              />
              <ErrorMessage name="age" component="div" className={css['error']} />
            </div>
            <div className={css['date-picker-wrapper']}>
            <div className={css['date-picker-main']}>
                <input
                  type="text"
                  value={values.bookingDate ? values.bookingDate.toLocaleDateString() : ''}
                  readOnly
                  placeholder="Meeting time"
                  onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                  className={css['date-picker-input']}
                />
               <AiOutlineClockCircle size={24} color="black" className={css['my-icon']} onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}/>
                  
                <ErrorMessage name="bookingDate" component="div" className={css['error']} />
              </div>
              {isDatePickerOpen && (
                  <DatePicker
                    selected={values.bookingDate}
                    onChange={(date) => {
                      setFieldValue('bookingDate', date);
                      setIsDatePickerOpen(false);
                    }}
                    onClickOutside={() => setIsDatePickerOpen(false)}
                    inline
                    showTimeSelect
                    showTimeSelectOnly
                    timeFormat="HH:mm"
                    timeIntervals={30} // Интервал в минутах, например, каждые 30 минут
                    className={css['date-picker']}
                  />
                )}
            </div>
             
            </div>

           <div className={css['form-group-block-big']}>
           <div>
              <Field className={css['form-group-big']}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className={css['error']} />
            </div>

            <div>
              <Field className={css['form-group-big']}
                type="text"
                id="name"
                name="name"
                placeholder="Father's or mother's name"
              />
              <ErrorMessage name="name" component="div" className={css['error']} />
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
