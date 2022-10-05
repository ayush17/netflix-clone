import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as routes from "./constants/routes";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={routes.Home} element={<Home />}></Route>
        <Route exact path={routes.SIGN_IN} element={<Signin />}></Route>
        <Route exact path={routes.SIGN_UP} element={<Signup />}></Route>
        <Route exact path={routes.Browse} element={<Browse />}></Route>
      </Routes>
    </Router>
  );
}
