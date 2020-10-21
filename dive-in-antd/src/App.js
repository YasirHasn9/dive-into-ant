import React from "react"
import AppHeader from "./components/common/Header"
import AppHome from "./view/Home"
import {Layout , Menu} from "antd";
const {Header , Content} = Layout
const App = () => {
    return (
       
            <Layout className="mainLayout">
                <Header>
                    <AppHeader />
                </Header>
                    <Content>
                       <AppHome />
                    </Content>
                
            </Layout>
    )
}

export default App;