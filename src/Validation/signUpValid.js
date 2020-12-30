import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    firstName: yup.string("First name is a string").required("First name is required").max(10, "First name should not be greater than 10 characters").min(3, "First name should be atleast 3 characters"),
    lastName: yup.string("Last name is a string").max(10, "Last name should not be greater than 10 characters"),
    email: yup.string("Email is a string").email("Email is invalid").required("Email is required"),
    password: yup.string("Password is a string").required("Password is required").min(6, "Min characters should be 6").max(20, "Max characters should be 20"),
}); 