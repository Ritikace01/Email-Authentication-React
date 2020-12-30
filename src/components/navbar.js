import React, { Component } from 'react';
import logo from '../pages/MyWays Logo.png';
import './navbar.css';
import TemporaryDrawer from '../components/sideDrawer';
import axios from 'axios';
import thunder from '../pages/Instant logo.png';
import jwtDecode from 'jwt-decode';
class Navbar extends Component {
    state = {
        login: {
            email: "",
            password: "",
        },
        user: "",
        open: false,
        user_Id: "",
        bool: false,
    }

    async componentDidMount() {
        try {
            const jwt = localStorage.getItem("token");
            const user = jwtDecode(jwt);
            console.log(user._id);
            // call the get api to get the user name and store that in state - user
            const { data } = await axios.get(`https://mywaybackend.herokuapp.com/api/user/${user._id}`);
            console.log("Logged in user data", data);
            this.setState({ user: data.firstName });
            //this.setState({ user });
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (e) => {
        const login = { ...this.state.login };
        login[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ login });
    }

    userLogin = async (e) => {
        e.preventDefault();
        try {
            await this.setState({ bool: true });
            const { data: jwt } = await axios.post("https://mywaybackend.herokuapp.com/api/user/login", {
                email: this.state.login.email,
                password: this.state.login.password,
            });
            console.log("From login", jwt);
            localStorage.setItem('token', jwt);
            await this.setState({ bool: false });
            // need to do a full page reload
            window.location = "/";
        } catch (err) {
            if (err.response && err.response.status === 400)
                console.log(err);
            await this.setState({ bool: false });
        }
    }

    userLogout = () => {
        localStorage.removeItem('token');
        window.location = "/";
    }

    resetPassword = async (e) => {
        console.log("Called resetPassword");
        e.preventDefault();
        try {
            await this.setState({ bool: true });
            const { data } = await axios.post("https://mywaybackend.herokuapp.com/api/user/forgotPassword", {
                email: this.state.login.email,
            });
            console.log("Response", data);
            await this.setState({ user_Id: data._id, bool: false });
        } catch (err) {
            if (err.response && err.response.status === 400) {
                console.log(err);
            }
            await this.setState({ bool: false });
        }
        console.log("Submit email to reset password");
    }

    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ boxShadow: "0px 3px 6px #0000000F" }}>
                    <div class="container-fluid">
                        <img src={logo} />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: "0" }}>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown sub-list" style={{ paddingTop: "2px" }}>
                                    <a class="nav-link dropdown-toggle" style={{ padding: "inherit", color: "black" }} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        For You
                                </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Find Matching Internships</a></li>
                                        <li><a class="dropdown-item" href="#">Hire Right Talent</a></li>

                                        <li><a class="dropdown-item" href="#">Work From Home</a></li>
                                    </ul>
                                </li>
                                <a className="sub-list" style={{ textDecoration: "none", color: "black", paddingTop: "2px" }}>
                                    <img src={thunder} />
                                    Instant Apply
                                </a>
                                <li class="nav-item" style={{ marginRight: "2rem", display: "flex", paddingTop: "4px" }}>
                                    <a className="sub-list" style={{ textDecoration: "none", color: "black" }}>Pricing</a>
                                    <a className="sub-list" style={{ textDecoration: "none", color: "black" }}>About Us</a>
                                    {!this.state.user &&
                                        <div onClick={this.props.handleClickOpen} className="signUp">
                                            <a className="sub-list" style={{ textDecoration: "none", color: "#7ECB20" }}>SIGN UP</a>
                                        </div>
                                    }
                                    {this.state.user && <a className="sub-list" style={{ textDecoration: "none", color: "#7ECB20" }}>{this.state.user}</a>}
                                </li>
                                <div className="login-btn">
                                    {/* <a onClick={() => this.toggleDrawer("right", true)} className="login-txt" style={{ textDecoration: "none" }}> LOGIN </a> */}
                                    <TemporaryDrawer
                                        resetPassword={this.resetPassword}
                                        handleClickOpen={this.props.handleClickOpen}
                                        loginState={this.state.login}
                                        passwordState={this.state.passwordState}
                                        handleChange={this.handleChange}
                                        userLogin={this.userLogin}
                                        userLogout={this.userLogout}
                                        username={this.state.user}
                                        user_Id={this.state.user_Id}
                                        bool={this.state.bool}
                                    />
                                </div>
                            </ul>

                        </div>
                    </div>
                </nav >
            </React.Fragment>
        );
    }
}

export default Navbar;