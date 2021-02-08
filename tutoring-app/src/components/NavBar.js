import React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import AppNav from "./AppNav";
import AuthNav from "./AuthNav";

const NavBar = () => {
    return (
        <div>
            <AppNav />
            <AuthNav />
        </div>
    );
};

export default NavBar;