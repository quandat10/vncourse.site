import React from "react";
import { Route } from "react-router-dom";
import Header from "../admin/header/Header";

const CustomRouteAdmin = ({ component: Component, ...rest }) => (
  <div id="wrapper">
    <Header />
    <Route
      {...rest}
      component={(props) => {
        return <Component {...props} />;
      }}
    />
  </div>
);

export default CustomRouteAdmin;
