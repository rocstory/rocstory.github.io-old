
export interface IProjectEntry {
    id: string,
    index: number,
    name: string,
    type: string,
    icon: ProjectIcon,

    referenceLinks?: IReferenceLinks[],
    caption?: string,
    repoUrl?: string,
    demoUrl?: string,
    startDate?: string,
    videoUrl?: string,
    images?: IProjectImg[]
    tags?: string[],
    collaborators?: IProjectCollaborator[],

}

interface IProjectCollaborator {
    pid: string,
    role: string
}

interface IProjectImg {
    alt: string,
    url: string
}

interface IReferenceLinks {
    url: string,
    label: string
}

interface ProjectIcon {
    type: string,
    name: string,
    color: string
}

