import React from 'react';
import icon from "../../../assets/profpic.jpg";
import "./HeaderBody.css";

function HeaderBody(props)
{
    let nameStyle =
    {
        color: "#ffc125",
        textAlign: "center",
        margin: 0,
    }

    return (
        <div className={"header-body-container"} >
            <div className="imgContainer-circle profile-img">
                <img src={icon} alt="profile"/>
            </div>

            <div className="header-body-summary">
                <h1 style={nameStyle}>Malik Roc</h1>
                <h3 style={{textAlign: "center", margin: 0}}>(muh-leek rock)</h3>

                <div className="header-descr">
                    Hi! Thank you for taking the time to view my portfolio! 
                    I am a software engineer looking for full time employment at 
                    a team oriented and inclusive company.
                </div>

            </div>
        </div>
    )
};

export default HeaderBody;