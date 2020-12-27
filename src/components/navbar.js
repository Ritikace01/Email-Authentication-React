import React, { Component } from 'react';
import logo from '../pages/MyWays Logo.png';
import CloseIcon from '@material-ui/icons/Close';
import { TextField, Grid } from '@material-ui/core';
import './navbar.css';
import axios from 'axios';
import { DesktopWindows } from '@material-ui/icons';
class Navbar extends Component {
    state = {
        step: 0,
        login: {
            email: "",
            password: "",
        },
    }
    componentDidMount() {
        this.setState({ step: this.props.step });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.step != this.props.step) {
            this.setState({ step: this.props.step });
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
            const { data: jwt } = await axios.post("https://mywaybackend.herokuapp.com/api/user/login", {
                email: this.state.login.email,
                password: this.state.login.password,
            });
            console.log("From login", jwt);
            localStorage.setItem('token', jwt);
            // need to do a full page reload
            window.location = "/";
        } catch (err) {
            if (err.response && err.response.status === 400)
                console.log(err);
        }
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src={logo} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: "0" }}>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown sub-list">
                                <a class="nav-link dropdown-toggle" style={{ padding: "inherit" }} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    For You
          </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Find Matching Internships</a></li>
                                    <li><a class="dropdown-item" href="#">Hire Right Talent</a></li>

                                    <li><a class="dropdown-item" href="#">Work From Home</a></li>
                                </ul>
                            </li>
                            <li class="nav-item" style={{ marginRight: "2rem", display: "flex" }}>
                                <a className="sub-list" style={{ textDecoration: "none", color: "black" }}>Instant Apply</a>
                                <a className="sub-list" style={{ textDecoration: "none", color: "black" }}>Pricing</a>
                                <a className="sub-list" style={{ textDecoration: "none", color: "black" }}>About Us</a>
                                {this.props.user && <>
                                    <a className="sub-list" style={{ textDecoration: "none", color: "#7ECB20" }}>{this.props.user}</a>
                                    <a className="sub-list" style={{ textDecoration: "none", color: "#7ECB20" }}>
                                        <div className="login-btn" onClick={this.props.renderLogout} style={{ borderStyle: "solid", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", background: "#7ECB20", color: "white" }}>
                                            LOGOUT
                                        </div>
                                    </a>
                                </>}
                                {!this.props.user && <>
                                    <a className="sub-list" style={{ textDecoration: "none", color: "#7ECB20" }}>SIGN UP</a>
                                    <a className="sub-list" style={{ textDecoration: "none", color: "#7ECB20" }}>
                                        <div className="login-btn" onClick={this.props.renderLogin} style={{ borderStyle: "solid", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", background: "#7ECB20", color: "white" }}>
                                            LOGIN
                                    </div>
                                    </a>
                                </>}
                                {(this.state.step === 1) ?
                                    <>
                                        <div className="side-div">
                                            <div style={{ display: "flex", paddingTop: "10vw", paddingLeft: "2vw", paddingRight: "2vw", marginRight: "5rem" }}>
                                                <h3 style={{ marginRight: "18vw" }}>LOGIN</h3>
                                                <div onClick={this.props.handleStep}>
                                                    <CloseIcon />
                                                </div>
                                            </div>
                                            <div className="container" style={{ padding: "3rem", margin: "15px", marginTop: "30px", borderStyle: "solid", borderColor: "#707070", borderRadius: "1px" }}>
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                        <input value={this.state.login.email} name="email" onChange={this.handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                                        <input value={this.state.login.password} name="password" onChange={this.handleChange} type="password" class="form-control" id="exampleInputPassword1" />
                                                    </div>
                                                    <div className="forgot-password" onClick={this.props.renderLogin}>
                                                        <p style={{ color: "#7ECB20" }}>Forgot Password</p>
                                                    </div>

                                                    <button onClick={this.userLogin} class="submit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </> :
                                    this.state.step === 2 ?
                                        <>
                                            <div className="side-div">
                                                <div style={{ display: "flex", paddingTop: "10vw", paddingLeft: "2vw", paddingRight: "2vw", marginRight: "5rem" }}>
                                                    <h3 style={{ marginRight: "18vw" }}>FORGOT PASSWORD</h3>
                                                    <div onClick={this.props.handleStep}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                                <div className="container" style={{ padding: "3rem", margin: "15px", marginTop: "30px", borderStyle: "solid", borderColor: "#707070", borderRadius: "1px" }}>
                                                    <form>
                                                        <div class="mb-3">
                                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                            <input value={this.state.login.email} name="email" onChange={this.handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                        <button type="submit" class="submit">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </> :
                                        <></>}
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >
        );
    }
}

export default Navbar;