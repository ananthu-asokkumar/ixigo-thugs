import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./LoginModal.css";
import { login } from "../../Redux/Auth/action";
import { useDispatch, useSelector } from "react-redux";
//google OAuth Imports
import GoogleLogin from "react-google-login";
import { AuthContext } from "../../Contexts/contextApi/AuthContext";
import { useHistory } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal({ img })  {
    //OAuth start
    const { setGmail, setName, setUrl, name, url, setUserIn, userin } =
        useContext(AuthContext);
    let history = useHistory();

    //end

    const auth = useSelector((state) => state.authReducer);
    // console.log(auth.isAuth);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [state, setState] = useState({ email: "", password: "" });

    const [drop, setDrop] = useState(false);
    const handledropDown = () => {
        setDrop(!drop);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    console.log(drop);

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (e) => {
        dispatch(login(state));
        setOpen(false);
        // console.log(state);
    };

    //logout (removing login from local storage)

    const clearLogout = () => {
        setName("");
        setUrl("");
        setDrop(false);
        setUserIn(false);
        localStorage.removeItem("userLogin");
    };

    const responseGoogle = (res) => {
        // console.log(res);
        setName(res.profileObj.name);
        setGmail(res.profileObj.email);
        setUrl(res.profileObj.imageUrl);
        setUserIn(true);
        setOpen(false);
        localStorage.setItem(
            "userLogin",
            JSON.stringify({
                nameLocal: res.profileObj.name,
                userinLocal: true,
                urlLocal: res.profileObj.imageUrl,
            })
        );
    };

    let userLogin = localStorage.getItem("userLogin");
    if (userLogin !== null) {
        var { userinLocal, urlLocal, nameLocal } = JSON.parse(userLogin);
    }

    return auth.isAuth || userin || userinLocal ? (
        <div>
            <button className="login_button">
                <img
                    src={url || urlLocal}
                    width="40px"
                    className="login__radius"
                    onClick={handledropDown}
                    alt=""
                />
                &nbsp;{name || nameLocal}
            </button>
            {drop && (
                <div className="drop__menus">
                    <Link>
                        <button>Account</button>
                    </Link>
                    <Link to="trips">
                        <button>My Trips</button>
                    </Link>
                    <Link>
                        <button>Customer Service</button>
                    </Link>
                    <Link>
                        <button>Ixigo Money</button>
                    </Link>
                    <Link>
                        <button>Alerts</button>
                    </Link>
                    <Link>
                        <button>Travellers</button>
                    </Link>
                    <Link>
                        <button onClick={clearLogout}>Logout</button>
                    </Link>
                </div>
            )}

        </div>
    ) : (
        <div>
            <button type="button" onClick={handleOpen}>
                {img}
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className="modal__cont">
                            <div className="modal__left">
                                <img
                                    src="https://images.ixigo.com/rt/pc/img/login/bus_banner.png"
                                    alt=""
                                />
                            </div>
                            <div className="modal__right">
                                <div className="modal__signup">
                                    <p>Don't have an account SIGN UP</p>
                                </div>
                                <div className="modal__login">
                                    <p>Log in to ixigo</p>
                                </div>

                                <div className="modal__input">
                                    <label>Email </label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="Enter Email"
                                        value={state.email}
                                        onChange={(e) =>
                                            setState((st) => ({ ...st, email: e.target.value }))
                                        }
                                    />
                                </div>
                                <div className="modal__input">
                                    <label>Password </label>
                                    <br />
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        value={state.password}
                                        onChange={(e) =>
                                            setState((st) => ({ ...st, password: e.target.value }))
                                        }
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="modal__loginbtn"
                                    >
                                        LOGIN
                                    </button>
                                </div>

                                <div className="modal__or">
                                    <p>OR</p>
                                </div>
                                <div className="modal__btns">
                                    <button>
                                        <FacebookIcon />
                                    </button>
                                    <button>
                                        <GoogleLogin
                                            className="google__cont"
                                            clientId="459195761612-ggleb5pijshcq81q1p5svdit5ikieqc3.apps.googleusercontent.com"
                                            buttonText="Login"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={"single_host_origin"}
                                        >
                                            Google login
                                        </GoogleLogin>
                                        Google
                                    </button>
                                </div>
                                <div className="modal__policy">
                                    <p>
                                        By logging in, I understand & agree to ixigo terms of use
                                        and <br />
                                        privacy policy
                                    </p>
                                </div>
                                <div>
                                    <p className="modal__policy">
                                        This site is protected by reCAPTCHA and the Google Privacy
                                        <br /> Policy and Terms of Service apply.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>  
        </div>
    );
}
