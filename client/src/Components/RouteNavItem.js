import React from "react";
import { Route, Link } from "react-router-dom";

export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
      <Link
        onClick={(e) => {
          e.preventDefault();
          history.push(props.href);
        }}
        {...props}
        active={match ? true : false}
      >
        {props.children}
      </Link>}
  />;