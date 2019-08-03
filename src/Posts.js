import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default ({ posts }) => (
  <Fragment>
    <h1>Blog</h1>

    <ol>
      {Object.entries(posts).map(([slug, post]) => (
        <li key={slug}>
          <h2>
            <NavLink to={slug}>{post.title}</NavLink>
          </h2>
          <p>{post.summary}</p>
          <em>{post.date}</em>
        </li>
      ))}
    </ol>
  </Fragment>
);