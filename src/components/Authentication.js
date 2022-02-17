import React, { useEffect, useState } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import { checkCurrentUser } from "./../utils/authentication/utils";
import LoginForm from "./Form/LoginForm";
import RegisterForm from "./Form/RegisterForm";
import ConfirmRegisterDialogue from "./Dialogue/ConfirmRegisterDialogue";
import { HashRouter as Router, useHistory } from "react-router-dom";
import mockQRCode from "./../assets/imgs/mockQRCode.png";
import useStyles from "./../styles/authentication-form";
import { Hub } from "aws-amplify";

function Authentication() {
  const classes = useStyles();
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    authCode: "",
    type: "Sign-in",
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    checkAuthenticatedUser();
    setAuthListener();
    console.log("Authentication");
  }, []);

  const setAuthListener = () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signOut":
          setForm(() => ({ ...form, type: "Sign-in" }));
          break;
        default:
          break;
      }
    });
  };

  async function checkAuthenticatedUser() {
    const user = await checkCurrentUser();
    if (user) {
      setForm({ ...form, type: "Signed-in" });
      history.push("/dashboard");
    }
  }

  function onChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function page() {
    if (form.type === "Sign-in") {
      return <LoginForm onChange={onChange} form={form} setForm={setForm} />;
    } else if (form.type === "Register") {
      return (
        <>
          <RegisterForm
            onChange={onChange}
            form={form}
            setForm={setForm}
            setShow={setShow}
          />
          <ConfirmRegisterDialogue
            onChange={onChange}
            form={form}
            setForm={setForm}
            show={show}
            setShow={setShow}
          />
        </>
      );
    }
  }

  return (
    <>
      {form.type !== "Signed-in" && (
        <Grid className={classes.container}>
          {page()}
          <Divider orientation="vertical" flexItem />
          <Grid className={classes.gridItem} item md={4}>
            <img src={mockQRCode} width="250" height="250" />
            <Typography className={classes.textHead}>QR code login</Typography>
            <Typography className={classes.textDescript}>
              To scan your QR code, open LINE on your mobile device
              <br /> and tap the QR code icon in the search box.
            </Typography>
          </Grid>{" "}
        </Grid>
      )}
    </>
  );
}

export default Authentication;
