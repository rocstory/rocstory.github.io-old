import { ETag } from "../enums/ETag"

const TECH_TAGS = [
    ETag.Arduino,
    ETag.CSharp,
    ETag.Cpp,
    ETag.Css,
    ETag.Firebase,
    ETag.Fritzing,
    ETag.Github,
    ETag.Html,
    ETag.Javascript,
    ETag.MongoDB,
    ETag.OpenSCAD,
    ETag.PostgreSQL,
    ETag.Python,
    ETag.RaspberryPi,
    ETag.React,
    ETag.Twitter,
    ETag.TypeScript
]

const PROGRAMMING_LANGUAGES_TAGS = [
    ETag.CSharp,
    ETag.Cpp,
    ETag.Css,
    ETag.Github,
    ETag.Html,
    ETag.Javascript,
    ETag.PostgreSQL,
    ETag.Python,
    ETag.React,
    ETag.TypeScript
]


export const getAllTechTags = (tags: ETag[]) => {
    const tagArr = tags.filter(tag => TECH_TAGS.includes(tag));
    return tagArr;
}

export const getAllProgramLanguageTags = (tags: ETag[]) => {
    const tagArr = tags.filter(tag => PROGRAMMING_LANGUAGES_TAGS.includes(tag))
    return tagArr;
}

export const sortTagsAlphabetically = (tags: ETag[]) => {
    const tagArr = tags.sort()
    return tagArr;
}