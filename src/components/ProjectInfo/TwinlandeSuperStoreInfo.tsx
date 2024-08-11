import { EInfoCardType } from "../../enums/EInfoCardType"
import InfoCard from "../InfoCard/InfoCard"
import "./ProjectInfo.scss";
import { IRSLink } from "../../interfaces/IRSLink";
import { RSLinks } from "../RSLinks/RSLinks";


export const AboutTwinlandeSuperstore = () => {

    const rsLinks: IRSLink[] = [
        {
            src: "https://github.com/rocstory/twinlande-super-store/tree/main/tss-client",
            label: "Client - Source Code",
        },
        {
            src: "https://github.com/rocstory/twinlande-super-store/tree/main/tss-database",
            label: "Database - Source Code"
        },
        {
            src: "https://github.com/rocstory/twinlande-super-store/tree/main/tss-server",
            label: "Server - Source Code"
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
                    Twinlande Superstore (TSS) is a full stack web application. This is an application for a fictional store run by twin sisters Dlo & Dife.
                </p>
                <p>
                    TSS was created to learn how to build a full stack application from the ground up with the help of a community.
                    I wanted to have a deeper understanding of how to build the frontend, backend, and database of an application while learning how to create content.
                </p>
                <p>
                    I created this project to build my social skills, especially when it comes to technology! I realized that when it comes to talking about tech, I freeze up and stutter!
                    I’m hoping with this project, I can grow my confidence.
                </p>
            </div>

        </InfoCard>
    )
}

export const HighlightsTwinlandeSuperStore = () => {

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

