import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../Schemas";
import "./Style.css"
import Button from 'react-bootstrap/Button';

const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
}

function Newform() {


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm("succesfully");
        },
    });
    // console.log(errors);

    return (
      <div className="body">
          <div className="container">
            <div>
                <h1 className="title">Registration Form</h1>
            </div>
            <form onSubmit={handleSubmit} action="#">
               <div className="user-details">
               <div className="input-box">
                    <label htmlFor="" className="details">
                        First Name
                    </label>
                    <input type="name"
                        name="firstname"
                        id="name"
                        placeholder="Name"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {errors.firstname && touched.firstname ? (<p className="indicate"> {errors.firstname}</p>) : null}
                </div>
                <div  className="input-box">
                    <label htmlFor="" className="details">
                        Last Name
                    </label>
                    <input type="name"
                        name="lastname"
                        id="lastname"
                        placeholder="Last Name"
                        value={values.lastname}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {errors.lastname && touched.lastname ? (<p className="indicate"> {errors.lastname}</p>) : null}
                </div>
                <div  className="input-box">
                    <label htmlFor="" className="details">
                        Email
                    </label>
                    <input type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {errors.email && touched.email ? (<p className="indicate"> {errors.email}</p>) : null}
                </div>
                <div  className="input-box">
                    <label htmlFor="" className="details">
                        Password
                    </label>
                    <input type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {errors.password && touched.password ? (<p className="indicate"> {errors.password}</p>) : null}
                </div>
                <div  className="input-box">
                    <label htmlFor="" className="details">
                        Confirm Password
                    </label>
                    <input type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="Confirm Password"
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {errors.confirm_password && touched.confirm_password ? (<p className="indicate"> {errors.confirm_password}</p>) : null}
                </div>
              
               </div>
               <div>
                    <Button type="submit"  variant="primary">submit</Button>
                </div>
            </form>
        </div>
      </div>
    )
}
export default Newform;