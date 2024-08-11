import { Image } from "react-bootstrap";
import { EInfoCardType } from "../../enums/EInfoCardType"
import InfoCard from "../InfoCard/InfoCard"
import "./ProjectInfo.scss";


export const AboutChevsEscape = () => {



    return (
        <InfoCard
            type={EInfoCardType.About}
        >
            <div className={`about-section`}>
                <p>
                    Chev's Escape is an Object-Oriented (OO) Software Engineering project for the CS350
                    Object Oriented Software Engineering class at Western Connecticut State University.
                </p>
                <div>
                    <p>
                        This project was built by a team of 5 computer science students using C# and WinForms.
                    </p>
                    <p>
                        The goal of the project is to develop a fully functioning program
                        by the end of the semester using OO principles.
                    </p>
                </div>

                <div>
                    <h2>Game Lore</h2>
                    <p>
                        The game is about the professor Dr. Gancho Ganchev who is stuck inside of a building.
                        The only way he is able to escape is by solving 4 puzzles in different rooms.
                    </p>
                    <h3>Puzzles</h3>
                    <ol>
                        <li>Memory Puzzle</li>
                        <li>Image Scrambler</li>
                        <li>Color Puzzle</li>
                        <li>Brain Buster Puzzle</li>
                    </ol>
                </div>

                <div>
                    <h2>Software used</h2>
                    <ul>
                        <li>Visual Studio 2019 Winforms</li>
                        <li>C#</li>
                        <li>Asperite - Artwork </li>
                        <li>Audacity - Sound Effects</li>
                    </ul>
                </div>
            </div>
        </InfoCard>
    )
}

export const HighlightsChevsEscape = () => {

    const programOfTheYearImgUrl = 'https://rocportfolio.s3.amazonaws.com/colonialcarnival/program_award.jpg'

    return (
        <InfoCard
            type={EInfoCardType.Highlights}
            isRightAligned
        >
            <div className={`highlights-section`}>
                <p>
                    Here are some of the project highlights.
                </p>
                <ul>
                    <li>Earned an A on the project!</li>
                    <li>First experience developing an application with a team.</li>
                    <li>Developed a set of functions that were used all across the application.</li>
                </ul>
            </div>
        </InfoCard>

    )
}

