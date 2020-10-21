/*
i wanna organized my code. all the app components which belong to home page
will be here.
like hero , about , features 
*/

import React from "react"
import AppHero from "../components/home/hero"
import AppAbout from "../components/home/about"

const AppHome = () => {
    return (
        <div className="main">
             <AppHero />
             <AppAbout />
        </div>
    )
}

export default AppHome