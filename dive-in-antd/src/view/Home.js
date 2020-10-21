/*
i wanna organized my code. all the app components which belong to home page
will be here.
like hero , about , features 
*/

import React from "react"
import AppHero from "../components/home/hero"
import AppAbout from "../components/home/about"
import AppFeatures from "../components/home/features"
import AppWorks from "../components/home/works"
import AppFaq from "../components/home/faq"
import AppPricing from "../components/home/pricing"
import AppContact from "../components/home/contact"

const AppHome = () => {
    return (
        <div className="main">
             <AppHero />
             <AppAbout />
             <AppFeatures />
             <AppWorks />
             <AppFaq />
             <AppPricing />
             <AppContact />
        </div>
    )
}

export default AppHome