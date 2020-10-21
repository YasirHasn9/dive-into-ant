import React from "react"
import AppHeader from "./components/common/Header"
import AppHome from "./view/Home"
import {Layout } from "antd";
const {Header , Content} = Layout
const App = () => {
    return (
       
            <Layout className="mainLayout">
                {/* this is the header of the whole page  */}
                <Header>
                    <AppHeader />
                </Header>

                {/* this is whatever content you see in the home page */}
                    <Content>
                       <AppHome />
                    </Content>
                
            </Layout>
    )
}

export default App;