import React, { Component } from 'react';
import Navbar from '../components/navbar';
import './home.css';
import SignUp from '../components/signUp';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
class Home extends Component {
    state = {
        step: 0,
        user: "",
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

    renderLogout = async () => {
        localStorage.removeItem('token');
        window.location = "/";
    }

    renderLogin = async () => {
        let step = this.state.step;
        step = step + 1;
        await this.setState({ step });
    }

    handleStep = async () => {
        let step = this.state.step;
        step = 0;
        await this.setState({ step });
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ opacity: (this.state.step !== 0) ? "0.6" : "1", background: this.state.step === 1 ? "#212020" : "white" }}>
                    <Navbar renderLogout={this.renderLogout} user={this.state.user} userLogin={this.userLogin} step={this.state.step} renderLogin={this.renderLogin} handleStep={this.handleStep} />
                    <div className="container" style={{
                        padding: "10%", textAlign: "center"
                    }}>
                        <h1>
                            Apply and hear back every time
                    </h1>
                        <h3>
                            Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.
                </h3>
                        {/* <button>Get Started</button> - Dialog Box */}
                        <SignUp />
                    </div>
                </div >
            </React.Fragment >
        );
    }
}

export default Home;