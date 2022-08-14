    
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { Link } from 'react-router-dom';
import axios from '../axioss';
const REGISTER_URL = "/users";

// import axios from "axios";
// const REGISTER_URL = "/users";




export function Register(){

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({} as any);
  
    ///// State
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            date: new Date(),
            accept: false
        },
        validate: (data) => {
            let errors :any= {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }

            if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }

            if (!data.password) {
                errors.password = 'Password is required.';
            }

            if (!data.accept) {
                errors.accept = 'You need to agree to the terms and conditions.';
            }

            return errors;
        },

        onSubmit: async (data) => {

            //  fetch(`http://localhost:3002/users`, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
        
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }

     

        
    });

    const formikTouched: any = formik.touched;
    const formikErrors: any = formik.errors;

 
    const isFormFieldValid = (name: string) => !!(formikTouched[name] && formikErrors[name]);
    const getFormErrorMessage = (name: string) => {
      return isFormFieldValid(name) && <small className="p-error">{formikErrors[name]}</small>;
    };

 
    const dialogFooter = <div className="flex justify-content-center"> <Link to={'/home'}><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></Link></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul  style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (

       <div className='flex justify-content-end '>
        <div ><img src="https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3078&q=80" className='img'alt=""/></div>

        
        <div className="form-demo ">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b>
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-end p-6 gap-9">

                <div className="card">
                    <h5 className=' text-center'>Register</h5>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Name*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                                    className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                                <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Calendar id="date" name="date" value={formik.values.date} onChange={formik.handleChange} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                <label htmlFor="date">Birthday</label>
                            </span>
                        </div>
                
                        <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>I agree to the terms and conditions*</label>
                        </div>

                        <Button type="submit" label="Submit" className="mt-1" />
                    

    
                        <Link to={'/login'}><h5>  Already a member? Sign In.</h5></Link>
                    </form>
                </div>



                </div>

            </div>

        </div>
    );
}
             