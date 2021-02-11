import { NavLink } from "react-router-dom";
import React from "react";

const AppNav = () => (
    <div className="navbar-nav mr-auto">
        <NavLink
            to="/home"
            exact
            className="nav-link"
            activeClassName="router-link-exact-active"
        >
            Home
    </NavLink>
        <NavLink
            to="/pupils"
            exact
            className="nav-link"
            activeClassName="router-link-exact-active"
        >
            Pupils
    </NavLink>
        <NavLink
            to="/reading"
            exact
            className="nav-link"
            activeClassName="router-link-exact-active"
        >
            Reading
    </NavLink>
        <NavLink
            to="/work"
            exact
            className="nav-link"
            activeClassName="router-link-exact-active"
        >
            Work
    </NavLink>
        <NavLink
            to="/topics"
            exact
            className="nav-link"
            activeClassName="router-link-exact-active"
        >
            Topics
    </NavLink>
    </div>
);

export default AppNav;
