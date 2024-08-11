import { EInfoCardType } from "../../enums/EInfoCardType"
import InfoCard from "../InfoCard/InfoCard"


export const AboutTestProject = () => {



    return (
        <InfoCard
            type={EInfoCardType.About}
        // title={'About'}

        >
            <div>
                <h1>This is some sample text</h1>
                <p>
                    Our Task Manager Web Application is a productivity tool designed to help
                    users organize their tasks efficiently. Built using HTML, CSS, JavaScript,
                    and React, this application offers a user-friendly interface and powerful features to manage tasks effectively.
                </p>
            </div>
        </InfoCard>
    )
}

export const HighlightsTestProject = () => {

    return (
        <InfoCard
            type={EInfoCardType.Highlights}
            isRightAligned
        >
            <div>
                <h1>Here are some of the highlights of this project</h1>
                <p>
                    Our Task Manager Web Application is a productivity tool designed to help
                    users organize their tasks efficiently. Built using HTML, CSS, JavaScript,
                    and React, this application offers a user-friendly interface and powerful features to manage tasks effectively.
                </p>
            </div>
        </InfoCard>

    )
}

