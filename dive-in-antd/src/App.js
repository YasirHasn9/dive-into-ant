import React from "react"
import AppHeader from "./components/common/Header"
import AppFooter from "./components/common/footer"
import AppHome from "./view/Home"
import {Layout } from "antd";
const {Header , Content, Footer} = Layout
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

                    <Footer>
                        <AppFooter />
                    </Footer>
            </Layout>
    )
}

export default App;