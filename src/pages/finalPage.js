import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class FinalPage extends Component {
    state = {
        form: {},
    }

    componentDidMount = async () => {
        await this.setState({ form: this.props.location.state.form });
        console.log('Form', this.state.form);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.state.form !== this.props.location.state.form) {
            this.setState({ form: this.props.location.state.form });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h2>1. PERSONAL DETAILS</h2>
                        {this.state.form && (
                            <>
                                <table class="table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>{this.props.location.state.form.personal.firstName}</th>
                                            <th>{this.props.location.state.form.personal.lastName}</th>
                                            <th>{this.props.location.state.form.personal.contact}</th>
                                            <th>{this.props.location.state.form.personal.location}</th>
                                            <th>{this.props.location.state.form.personal.email}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )}
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h2>2. EDUCATION DETAILS</h2>
                        {this.state.form && (
                            <>
                                <table class="table table-dark">
                                    <thead>
                                        {(this.props.location.state.form.education.type === "10th" || this.props.location.state.form.education.type === "12th") && (
                                            <tr>
                                                <th scope="col">School Name</th>
                                                <th scope="col">Class</th>
                                                <th scope="col">Board</th>
                                                <th scope="col">CGPA/Percentage</th>
                                            </tr>
                                        )}
                                        {this.props.location.state.form.education.type === "Graduate" && (
                                            <tr>
                                                <th scope="col">College Name</th>
                                                <th scope="col">University</th>
                                                <th scope="col">Course</th>
                                                <th scope="col">Stream</th>
                                                <th scope="col">CGPA/Percentage</th>
                                            </tr>
                                        )}
                                    </thead>
                                    <tbody>
                                        {(this.props.location.state.form.education.type === "10th" || this.props.location.state.form.education.type === "12th") && (
                                            <tr>
                                                <th>{this.props.location.state.form.education.school}</th>
                                                <th>{this.props.location.state.form.education.class}</th>
                                                <th>{this.props.location.state.form.education.board}</th>
                                                <th>{this.props.location.state.form.education.cgpa1}</th>
                                            </tr>
                                        )}
                                        {this.props.location.state.form.education.type === "Graduate" && (
                                            <tr>
                                                <th>{this.props.location.state.form.education.college}</th>
                                                <th>{this.props.location.state.form.education.university}</th>
                                                <th>{this.props.location.state.form.education.course}</th>
                                                <th>{this.props.location.state.form.education.stream}</th>
                                                <th>{this.props.location.state.form.education.cgpa2}</th>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </>
                        )}
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h2>3. WORK DETAILS</h2>
                        {this.state.form && (
                            <>
                                <table class="table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">From</th>
                                            <th scope="col">To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.location.state.form.work.map((obj, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <th>{index + 1}</th>
                                                        <th>{obj.role}</th>
                                                        <th>{obj.company}</th>
                                                        <th>{obj.from}</th>
                                                        <th>{obj.to}</th>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </>
                        )}
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h2>4. TECHNICAL SKILLS </h2>
                        {this.state.form && (
                            <>
                                <table class="table table-dark">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Tech Skills</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.location.state.form.skills.tech.map((element, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <th>{index + 1}</th>
                                                        <th>{element}</th>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </>
                        )}
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default FinalPage;