import React, { Component } from 'react';
import Navbar from '../components/navbar';
import './home.css';
import SignUp from '../components/signUp';
class Home extends Component {
    state = {
        open: false,
        value: 0,
        user: "",
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleValue = async () => {
        let value = this.state.value;
        value = value + 1;
        await this.setState({ value });
    }

    handleValueDec = async () => {
        let value = this.state.value;
        value = value - 1;
        await this.setState({ value });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Navbar handleClickOpen={this.handleClickOpen} userLogout={this.userLogout} />
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
                        <SignUp handleClose={this.handleClose} handleClickOpen={this.handleClickOpen} open={this.state.open} value={this.state.value} setValue={this.handleValue} setValueDec={this.handleValueDec} />
                    </div>
                </div >
            </React.Fragment >
        );
    }
}

export default Home;