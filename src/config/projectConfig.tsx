import { EPerson } from "../enums/EPerson";
import { EProjectRole } from "../enums/EProjectRole";
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
    colonialCarnival: {
        title: "colonial carnival",
        type: EProjectType.WebDevelopment,
        shortDescr: "A web application designed for students at Western Connecticut State University (WCSU).",
        tags: [
            ETag.Css,
            ETag.Html,
            ETag.Javascript,
            ETag.Firebase,
        ],
        refLinks: [
            {
                src: "https://github.com/rocstory/colonialcarnival",
                type: ERefLinkType.RepoLink,
            },
            {
                src: "https://rocstory.github.io/colonialcarnival/",
                type: ERefLinkType.DemoLink,
            }
        ],
    },
    chevEscape: {
        title: "chev's escape",
        type: EProjectType.GameDevelopment,
        shortDescr: "An object oriented software engineering class project (2019).",
        tags: [
            ETag.CSharp
        ],
        refLinks: [
            {
                src: "https://github.com/rocstory/Cs_ChevEscape",
                type: ERefLinkType.RepoLink,
            },
        ],
        collaborators: [
            {
                personId: EPerson.CoryPineau,
                role: EProjectRole.Developer,
            },
            {
                personId: EPerson.MatheusAlexandre,
                role: EProjectRole.Developer,
            },
            {
                personId: EPerson.StephenAlpuche,
                role: EProjectRole.Developer,
            },
            {
                personId: EPerson.KrishanSingh,
                role: EProjectRole.Developer,
            }
        ]
    },
    revealingRoc: {
        title: "revealing roc",
        type: EProjectType.EmbeddedSystems,
        shortDescr: "An embedded systems class project",
        tags: [
            ETag.Arduino,
            ETag.Cpp,
            ETag.Fritzing
        ],
        refLinks: [
            {
                src: "https://github.com/rocstory/Arduino_RevRoc",
                type: ERefLinkType.RepoLink,
            }
        ]
    },
    crayonGitrg: {
        title: "GITRG 3D Crayon 2019-2020",
        type: EProjectType.EmbeddedSystems,
        shortDescr: "An open source intelligent toy which allows someone to draw in a 3D space.",
        tags: [
            ETag.RaspberryPi
        ],
        refLinks: [
            {
                src: "https://www.wcsu.edu/cs/computer-science-research/computer-science-grg/",
                type: ERefLinkType.RepoLink,
            }
        ]
    },
    mocapGitrg: {
        title: "GITRG MOCAP 2018-2019",
        type: EProjectType.EmbeddedSystems,
        shortDescr: "An open source intelligent toy which allows someone to draw in a 3D space.",
        tags: [
            ETag.RaspberryPi,
            ETag.Python,
            ETag.Fritzing,
            ETag.OpenSCAD
        ],
        refLinks: [
            {
                src: "https://github.com/ChrisIossa/RPi_MoCap",
                type: ERefLinkType.RepoLink,
            },
            {
                src: "https://www.wcsu.edu/cs/computer-science-research/computer-science-grg/",
                type: ERefLinkType.OtherLink
            }
        ]
    },
    pawBytesCafe: {
        title: "paw bytes cafe",
        type: EProjectType.WebDevelopment,
        shortDescr: "A three part project that incorporates a Twitter bot, database, and website.",
        tags: [
            ETag.Css,
            ETag.Html,
            ETag.Javascript,
            ETag.PostgreSQL,
            ETag.MongoDB,
            ETag.Python,
            ETag.React,
            ETag.Twitter
        ],
        refLinks: [
            {
                src: "https://github.com/rocstory/PawBytes_Webapp",
                type: ERefLinkType.RepoLink,
            },
            {
                src: "https://pawbytes.netlify.app/",
                type: ERefLinkType.DemoLink,
            },

        ],
    },

    lovelyFeathers: {
        title: "lovely feathers",
        type: EProjectType.WebDevelopment,
        shortDescr: "A web application that gives people the opportunitiy to spread kindness.",
        tags: [
            ETag.Css,
            ETag.Html,
            ETag.Javascript,
            ETag.React,
            ETag.Firebase,
            ETag.TypeScript,
        ],
        refLinks: [],
    },
    testProject: {
        title: "test project",
        type: EProjectType.Unknown,
        shortDescr: "This is a test project with a really long string that repeats itself. This is a test project with a really long string that repeats itself.This is a test project with a really long string that repeats itself.This is a test project with a really long string that repeats itself.This is a test project with a really long string that repeats itself.",
        tags: [
            ETag.Html,
            ETag.Arduino,
            ETag.CSharp,
            ETag.Cpp,
            ETag.Css,
            ETag.Firebase,
            ETag.Fritzing,
            ETag.Github,
            ETag.Javascript,
            ETag.MongoDB,
            ETag.PostgreSQL,
            ETag.Python,
            ETag.RaspberryPi,
            ETag.Twitter,
            ETag.TypeScript,
            ETag.Twitter,
            ETag.MongoDB,

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