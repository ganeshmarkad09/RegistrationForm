import * as Yup from "yup";

export const signUpSchema = Yup.object({
    firstname:Yup.string().min(4).max(15).required("Please enter your firstname"),
    lastname:Yup.string().min(4).max(15).required("Please enter your lastname"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
});