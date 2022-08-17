import React, { useState } from "react";
import NavDesktop from "./Navs/Desktop";
import NavAndroid from "./Navs/Android";

const Navigation = ()=>{
    const [toogle, setToogle] = useState(false);
    const [activeLink, setActiveLink] = useState(-1);
    return (
        <>
            <NavDesktop activeLink={activeLink} setActiveLink={setActiveLink} />
            {/* android views */}
            <NavAndroid
                activeLink={activeLink} setActiveLink={setActiveLink}
                toogle={toogle} setToogle={setToogle} />
        </>
    )
}

export default Navigation;