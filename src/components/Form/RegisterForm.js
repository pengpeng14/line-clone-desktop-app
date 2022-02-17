import React, { useState } from "react";
import {
  InputBase,
  Grid,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import {
  checkRegisterInput,
  register,
  handleOnKeyUpEvent,
} from "./../../utils/authentication/utils";
import LineButton from "./../../styles/line-button";
import useStyles from "./../../styles/authentication-form";

function RegisterForm(props) {
  const classes = useStyles();
  const { onChange, form, setForm, setShow } = props;
  const [errMes, setErrMes] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister() {
    const err = checkRegisterInput(form, confirmPassword);
    if (err) {
      setErrMes(err);
      return;
    }
    register(form, setForm, setErrMes);
    setShow(true);
  }
  return (
    <Grid item md={8} className={classes.root}>
      <Typography className={classes.logoText}>LINE</Typography>
      <form className={classes.form}>
        <div className={classes.boderText}>
          <InputBase
            className={classes.textField}
            fullWidth
            placeholder="Username"
            name="username"
            onChange={(e) => {
              setErrMes(null);
              onChange(e);
            }}
            onKeyUp={(e) =>
              form.email === "" ||
              form.password === "" ||
              form.username === "" ||
              confirmPassword === ""
                ? null
                : handleOnKeyUpEvent(e)
                ? handleRegister()
                : null
            }
          />
          <Divider />
          <InputBase
            className={classes.textField}
            fullWidth
            name="email"
            placeholder="Email address"
            onChange={(e) => {
              setErrMes(null);
              onChange(e);
            }}
            onKeyUp={(e) =>
              form.email === "" ||
              form.password === "" ||
              form.username === "" ||
              confirmPassword === ""
                ? null
                : handleOnKeyUpEvent(e)
                ? handleRegister()
                : null
            }
          />
          <Divider />
          <InputBase
            className={classes.textField}
            fullWidth
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => {
              setErrMes(null);
              onChange(e);
            }}
            onKeyUp={(e) =>
              form.email === "" ||
              form.password === "" ||
              form.username === "" ||
              confirmPassword === ""
                ? null
                : handleOnKeyUpEvent(e)
                ? handleRegister()
                : null
            }
          />
          <Divider />
          <InputBase
            className={classes.textField}
            fullWidth
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setErrMes(null);
              setConfirmPassword(e.target.value);
            }}
            onKeyUp={(e) =>
              form.email === "" ||
              form.password === "" ||
              form.username === "" ||
              confirmPassword === ""
                ? null
                : handleOnKeyUpEvent(e)
                ? handleRegister()
                : null
            }
          />
        </div>
        <LineButton
          onClick={() => handleRegister()}
          fullWidth
          disabled={
            form.email === "" ||
            form.password === "" ||
            form.username === "" ||
            confirmPassword === ""
              ? true
              : false
          }
        >
          Register
        </LineButton>
        <div style={{ height: "40px" }}>
          {errMes && <p className={classes.errorMessage}>{errMes}</p>}
        </div>
        <Button
          className={classes.regOrLogin}
          onClick={() => setForm({ ...form, type: "Sign-in" })}
        >
          Log in with my email {">"}
        </Button>
      </form>
    </Grid>
  );
}

export default RegisterForm;
