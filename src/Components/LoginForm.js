// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addLoginDetails } from '../utils/credentialSlice';
import { useNavigate } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const Basic = () => {

    const navigate =useNavigate();

    const dispatch = useDispatch()
    dispatch(closeMenu())

    return(
      
        <div className='h-screen w-screen flex justify-center items-center'>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                const {email, password} = values

                dispatch(
                    addLoginDetails({
                        email, password
                    })
                  )
                  
                setSubmitting(false);
                resetForm();
                navigate("/")
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className='flex flex-col bg-red-500 h-96 w-96 items-center justify-center rounded-lg gap-2'>
                <h1 className='font-bold m-4 text-2xl text-teal-900'>Login</h1>
                <div className="w-11/12 h-auto">
                  <Field type="email" name="email" className="bg-white outline-none p-2 rounded-md w-full" placeholder="@email" />
                  <div className="h-8 w-auto"><ErrorMessage name="email" component="div" /></div>
                </div>
                <div className="w-11/12 h-auto">
                  <Field type="password" name="password" className="bg-white outline-none p-2 rounded-md w-full " placeholder="Password" />
                  <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-teal-500 px-2 rounded-md h-10 w-11/12 my-6">
                  Submit
                </button>
              </Form>
      )}
    </Formik>
  </div>
  )
};

export default Basic;