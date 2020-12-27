import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { TextField, Grid } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import CloseIcon from '@material-ui/icons/Close';
import './signUp.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import axios from 'axios';
import config from '../config.json'

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    btn: {
        backgroundColor: "#7ECB20",
    }
});

function SimpleDialog(props) {
    const [signUp, setSignUp] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        OTP: "",
    });

    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const [valueOTP, setOTP] = React.useState("");

    const handleClose = () => {
        onClose();
    };

    const changeValue = async () => {
        // calling axios
        console.log("Called change value");
        // if step === 0 then do the OTP thing
        if (value === 0) {
            // create OTP
            const createOTP = Math.random().toString(36).substr(2, 5);
            console.log("Immediately created OTP", createOTP);
            await setOTP(createOTP);
            console.log("Again", createOTP);
            console.log("OTP in state", valueOTP);
            try {
                await axios.post("https://mywaybackend.herokuapp.com/api/user/sendOTP", {
                    email: signUp.email,
                    OTP: createOTP,
                });
            } catch (err) {
                console.log(err);
            }
        }
        if (value === 1) {
            try {
                // match the OTP
                console.log("Saved OTP", valueOTP);
                if (signUp.OTP === valueOTP) {
                    const { data } = await axios.post("https://mywaybackend.herokuapp.com/api/user/signUp", {
                        firstName: signUp.firstName,
                        lastName: signUp.lastName,
                        email: signUp.email,
                        password: signUp.password,
                    });
                    console.log(data);
                }
                else {
                    console.log("Wrong OTP entered");
                    alert("Wrong OTP entered");
                }
            } catch (err) {
                console.log(err);
                alert(err);
            }
        }
        setValue(value + 1);
    }

    const changeValueDec = () => {
        setValue(value - 1);
    }

    const handleChange = (e) => {
        const form = { ...signUp };
        form[e.currentTarget.name] = e.currentTarget.value;
        setSignUp(form);
    }

    const [value, setValue] = React.useState(0);

    return (
        <div style={{ width: "-webkit-fill-available", height: "auto", textAlign: "center" }} >
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} >
                {value === 0 ?
                    <>
                        <div onClick={handleClose} style={{ padding: "16px", display: "flex", justifyContent: "flex-end" }}>
                            <CloseIcon className="icon" />
                        </div>
                        <DialogTitle id="simple-dialog-title" style={{ textAlign: "center" }}>
                            <h1>
                                Sign Up
                            </h1>
                        </DialogTitle>
                        <div style={{ padding: "16px" }}>
                            <Typography style={{ textAlign: "center", paddingBottom: "2%" }}>
                                <h4>It's quick and easy</h4>
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <TextField value={signUp.firstName} name="firstName" onChange={handleChange} label="First Name" variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField value={signUp.lastName} name="lastName" onChange={handleChange} label="Last Name" variant="outlined" />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField value={signUp.email} name="email" onChange={handleChange} label="Email Address" variant="outlined"></TextField>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField value={signUp.password} name="password" onChange={handleChange} label="Password" variant="outlined"></TextField>
                                </Grid>
                            </Grid>
                            <div style={{ marginTop: "2rem", justifyContent: "center", textAlign: "center" }}>
                                <Button className={classes.btn} onClick={changeValue} color="inherit">
                                    <Typography>
                                        Sign Up
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                    </> :
                    value === 1 ?
                        <>
                            <div style={{ padding: "16px" }}>
                                <div onClick={changeValueDec} style={{ display: "flex", justifyContent: "flex-start" }}>
                                    <KeyboardBackspaceIcon className="icon" />
                                </div>
                                <DialogTitle>OTP Sent</DialogTitle>
                                <TextField value={signUp.OTP} name="OTP" onChange={handleChange} label="Enter your OTP" variant="outlined"></TextField>
                                <h6 style={{ marginTop: "4px" }}>One Time Passcode sent to your mail</h6>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Button onClick={changeValue}>Enter</Button>
                                </div>
                            </div>
                        </> :
                        value === 2 ?
                            <>
                                <DialogTitle>Thank you</DialogTitle>
                            </> :
                            <>
                            </>
                }
            </Dialog>
        </div >
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Get Started
      </Button>
            <SimpleDialog open={open} onClose={handleClose} />
        </div>
    );
}
