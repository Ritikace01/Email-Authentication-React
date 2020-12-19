import React, { Component } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import PersonalDetails from '../components/personalDetails';
import EducationDetails from '../components/education';
import WorkExperience from '../components/work';
import Skills from '../components/skills';

class ResumeForm extends Component {
    state = {
        count: 0,
        changeNext: 0,
        form: {
            personal: {
                firstName: "",
                lastName: "",
                contact: "",
                email: "",
                location: "",
            },
            education: {
                type: "",
                school: "",
                class: "",
                board: "",
                cgpa1: "",
                college: "",
                university: "",
                course: "",
                stream: "",
                cgpa2: "",
            },
            work: [
                {
                    role: "",
                    company: "",
                    from: "",
                    to: "",
                    responsibilities: "",

                }
            ],
            skills: {
                expertise: [],
                tech: [],
            }
        }
    }

    handleChange = (obj) => {
        this.setState({ form: obj });
    }

    handleCount = async () => {
        const { count, changeNext } = this.state;
        if (count >= 0 && count !== 3) {
            await this.setState({ count: count + 1 });
        }
        else if (count === 3) {
            // redirect to the first page
            await this.setState({ changeNext: 1 });
        }
        if (count === 3 && changeNext === 1) {
            console.log("Hello")
            // new page
            this.props.history.push({
                pathname: "/submit",
                state: { form: this.state.form }
            });
        }
        console.log("Value of count and changeNext", this.state.count, this.state.changeNext);
    }

    render() {
        return (
            <React.Fragment>
                {/* Banner */}
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={3} style={{ padding: "2rem" }}>
                            <Paper style={{ padding: "1rem", display: "flex", flexDirection: "column" }}>
                                <div style={{ justifyContent: "center", display: "flex" }}>
                                    <h2>Fill In Your Details</h2>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{
                                        width: "1.5rem",
                                        height: "1.5rem",
                                        marginTop: "0.5rem",
                                        marginRight: "0.5rem",
                                        borderStyle: "solid",
                                        borderRadius: "50%",
                                        backgroundColor: this.state.count > 0 ? "green" : ""
                                    }}></div>
                                    <Button>Personal Details</Button>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{
                                        width: "1.5rem",
                                        height: "1.5rem",
                                        marginTop: "0.5rem",
                                        marginRight: "0.5rem",
                                        borderStyle: "solid",
                                        borderRadius: "50%",
                                        backgroundColor: this.state.count > 1 ? "green" : ""
                                    }}></div>
                                    <Button>Education Details</Button>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{
                                        width: "1.5rem",
                                        height: "1.5rem",
                                        marginTop: "0.5rem",
                                        marginRight: "0.5rem",
                                        borderStyle: "solid",
                                        borderRadius: "50%",
                                        backgroundColor: this.state.count > 2 ? "green" : ""
                                    }}></div>
                                    <Button>Work Experience</Button>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{
                                        width: "1.5rem",
                                        height: "1.5rem",
                                        marginTop: "0.5rem",
                                        marginRight: "0.5rem",
                                        borderStyle: "solid",
                                        borderRadius: "50%",
                                        backgroundColor: this.state.changeNext === 1 ? "green" : ""
                                    }}></div>
                                    <Button>Skills</Button>
                                </div>
                            </Paper>
                        </Grid>
                        {this.state.count === 0 ? (<PersonalDetails form={this.state.form} handleChange={this.handleChange} />) : <></>}
                        {this.state.count === 1 ? (<EducationDetails form={this.state.form} handleChange={this.handleChange} />) : <></>}
                        {this.state.count === 2 ? (<WorkExperience form={this.state.form} handleChange={this.handleChange} />) : <></>}
                        {this.state.count === 3 ? (<Skills form={this.state.form} handleChange={this.handleChange} />) : <></>}
                    </Grid>
                </div >
                <Grid container spacing={3}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "2.1rem" }}>
                            <Button variant="outlined" onClick={this.handleCount}>
                                {this.state.changeNext === 0 ? "Next" : "Submit"}
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </React.Fragment >
        );
    }
}

export default ResumeForm;