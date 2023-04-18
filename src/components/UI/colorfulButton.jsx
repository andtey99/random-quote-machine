import React from "react";
import "../../styles/colorfulButton.css"

const ColorfulButton = ({color, children, handleNewRandom}) => {

    return (
        <button style={{backgroundColor: color}} onClick={handleNewRandom}>{children}</button>
    )
}

export default ColorfulButton;