import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

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
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <label>
                    Name
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>
                    Email
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </label>
                <label>
                    Subject
                    <Field type="text" name="subject" />
                </label>
                <label>
                    Message
                    <Field as="textarea" name="message" />
                </label>
            </Form>
        </Formik>
    )
}