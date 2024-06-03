import { EProjectType } from "../enums/EProjectType";
import { ERefLinkType } from "../enums/ERefLinkType";
import { ETag } from "../enums/ETag";

export default {
    twinlandeSuperstore: {
        title: "twinlande superstore",
        type: EProjectType.WebDevelopment,
        shortDescr: "This project leverages React and TypeScript to craft modern, scalable web applications with a focus on reliability and developer efficiency. By harnessing React's component-based architecture and TypeScript's static typing, it ensures robustness and maintainability in the codebase.",
        tags: [
            ETag.css,
            ETag.html,
            ETag.javascript,
            ETag.react
        ],
        refLinks: [
            {
                src: "https://github.com/rocstory/twinlande-super-store",
                type: ERefLinkType.RepoLink,
            },
            {
                src: "https://twinlande.netlify.app/",
                type: ERefLinkType.DemoLink,
            }
        ]

    }
}