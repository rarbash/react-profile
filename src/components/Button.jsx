import React from "react"
import emailIcon from "../images/email.png"
import linkedinIcon from "../images/linkedin.png"

export default function Button(){
    return(
        <div className="button">
            <button className="button--email">
                <img src={emailIcon} className="button--email-icon"/>
                Email
            </button>
            <button className="button--linkedin">
                <img src={linkedinIcon} className="button--linkedin-icon"/>
                LinkedIn
            </button>
        </div>
    )
}