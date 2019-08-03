import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <Fragment>
    The page you are looking for was moved, removed,
    renamed or might never existed. <br />
    <NavLink to="/">Back to blog</NavLink>
  </Fragment>
);