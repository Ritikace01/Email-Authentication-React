import React, { Component } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';

class EducationDetails extends Component {
    state = {
        education: "",
        educationForm: {},
    }

    handleEducation = async (name) => {
        let { education } = this.state;
        education = name;
        await this.setState({ education });
        console.log("Highest Education completed", this.state.education);
        const educationForm = { ...this.state.educationForm };
        educationForm.education.type = this.state.education;
        this.setState({ educationForm });
    }

    handleChangeEducation = async (e) => {
        const educationForm = { ...this.state.educationForm };
        educationForm.education[e.currentTarget.name] = e.currentTarget.value;
        await this.setState({ educationForm });
        this.props.handleChange(educationForm);
    }

    componentDidMount() {
        this.setState({ educationForm: this.props.form });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.form && prevProps.form !== this.props.form) {
            this.setState({ educationForm: this.props.form });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Grid item xs={9} style={{ padding: "2rem" }}>
                    <Paper>
                        <form>
                            <div style={{ padding: "1rem", paddingBottom: "0rem" }}>
                                <h2>2. EDUCATION DETAILS</h2>
                            </div>
                            <div style={{ padding: "1rem" }}>
                                <label>Highest Completed Education</label>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a class="dropdown-item" onClick={() => this.handleEducation("10th")}>10th</a></li>
                                        <li><a class="dropdown-item" onClick={() => this.handleEducation("12th")}>12th</a></li>
                                        <li><a class="dropdown-item" onClick={() => this.handleEducation("Graduate")}>Graduate</a></li>
                                    </ul>
                                </div>
                            </div>
                            {this.state.education === "Graduate" ? (
                                <>
                                    <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingBottom: "0rem" }}>
                                        <div className="col-6" style={{ padding: "1rem" }}>
                                            <label for="exampleInputFirstName1" class="form-label">College Name</label>
                                            <input value={this.props.form.education.college} name="college" onChange={this.handleChangeEducation} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text"></div>
                                        </div>
                                        <div className="col-6" style={{ padding: "1rem" }}>
                                            <label for="exampleInputSecondName1" class="form-label">University Name</label>
                                            <input value={this.props.form.education.university} name="university" onChange={this.handleChangeEducation} type="secondName" class="form-control" id="exampleInputSecondName1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text"></div>
                                        </div>
                                    </div>
                                    <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem" }}>
                                        <div className="col-6" style={{ padding: "1rem" }}>
                                            <label for="exampleInputFirstName1" class="form-label">Course</label>
                                            <input value={this.props.form.education.course} name="course" onChange={this.handleChangeEducation} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text"></div>
                                        </div>
                                        <div className="col-6" style={{ padding: "1rem" }}>
                                            <label for="exampleInputSecondName1" class="form-label">Stream</label>
                                            <input value={this.props.form.education.stream} name="stream" onChange={this.handleChangeEducation} type="secondName" class="form-control" id="exampleInputSecondName1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text"></div>
                                        </div>

                                    </div>
                                    <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem" }}>
                                        <div className="col-6" style={{ padding: "1rem", paddingTop: "0rem" }}>
                                            <label for="exampleInputFirstName1" class="form-label">CGPA</label>
                                            <input value={this.props.form.education.cgpa2} name="cgpa2" onChange={this.handleChangeEducation} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text"></div>
                                        </div>
                                    </div>
                                </>
                            ) : this.state.education !== "" ? (
                                <>
                                    <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingBottom: "0rem" }}>
                                        <div className="col-6" style={{ padding: "1rem" }}>
                                            <label for="exampleInputFirstName1" class="form-label">School Name</label>
                                            <input value={this.props.form.education.school} name="school" onChange={this.handleChangeEducation} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text"></div>
                                        </div>
                                        <div className="col-6" style={{ padding: "1rem" }}>
                                            <label for="exampleInputFirstName1" class="form-label">Class</label>
                                            <input value={this.props.form.education.class} name="class" onChange={this.handleChangeEducation} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text"></div>
                                        </div>
                                    </div>
                                    <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem" }}>
                                        <div className="col-6" style={{ padding: "1rem" }}>
                                            <label for="exampleInputFirstName1" class="form-label">Board</label>
                                            <input value={this.props.form.education.board} name="board" onChange={this.handleChangeEducation} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text"></div>
                                        </div>
                                    </div>
                                    <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem" }}>
                                        <div className="col-6" style={{ padding: "1rem", paddingTop: "0rem" }}>
                                            <label for="exampleInputFirstName1" class="form-label">CGPA/Percentage</label>
                                            <input value={this.props.form.education.cgpa1} name="cgpa1" onChange={this.handleChangeEducation} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text"></div>
                                        </div>
                                    </div>
                                </>
                            ) : <></>}
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

export default EducationDetails;