import { Image } from "react-bootstrap";
import { EInfoCardType } from "../../enums/EInfoCardType"
import InfoCard from "../InfoCard/InfoCard"
import "./ProjectInfo.scss";


export const AboutRevealingRoc = () => {



    return (
        <InfoCard
            type={EInfoCardType.About}
        >
            <div className={`about-section`}>
                <p>
                    Revealing Roc is a game built in my CS215 Embedded Systems class. It is a game of hide and seek on an LED board.
                </p>
            </div>
        </InfoCard>
    )
}

export const HighlightsRevealingRoc = () => {

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

