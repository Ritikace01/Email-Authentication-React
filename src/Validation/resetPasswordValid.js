import * as yup from 'yup';

export const resetPasswordSchema = yup.object().shape({
    password1: yup.string("Password must be a string").required("Password is required").min(6, "Password is atleast 6 characters long").max(20, "Password is at max 20 characters long"),
    password2: yup.string("Password must be a string").required("Password is required").oneOf([yup.ref('password1'), null], 'Passwords must match')
}); 