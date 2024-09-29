import { Image } from "react-bootstrap";
import { EInfoCardType } from "../../enums/EInfoCardType"
import InfoCard from "../InfoCard/InfoCard"
import "./ProjectInfo.scss";


export const AboutLovelyFeathers = () => {



    return (
        <InfoCard
            type={EInfoCardType.About}
        >
            <div className={`about-section`}>
                <p>
                    A web application that gives people the opportunity to spread kindness by
                    passing on a kind message to someone in a unique way.
                </p>
                <p>
                    The goal of this project is to learn more about React, Bootstrap, and Firebase.
                    The other goal is to find a creative way for people to spread a bit of kindness.
                </p>
            </div>
        </InfoCard>
    )
}

export const HighlightsLovelyFeathers = () => {

    const programOfTheYearImgUrl = 'https://rocportfolio.s3.amazonaws.com/colonialcarnival/program_award.jpg'

    return (
        <InfoCard
            type={EInfoCardType.Highlights}
            isRightAligned
        >
            <div className={`highlights-section`}>
                {/* <p>
                    Here are some of the project highlights.
                </p>
                <ul>
                    <li>Earned an A on the project!</li>
                    <li>First experience developing an application with a team.</li>
                    <li>Developed a set of functions that were used all across the application.</li>
                </ul> */}
            </div>
        </InfoCard>

    )
}

