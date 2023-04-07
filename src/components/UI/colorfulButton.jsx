import React from "react";
import "../../styles/colorfulButton.css"

const ColorfulButton = ({color, children}) => {

    return (
        <button style={{backgroundColor: color}}>{children}</button>
    )
}

export default ColorfulButton;