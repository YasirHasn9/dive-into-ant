import React from "react"
import AppHeader from "./components/common/Header"
import {Layout , Menu} from "antd";
const {Header } = Layout
const App = () => {
    return (
       
            <Layout className="mainLayout">
                <Header>
                    <AppHeader />
                </Header>
            </Layout>
    )
}

export default App;