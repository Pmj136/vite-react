import React from 'react';
import logo from "@/assets/logo.svg";
import "./index.css"

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>React is yyds</p>
            </header>
        </div>
    );
};

export default Home;