import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import CircularLoader from './circularLoader';
import './sideDrawer.css';

const useStyles = makeStyles({
    list: {
        width: 400,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer(props) {
    const { handleChange, userLogin, userLogout, handleClickOpen, resetPassword } = props;

    const [forgotPage, setForgotPage] = React.useState(false);

    const handleForgotPage = async () => {
        await setForgotPage(true);
    }

    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const [bool, setBool] = React.useState(false);
    React.useEffect(() => {
        setBool(props.bool);
    }, [props.bool]);

    const [user_Id, setUserId] = React.useState("");
    React.useEffect(() => {
        setUserId(props.user_Id);
    }, [props.user_Id]);

    const [passwordState, setPassword] = React.useState({});
    React.useEffect(() => {
        setPassword(props.passwordState);
    }, [props.passwordState]);

    const [login, setLogin] = React.useState({});
    React.useEffect(() => {
        setLogin(props.loginState);
    }, [props.loginState]);

    const [user, setUser] = React.useState("");
    React.useEffect(() => {
        setUser(props.username);
    }, [props.username]);

    const toggleDrawer = (anchor, open) => (event) => {
        console.log("Called toggle drawer");
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* login form */}
            <div className="login">
                <Typography className="login-txt">
                    <b>Login</b>
                </Typography>
                <div onClick={toggleDrawer(anchor, false)}>
                    <CloseIcon />
                </div>
            </div>
            <div className="login-box">
                <div style={{ textAlign: "center", fontSize: "20px", color: "#7ECB20", opacity: "1" }}>
                    <b>Student</b>
                </div>
                <hr className="login-line" />

                {(!forgotPage && user_Id === "") &&
                    <form>
                        <input className="login-field" placeholder="Email" name="email" type="email" value={login.email} onChange={handleChange} />
                        <input className="login-field" placeholder="Password" name="password" type="password" value={login.password} onChange={handleChange} />
                    </form>}

                {(forgotPage && user_Id === "") &&
                    <form>
                        <input className="login-field" placeholder="Email" name="email" type="email" value={login.email} onChange={handleChange} />
                    </form>}

                {user_Id !== "" &&
                    <form>
                        <h4>Please check your email for link to reset your password</h4>
                    </form>}

                {(!forgotPage && user_Id === "") &&
                    <div onClick={handleForgotPage} className="forgot-btn">
                        <b>
                            Forgot Password ?
                        </b>
                    </div>}

                {(forgotPage === false && user_Id === "") &&
                    <div onClick={userLogin} className="submit-btn">
                        <Button type="submit" style={{ color: "white" }}>
                            {bool ? <CircularLoader /> : "Login"}
                        </Button>
                    </div>}

                {(forgotPage === true && user_Id === "") &&
                    <div onClick={resetPassword} className="submit-btn">
                        <Button type="submit" style={{ color: "white" }}>
                            {bool ? <CircularLoader /> : "Submit"}
                        </Button>
                    </div>}

                {/* {user_Id !== "" &&
                    <div className="submit-btn" onClick={setNewPassword}>
                        <Button type="submit" style={{ color: "white" }}>
                            RESET
                    </Button>
                    </div>
                } */}

                <div onClick={() => {
                    handleClickOpen();
                    toggleDrawer(anchor, false);
                }} className="sign-up-txt">
                    <b>New to MyWays? Sign Up Here</b>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {!user && <Button onClick={toggleDrawer(anchor, true)} className="login-btn">LOGIN</Button>}
                    {user && <Button onClick={userLogout} className="login-btn">LOGOUT</Button>}
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
