import React, {useState} from "react";
import ColorfulButton from "./UI/colorfulButton";
import ShareLink from "./UI/shareLink";
import { BsTwitter } from 'react-icons/bs';
import randomColor from "./randomColor";
import "../styles/quoteBox.css"
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaQuoteLeft } from 'react-icons/fa';

const QuoteBox = ({quotes, color, newColor }) => {

    const [randomQuote, setRandomQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

    function handleNewRandom() {
        newColor(randomColor());
        setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }

    return (
        <div className="quote-box">
            <div className="quote-up">
                <div className="quote-text" style={{color: color}}><FaQuoteLeft /> {randomQuote.text}</div>
                <div className="quote-author" style={{color: color}}>- {randomQuote.author}</div>
            </div>
            <div className="quote-bottom">
                <div>
                    <ShareLink color={color} link={"https://twitter.com/intent/tweet"}><BsTwitter /></ShareLink>
                    <ShareLink color={color} link={"https://vk.com/share.php?url"}><SlSocialVkontakte /></ShareLink>
                </div>
                <ColorfulButton color={color} handleNewRandom={handleNewRandom}>New quote</ColorfulButton>
            </div>
        </div>
    )
}

export default QuoteBox;