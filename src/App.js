import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Authentication from "./components/Authentication";
import { Auth } from "aws-amplify";
import Dashboard from "./components/dashboard/page/Dashboard";
const electron = window.require("electron");
function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await Auth.currentAuthenticatedUser();
      setAuth(auth);
      console.log(auth);
    };

    checkAuth();
    return () => {};
  }, []);

  return (
    <Router>
      {/* <Route path="/" component={auth ? Dashboard : Authentication} /> */}
      {/* {auth ? (
        <Route path="/dashboard" component={Dashboard} />
      ) : (
        <Route path="/" component={Authentication} />
      )} */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={Authentication} />

      {console.log(auth)}
    </Router>
  );
}

export default App;
