import React from "react";
import ColorfulButton from "./UI/colorfulButton";
import ShareLink from "./UI/shareLink";
import { BsTwitter } from 'react-icons/bs';

const QuoteBox = ({color}) => {

    return (
        <div className="quote-box">
            <div className="quote-up">
                <span className="quote-text"></span>
                <span className="quote-author"></span>
            </div>
            <div className="quote-bottom">
                <ShareLink color={color} link={"https://twitter.com/intent/tweet"}><BsTwitter /></ShareLink>
                <ColorfulButton color={color} >New quote</ColorfulButton>
            </div>
        </div>
    )
}

export default QuoteBox;