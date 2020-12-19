import React, { Component } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';

class PersonalDetails extends Component {
    state = {
        personalForm: {}
    }

    handleChangePersonal = async (e) => {
        const personalForm = { ...this.state.personalForm };
        personalForm.personal[e.currentTarget.name] = e.currentTarget.value;
        await this.setState({ personalForm });
        //console.log(this.state.personalForm)
        this.props.handleChange(personalForm);
    }

    componentDidMount() {
        this.setState({ personalForm: this.props.form });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.form && prevProps.form !== this.props.form) {
            this.setState({ personalForm: this.props.form });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Grid item xs={9} style={{ padding: "2rem" }}>
                    <Paper>
                        <form>
                            <div style={{ padding: "1rem", paddingBottom: "0rem" }}>
                                <h2>1. PERSONAL DETAILS</h2>
                            </div>
                            <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingBottom: "0rem" }}>
                                <div className="col-6" style={{ padding: "1rem" }}>
                                    <label for="exampleInputFirstName1" class="form-label">First Name</label>
                                    <input value={this.props.form.personal.firstName} name="firstName" onChange={this.handleChangePersonal} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div className="col-6" style={{ padding: "1rem" }}>
                                    <label for="exampleInputSecondName1" class="form-label">Last Name</label>
                                    <input value={this.props.form.personal.lastName} name="lastName" onChange={this.handleChangePersonal} type="secondName" class="form-control" id="exampleInputSecondName1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                            </div>
                            <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem" }}>
                                <div className="col-6" style={{ padding: "1rem" }}>
                                    <label for="exampleInputFirstName1" class="form-label">Contact</label>
                                    <input value={this.props.form.personal.contact} name="contact" onChange={this.handleChangePersonal} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div className="col-6" style={{ padding: "1rem" }}>
                                    <label for="exampleInputSecondName1" class="form-label">Email Address</label>
                                    <input value={this.props.form.personal.email} name="email" onChange={this.handleChangePersonal} type="secondName" class="form-control" id="exampleInputSecondName1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"></div>
                                </div>

                            </div>
                            <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem" }}>
                                <div className="col-6" style={{ padding: "1rem", paddingTop: "0rem" }}>
                                    <label for="exampleInputFirstName1" class="form-label">Location</label>
                                    <input value={this.props.form.location} name="location" onChange={this.handleChangePersonal} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                            </div>
                            {/* <div style={{ padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem" }}>
                            <h3>Social Links</h3>
                        </div> */}
                        </form>
                    </Paper>
                </Grid>

            </React.Fragment>
        );
    }
}

export default PersonalDetails;