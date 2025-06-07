import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

import s from './ContactForm.module.css';

export const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    const handleSubmit = (e) => {
        emailjs.sendForm(
            'service_7uqmovt',
            'template_mpzwbma',
            e.target,
            'k_O8o2CcJBe9XNDa-'
          ).then(
            () => {
                  toast('Thank you for mail! I will answer ASAP', {
                  icon: '🤝',
              });
            },
              (error) => {
                console.log(error);
                toast.error('Email was not delivered. Please, try again');
            }
          );
        
        e.target.reset();
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name is too short!')
            .max(30, 'Name is too long!')
            .required('Name is required'),
        email: Yup.string()
            .email('Email is not valid')
            .required('Email is required'),
        subject: Yup.string(),
        message: Yup.string(),
    })

    return (
        <div>
            <h2>Contact Me</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form className={s.form}>
                    <label className={s.form_label}>
                        Name
                        <Field className={s.form_field} type="text" name="name" />
                        <ErrorMessage className={s.form_error} name="name" component="div" />
                    </label>
                    <label className={s.form_label}>
                        Email
                        <Field className={s.form_field} type="email" name="email" />
                        <ErrorMessage className={s.form_error} name="email" component="div" />
                    </label>
                    <label className={s.form_label}>
                        Subject
                        <Field className={s.form_field} type="text" name="subject" />
                    </label>
                    <label className={s.form_label}>
                        Message
                        <Field className={s.form_field} as="textarea" name="message" />
                    </label>
                    <button className={s.submitBtn} type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
        
    )
}