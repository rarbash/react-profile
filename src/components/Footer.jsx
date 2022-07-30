import React from "react"
import facebookIcon from "../images/facebook.png"
import githubIcon from "../images/github.png"
import twitterIcon from "../images/twitter.png"
import instagramIcon from "../images/instagram.png"

export default function Footer(){
    return(
        <footer>
            <img className="footer--icon footer--icon-facebook" src={facebookIcon}/>
            <img className="footer--icon" src={githubIcon}/>
            <img className="footer--icon" src={twitterIcon}/>
            <img className="footer--icon" src={instagramIcon}/>
        </footer>
    )
}