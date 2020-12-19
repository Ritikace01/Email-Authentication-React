import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { Grid, Paper } from '@material-ui/core';

class Skills extends Component {
    state = {
        options1: [{ name: "Web Development", id: 1 }, { name: "Digital Marketing", id: 2 }, { name: "UI/UX", id: 3 }, { name: "Algorithms", id: 4 }],
        selectedValue1: [],
        options2: [{
            name: "HTML",
            id: 1,
        },
        {
            name: "CSS",
            id: 2,
        },
        {
            name: "JavaScript",
            id: 3,
        },
        {
            name: "Reactjs",
            id: 4,
        },
        {
            name: "Nodejs",
            id: 5,
        }],
        selectedValue2: [],
        skills: {},
    }

    handleUpdate1 = (name) => {
        const skills = { ...this.state.skills };
        const index = skills.skills.tech.findIndex((element) => element === name);
        if (index === -1) {
            skills.skills.tech.push(name);
        }
        else {
            skills.skills.tech.splice(index, 1);
        }
        this.setState({ skills });
        this.props.handleChange(this.state.skills);
    }

    handleUpdate = (name) => {
        const skills = { ...this.state.skills };
        const index = skills.skills.expertise.findIndex((element) => element === name);
        if (index === -1) {
            skills.skills.expertise.push(name);
        }
        else {
            skills.skills.expertise.splice(index, 1);
        }
        this.setState({ skills });
        this.props.handleChange(this.state.skills);
    }

    onSelect1 = (selectedList, selectedItem) => {
        console.log("Selected values 1", selectedList, selectedItem);
    }

    onSelect2 = (selectedList, selectedItem) => {
        console.log("Selected values 2", selectedList, selectedItem);
    }

    componentDidMount() {
        this.setState({ skills: this.props.form });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.form && prevProps.form !== this.props.form) {
            this.setState({ skills: this.props.form });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Grid item xs={9} style={{ padding: "2rem" }}>
                    <Paper>
                        <form>
                            <div style={{ padding: "1rem", paddingBottom: "0rem" }}>
                                <h2>4. ADD YOUR SKILLS</h2>
                            </div>
                            <div className="mb-3 row" style={{ padding: "1rem", paddingBottom: "0rem" }}>
                                <div className="col-6" style={{ padding: "1rem" }}>
                                    <label className="form-label">Your Field Of Expertise</label>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {this.state.options1.map((obj, index) => {
                                                return (
                                                    <li><a class="dropdown-item" href="#">
                                                        <div class="form-check">
                                                            <input onClick={() => this.handleUpdate(obj.name)} class="form-check-input" type="checkbox" id={obj.name} />
                                                            <label class="form-check-label" for={obj.name}>
                                                                {obj.name}
                                                            </label>
                                                        </div>
                                                    </a></li>
                                                )
                                            })}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 row" style={{ padding: "1rem", paddingTop: "0rem" }}>
                                <div className="col-6" style={{ padding: "1rem" }}>
                                    <label className="form-label">Technical Skills</label>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {this.state.options2.map((obj, index) => {
                                                return (
                                                    <li><a class="dropdown-item" href="#">
                                                        <div class="form-check">
                                                            <input onClick={() => this.handleUpdate1(obj.name)} class="form-check-input" type="checkbox" value="" id={obj.name} />
                                                            <label class="form-check-label" for={obj.name}>
                                                                {obj.name}
                                                            </label>
                                                        </div>
                                                    </a></li>
                                                )
                                            })}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Skills;