/*
i wanna organized my code. all the app components which belong to home page
will be here.
like hero , about , features 
*/

import React from "react"
import AppHero from "../components/home/hero"
import AppAbout from "../components/home/about"
import AppFeatures from "../components/home/features"

const AppHome = () => {
    return (
        <div className="main">
             <AppHero />
             <AppAbout />
             <AppFeatures />
        </div>
    )
}

export default AppHome