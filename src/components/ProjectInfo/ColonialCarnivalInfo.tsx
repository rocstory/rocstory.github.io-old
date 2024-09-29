import { Image } from "react-bootstrap";
import { EInfoCardType } from "../../enums/EInfoCardType"
import InfoCard from "../InfoCard/InfoCard"
import "./ProjectInfo.scss";


export const AboutColonialCarnival = () => {



    return (
        <InfoCard
            type={EInfoCardType.About}
        >
            <div className={`about-section`}>
                <p>
                    Colonial Carnival is a web application that uses HTML, CSS, JavaScript, and Firebase.
                    This application was developed for the residents at Western Connecticut State University (WCSU).
                    It is also my very first personal project!
                </p>
                <div>
                    <p>
                        The project is a virtual carnival for students at WCSU to earn marbles (tickets) for each game to exchange for
                        prizes such as:
                    </p>
                    <ul>
                        <li>Gift cards</li>
                        <li>Stationary items</li>
                        <li>University gear</li>
                    </ul>
                </div>

                <div>
                    <p>
                        I wanted to take on two challenges:
                    </p>
                    <ol>
                        <li>Building something from the ground up on my own.</li>
                        <li>To bring something unique to my resiednts.</li>
                    </ol>
                </div>



            </div>
        </InfoCard>
    )
}

export const HighlightsColonialCarnival = () => {

    const programOfTheYearImgUrl = 'https://rocportfolio.s3.amazonaws.com/colonialcarnival/program_award.jpg'

    return (
        <InfoCard
            type={EInfoCardType.Highlights}
            isRightAligned
        >
            <div className={`highlights-section`}>
                <p>
                    Here are some of my project highlights.
                </p>
                <ul>
                    <li>Awarded 'Program Of The Year'</li>
                    <li>First ever personal project</li>
                </ul>
                <div className={`info-card-imgs`}>
                    <div className={`img-wrapper shadow`}>
                        <Image src={programOfTheYearImgUrl} />
                    </div>
                </div>
            </div>
        </InfoCard>

    )
}

