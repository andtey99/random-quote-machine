import React from "react";
import '../../styles/shareLink.css'

const ShareLink = ({color, link, children}) => {
    return (
        <a href={link} style={{backgroundColor: color}}>{children}</a>
    )
}

export default ShareLink;