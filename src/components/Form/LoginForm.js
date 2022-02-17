import React, { useState } from "react";
import {
  Divider,
  InputBase,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { VisibilityOutlined } from "@material-ui/icons";
import { signin } from "./../../utils/authentication/utils";
import useStyles from "./../../styles/authentication-form";
import LineButton from "./../../styles/line-button";
import { useHistory } from "react-router-dom";

function LoginForm(props) {
  const classes = useStyles();
  const { onChange, form, setForm } = props;
  const history = useHistory();
  const [errMes, setErrMes] = useState(null);
  const [show, setShow] = useState(false);

  function handleLogin(e) {
    if (e.keyCode === 13) {
      signin(form, setForm, setErrMes, history);
    }
  }

  return (
    <Grid item md={8} className={classes.root}>
      <Typography className={classes.logoText}>LINE</Typography>
      <form className={classes.form}>
        <div className={classes.boderText}>
          <InputBase
            className={classes.textField}
            name="email"
            fullWidth
            placeholder="Email address"
            onChange={(e) => {
              setErrMes("");
              onChange(e);
            }}
            onKeyUp={(e) =>
              form.email === "" || form.password === "" ? null : handleLogin(e)
            }
          />
          <Divider />
          <InputBase
            className={classes.textField}
            name="password"
            fullWidth
            placeholder="Password"
            type={show ? "text" : "password"}
            onChange={(e) => {
              setErrMes("");
              onChange(e);
            }}
            onKeyUp={(e) =>
              form.email === "" || form.password === "" ? null : handleLogin(e)
            }
            endAdornment={
              <InputAdornment position="end" variant="filled">
                <IconButton
                  disableRipple={true}
                  className={classes.eyeIcon}
                  onClick={() => {
                    !show ? setShow(true) : setShow(false);
                  }}
                >
                  {form.password !== "" ? <VisibilityOutlined /> : null}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>

        <LineButton
          fullWidth
          disabled={form.email === "" || form.password === "" ? true : false}
          onClick={() => signin(form, setForm, setErrMes, history)}
        >
          Log in
        </LineButton>
        <div style={{ height: "40px" }}>
          {errMes && <p className={classes.errorMessage}>{errMes}</p>}
        </div>
        <Button
          className={classes.regOrLogin}
          onClick={() => setForm({ ...form, type: "Register" })}
        >
          Register with email {">"}
        </Button>
      </form>
    </Grid>
  );
}

export default LoginForm;
