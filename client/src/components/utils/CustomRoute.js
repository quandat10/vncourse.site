import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "../user/header/Header";
import "./style2.css";
import AdSense from "react-adsense";
import SearchCourse from '../user/search_course/SearchCourse'

const CustomRoute = ({ component: Component, ...rest }) => {
  
  return (
    <div>
      {/* <AdSense.Google
        client="ca-pub-1142961620231228"
        slot="4048802240"
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      /> */}
      <Header />
      
      <Route
        {...rest}
        component={(props) => {
          return <Component {...props}  />;
        }}
      />
    </div>
  );
};

export default CustomRoute;
