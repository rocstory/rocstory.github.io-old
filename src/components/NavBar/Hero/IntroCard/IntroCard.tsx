import Container from 'react-bootstrap/Container';
import "./IntroCard.scss";

function IntroCard() {
    return (
        <div
            className=' intro-card'

        >
            <h2 className=" my-name">Malik Roc</h2>
            <div className="intro-paragraph">
                <p>
                    Hi! I'm Malik, a software engineer driven by creativity
                    and a passion for solving problems. Dive into my portfolio
                    to explore projects that blend innovation with practical
                    solutions. Whether you're a fellow developer, recruiter, or
                    simply curious, I invite you to look through the projects
                    I'm a part of.
                </p>
            </div>
        </div>
    )
}

export default IntroCard;