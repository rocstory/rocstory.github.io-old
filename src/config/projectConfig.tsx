import { EProjectType } from "../enums/EProjectType";
import { ERefLinkType } from "../enums/ERefLinkType";
import { ETag } from "../enums/ETag";

export default {
    twinlandeSuperstore: {
        title: "twinlande superstore",
        type: EProjectType.WebDevelopment,
        shortDescr: "This project leverages React and TypeScript to craft modern, scalable web applications with a focus on reliability and developer efficiency.",
        tags: [
            ETag.Css,
            ETag.Html,
            ETag.Javascript,
            ETag.React
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

    },
    testProject: {
        title: "test project",
        type: EProjectType.WebDevelopment,
        shortDescr: "This is a test project with a really long string that repeats itself. This is a test project with a really long string that repeats itself.This is a test project with a really long string that repeats itself.This is a test project with a really long string that repeats itself.This is a test project with a really long string that repeats itself.",
        tags: [
            ETag.Html,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Css, ETag.Css, ETag.Github, ETag.Javascript, ETag.React,
            ETag.Html
        ],
        refLinks: [
            {
                src: '.',
                type: ERefLinkType.RepoLink,
            },
            {
                src: ".",
                type: ERefLinkType.DemoLink,
            },
            {
                src: '.',
                type: ERefLinkType.OtherLink,
                label: 'TEST Link'
            }
        ]
    }
}