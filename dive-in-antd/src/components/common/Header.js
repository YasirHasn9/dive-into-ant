import React from "react";
import {Menu } from "antd"


const AppHeader = () => {
    return (
        <div className="container-fluid">
            <div className="header">
                    <div className="logo"><i class="fas fa-code-branch"></i></div>
                    {/* the defaultSelectedKeys is selecting which one of the items should the selected default
                    we want the home item be selected  */}
                    <Menu className="ant-menu"  mode="horizontal" defaultSelectedKeys={['Home']} >
                        <Menu.Item key="Home">Home</Menu.Item>
                        <Menu.Item key="features">Features</Menu.Item>
                        <Menu.Item key="how it works">How it works</Menu.Item>
                        <Menu.Item key="FAQ">FAQ</Menu.Item>
                        <Menu.Item key="Pricing">Pricing</Menu.Item>
                        <Menu.Item key="Contact">Contact</Menu.Item>
                    </Menu>
            </div>
           
        </div>
         
       
    )
}

export default AppHeader

