import { Image } from "react-bootstrap";
import { EInfoCardType } from "../../enums/EInfoCardType"
import InfoCard from "../InfoCard/InfoCard"
import "./ProjectInfo.scss";
import { IRSLink } from "../../interfaces/IRSLink";
import { RSLinks } from "../RSLinks/RSLinks";


export const AboutPawBytes = () => {

    const rsLinks: IRSLink[] = [
        {
            src: "https://github.com/rocstory/PawBytes_WebApp",
            label: "Client - Source Code",
        },
        {
            src: "https://github.com/rocstory/PawBytes_Database",
            label: "Database - Source Code"
        },
        {
            src: "https://github.com/rocstory/PawBytes_PawBot",
            label: "Paw Bot - Source Code"
        },
        {
            src: "https://twitter.com/PawBytes",
            label: "Paw Bot - Twitter Bot"
        }
    ]


    return (
        <InfoCard
            type={EInfoCardType.About}
        >
            <div className={`about-section`}>
                <RSLinks
                    links={rsLinks}
                />
                <p>
                    Paw Bytes Café is a full stack application using React (JavaScript), MongoDB, and a Twitter Bot.
                    This project is about a café for students and other people who are looking for a place to relax with cats and dogs
                </p>
                <p>
                    I created Paw Bytes Café because I barely passed my Database Management Systems class. During my sophomore year of college, I was struggling with managing my mental health, school, jobs, and my family. With so much going on, especially with family, I was having a hard time keeping up with the material.
                    I had to decide between prioritizing my mental health or my grades. In hindsight, choosing my mental health is the obvious choice but that meant risking my scholarships, my status as a Kathwari Honors student, and even my status as a college student overall. After deciding to prioritize my mental health, I made a promise to myself to relearn the material when I have the time.
                </p>
            </div>
        </InfoCard>
    )
}

export const HighlightsPawBytes = () => {

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

