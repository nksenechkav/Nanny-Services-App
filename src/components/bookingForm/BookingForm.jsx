// src/components/bookingForm/BookingForm.jsx

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './BookingForm.module.scss';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineClockCircle } from "react-icons/ai";
import 'react-time-picker/dist/TimePicker.css';

Modal.setAppElement('#root');

const timeOptions = [
  "00:00", "00:30", "01:00", "01:30", "02:00", "02:30",
  "03:00", "03:30", "04:00", "04:30", "05:00", "05:30",
  "06:00", "06:30", "07:00", "07:30", "08:00", "08:30",
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
  "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
];


const BookingForm = ({ content, isOpen, onRequestClose }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  const initialValues = {
    address: '',
    phoneNumber: '',
    age: '',
    name: '',
    email: '',
    meetingTime: null,
    comment: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name is too short!')
      .required('Name is required'),
    
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    
    address: Yup.string()
      .required('Address is required'), 
    
    phoneNumber: Yup.string()
      .matches(/^\+380\d{9}$/, 'Phone number must be in the format +380XXXXXXXXX')  
      .required('Phone number is required'), 
  
    age: Yup.number()
      .positive('Age must be a positive number')  
      .integer('Age must be an integer')  
      .required('Child\'s age is required'),  
    
    meetingTime: Yup.date()
      .required('Meeting time is required')
      .nullable(),
    
    comment: Yup.string()
      .min(5, 'Comment is too short!')  // Минимальная длина комментария
  });
  

  const onSubmit = (values, { resetForm }) => {
    // Отображаем уведомление об успехе
  toast.success('Appointment scheduled!', {
    onClose: () => {
      onRequestClose(); // Закрываем форму после завершения показа тоста
    }
  });

  // Очищаем все поля формы
  resetForm();
  
  // Очищаем вручную поле meetingTime
  setSelectedTime(null);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setIsTimePickerOpen(false); // Закрываем список после выбора
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
        {( { setFieldValue, values } ) => (
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
                value={values.phoneNumber} // Підключено до Formik
                onChange={(e) => {
                  const inputValue = e.target.value;

                  // Дозволяємо редагувати лише цифри після "+380"
                  if (inputValue.startsWith("+380")) {
                    setFieldValue("phoneNumber", inputValue); // Оновлюємо значення через Formik
                  } else if (inputValue === "") {
                    setFieldValue("phoneNumber", "+380"); // Якщо користувач видаляє все, повертаємо "+380"
                  }
                }}
                onBlur={() => {
                  // Забезпечуємо, що "+380" залишиться навіть після втрати фокуса
                  if (!values.phoneNumber.startsWith("+380")) {
                    setFieldValue("phoneNumber", "+380");
                  }
                }}
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
            <div className={css['time-picker-wrapper']}>
                      <div className={css['time-picker-main']}>
                        <input
                          type="text"
                          value={values.meetingTime ? values.meetingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                          readOnly
                          placeholder={selectedTime || "Meeting time"}
                          onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                          className={css['time-picker-input']}
                        />
                        <AiOutlineClockCircle 
                          size={24} 
                          color="black" 
                          className={css['my-icon']} 
                          onClick={() => setIsTimePickerOpen(!isTimePickerOpen)} 
                        />
                        <ErrorMessage name="meetingTime" component="div" className={css['error']} />
                      </div>
                      {isTimePickerOpen && (
                        <ul className={css['time-list']}>
                          <p className={css['time-text']}>Meeting time</p>
                        {timeOptions.map((time) => (
                          <li
                            key={time}
                            className={css['time-option']}
                            onClick={() => handleTimeChange(time)}
                          >
                            {time}
                          </li>
                        ))}
                      </ul>
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
