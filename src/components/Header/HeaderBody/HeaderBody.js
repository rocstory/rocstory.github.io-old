import React from 'react';
import icon from "../../../assets/profpic.jpg";
import "./HeaderBody.css";
import Flip from 'react-reveal/Flip';

function HeaderBody({aboutme})
{
    const {introduction, name, pronounciation} = aboutme

    let nameStyle =
    {
        color: "#ffc125",
        textAlign: "center",
        margin: 0
    }
    // console.log("hbody rendering")

    return (
        <div className="header-body-container">
            <Flip top>
                <div className="imgContainer-circle profile-img">
                    <img src={icon} alt="profile"/>
                </div>
            </Flip>
            

            <div className="header-body-summary">
                <h1 className="my-name" style={nameStyle}>{name}</h1>
                <h3 className="pronunciation" style={{textAlign: "center", margin: 0}}>{pronounciation}</h3>

                <div className="header-descr">
                    {`${introduction}`}
                </div>
            </div>
        </div>
    )
};

export default HeaderBody;