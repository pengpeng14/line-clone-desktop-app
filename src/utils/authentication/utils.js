import { Auth } from "aws-amplify";

export async function checkCurrentUser() {
  const user = await Auth.currentAuthenticatedUser()
    .then((data) => data)
    .catch(() => null);
  return user;
}

export async function register(form, setForm, setErrMes) {
  const { username, email, password } = form;
  await Auth.signUp({ username, password, attributes: { email } })
    .then(() => setForm({ ...form, type: "Register" }))
    .catch((err) => setErrMes(err.message));
}

export async function confirmRegister(
  form,
  setForm,
  setErrMes,
  setShow,
  history
) {
  const { username, authCode } = form;
  await Auth.confirmSignUp(username, authCode)
    .then(() => {
      setForm({ ...form, type: "Signed-in" });
      setShow(false);
      history.push("/dashboard");
    })
    .catch((err) => setErrMes(err.message));
}

export async function signin(form, setForm, setErrMes, history) {
  const { email, password } = form;
  await Auth.signIn(email, password)
    .then(() => {
      setForm({ ...form, type: "Signed-in" });
      history.push("/dashboard");
    })
    .catch(() => setErrMes("Incorrect email or password"));
}

export async function signout(setForm) {
  setForm({
    username: "",
    email: "",
    password: "",
    authCode: "",
    type: "Sign-in",
  });
  await Auth.signOut();
}

export function checkRegisterInput(form, confirmPassword) {
  if (!form.username.length || !form.password.length || !form.email.length) {
    return "Please filled up all field.";
  }
  if (form.password !== confirmPassword) {
    return "Password does not match.";
  }
  return null;
}

export function handleOnKeyUpEvent(e) {
  if (e.keyCode === 13) {
    return true;
  }
  return false;
}
