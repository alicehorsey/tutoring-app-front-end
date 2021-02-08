import React from 'react';
import Title from "./Title";
import NavBar from "./NavBar"

const Home = (props) => {


    return (
        <div>
            <Title />
            <h1>Please Log In to access your Tutor Portal</h1>
            <NavBar />
        </div>
    );
};

export default Home;