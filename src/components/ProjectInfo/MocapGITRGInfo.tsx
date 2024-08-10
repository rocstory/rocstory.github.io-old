import { Image } from "react-bootstrap";
import { EInfoCardType } from "../../enums/EInfoCardType"
import InfoCard from "../InfoCard/InfoCard"
import "./ProjectInfo.scss";


export const AboutMocapGITRG = () => {



    return (
        <InfoCard
            type={EInfoCardType.About}
        >
            <div className={`about-section`}>
                <p>
                    The goal of this project is to design a cost-effective motion capture system using "off the shelf" components and custom designed software. The project currently uses Raspberry Pi 3 computers for development but is targeting Raspberry Pi Zeroes for deployment.
                    The system also uses NoIR cameras for computer vision purposes The software is written in Python and utilizes the OpenCV computer vision library.
                </p>
            </div>
        </InfoCard>
    )
}

export const HighlightsMocapGITRG = () => {

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

