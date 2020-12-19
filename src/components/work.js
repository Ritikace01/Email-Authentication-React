import React, { Component } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';

class WorkExperience extends Component {
    state = {
        selectedDate: "",
        workExperience: {},
    }

    handleChangeWork = (e, index) => {
        const workExperience = { ...this.state.workExperience };
        workExperience.work[index][e.currentTarget.name] = e.currentTarget.value;
        this.setState({ workExperience });
        this.props.handleChange(this.state.workExperience);
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
        console.log("Selected Date", this.state.selectedDate);
    }

    handleAdd = () => {
        const workExperience = { ...this.state.workExperience };
        workExperience.work.push({
            role: "",
            company: "",
            from: "",
            to: "",
            responsibilities: "",
        });
        this.setState({ workExperience });
    }

    componentDidMount() {
        this.setState({ workExperience: this.props.form });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.form && prevProps.form !== this.props.form) {
            this.setState({ workExperience: this.props.form });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Grid item xs={9} style={{ padding: "2rem" }}>
                    <Paper>
                        <form>
                            <div style={{ padding: "1rem", paddingBottom: "0rem" }}>
                                <h2>3. WORK EXPERIENCE</h2>
                            </div>
                            {this.state.workExperience.work && this.state.workExperience.work.map((obj, index) => {
                                return (
                                    <>
                                        <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingBottom: "0rem", marginBottom: "0px" }}>
                                            <div className="col-6" style={{ padding: "1rem" }}>
                                                <label for="exampleInputFirstName1" class="form-label">Job Role</label>
                                                <input value={obj.role} name="role" onChange={(e) => this.handleChangeWork(e, index)} type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text"></div>
                                            </div>
                                            <div className="col-6" style={{ padding: "1rem" }}>
                                                <label for="exampleInputSecondName1" class="form-label">Company Name</label>
                                                <input value={obj.company} name="company" onChange={(e) => this.handleChangeWork(e, index)} type="secondName" class="form-control" id="exampleInputSecondName1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text"></div>
                                            </div>
                                        </div>
                                        <div class="mb-3 row" style={{ display: "flex", justifyContent: "left", padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem", marginBottom: "0px" }}>
                                            <div className="col-6" style={{ padding: "1rem" }}>
                                                <label for="from" class="form-label">From</label>
                                                {/* <input type="firstName" class="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"></div> */}
                                                <input value={obj.from} name="from" onChange={(e) => this.handleChangeWork(e, index)} className="form-control" type="date" id="from"></input>
                                            </div>
                                            <div className="col-6" style={{ padding: "1rem" }}>
                                                <label for="to" class="form-label">To</label>
                                                <input value={obj.to} name="to" onChange={(e) => this.handleChangeWork(e, index)} className="form-control" type="date" id="to"></input>
                                                <div id="emailHelp" class="form-text"></div>
                                            </div>
                                            {/* <div className="col-6" style={{ padding: "1rem" }}>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ marginRight: "2vh" }} />
                                                <label for="vehicle1">I currently work here</label>
                                            </div> */}
                                        </div>
                                        <div class="mb-3 row" style={{ padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem" }}>
                                            <div className="col-6" style={{ padding: "1rem", paddingTop: "0rem" }}>
                                                <label for="exampleInputResponsibilities" class="form-label">Responsibilities</label>
                                                <textarea value={obj.responsibilities} name="responsibilities" onChange={(e) => this.handleChangeWork(e, index)} id="exampleInputResponsibilities" rows="4" cols="50"></textarea>
                                                <div id="emailHelp" class="form-text"></div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                            {/* <div style={{ padding: "1rem", paddingTop: "0rem", paddingBottom: "0rem" }}>
                            <h3>Social Links</h3>
                        </div> */}
                            <div style={{ padding: "1rem" }}>
                                <Button variant="outlined" onClick={this.handleAdd}>
                                    Add More
                            </Button>
                            </div>
                        </form>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}

export default WorkExperience;