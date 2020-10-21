import React from "react";
import { Anchor} from "antd"
const { Link } = Anchor;



const AppHeader = () => {
    return (
        <div className="container-fluid">
            <div className="header">
                    <div className="logo"><i className="fas fa-code-branch"></i></div>
                    {/* the defaultSelectedKeys is selecting which one of the items should the selected default
                    we want the home item be selected  */}
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features" />
                        <Link href="#works" title="How it works" />
                        <Link href="#faq" title="faq" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
            </div>
        </div>
         
       
    )
}

export default AppHeader

