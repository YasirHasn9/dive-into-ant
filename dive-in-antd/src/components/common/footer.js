import React from "react";
import { BackTop } from 'antd';



const AppFooter = () => {
    return (
        <div className="container-fluid">
            <div className="footer">
            <div className="logo">
                <i className="fas fa-code-branch"></i>
                </div>
                <ul className="socials">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram-square"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li> 
            </ul>
            <BackTop>
                <div className="goTop">
                    <i className="fas fa-arrow-circle-up"></i>
                </div>
            </BackTop>
            </div>
          
        </div>
    )
}

export default AppFooter