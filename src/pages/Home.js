import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuItems from '../components/MenuItems';

const Home = () => {
    console.log("hi")
    return (
        <div className="wrap">
            <Header />
            <div className="container mt-4">
                <div id="title">
                    <img src={require("../images/left-pepper.PNG")} alt=""/>
                    <span className="notre-menu">Notre Menu</span>
                    <img src={require("../images/right-pepper.PNG")} alt=""/>
                    <hr className="horizontal-line"/>
                </div>
                <MenuItems />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
