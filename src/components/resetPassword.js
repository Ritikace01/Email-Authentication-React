import React, { Component } from 'react';
import { resetPasswordSchema } from '../Validation/resetPasswordValid';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import './resetPassword.css';

class ResePassword extends Component {
    state = {
        resetForm: {
            password1: "",
            password2: "",
        },
        error: "",
    }

    handleChange = async (e) => {
        const resetForm = { ...this.state.resetForm };
        resetForm[e.currentTarget.name] = e.currentTarget.value;
        await this.setState({ resetForm });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        // first validate the form filled
        const result = await resetPasswordSchema.validate(this.state.resetForm).catch((err) => {
            console.log("Errors", err.errors);
            return err.errors;
        });
        await this.setState({ error: result[0] });
        console.log("Error in state", this.state.error);

        if (result[0] === undefined) {
            // call the api
            // put request - body of the request includes the user id, resetForm
            const jwt = this.props.match.params.id;
            const user = jwtDecode(jwt);
            console.log("User details", user);

            try {
                const response = await axios.put(`https://mywaybackend.herokuapp.com/api/user/resetPassword/${user._id}`, {
                    password1: this.state.resetForm.password1,
                    password2: this.state.resetForm.password2,
                });
                console.log("Response", response);
                window.location = '/';
            } catch (err) {
                console.log(err);
            }
        }
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h3>
                    Reset Password Page
                </h3>
                <form style={{ display: "inline-grid", padding: "10px" }}>
                    <input className="input" placeholder="Enter your new password" name="password1" type="password" value={this.state.resetForm.password1} onChange={this.handleChange}></input>
                    <input className="input" placeholder="Re-enter your password" name="password2" type="password" value={this.state.resetForm.password2} onChange={this.handleChange}></input>
                    {this.state.error &&
                        <div style={{ color: "red" }}>
                            {this.state.error}
                        </div>
                    }
                    <button onClick={this.handleSubmit} type="submit">SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default ResePassword;