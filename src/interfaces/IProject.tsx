import { EProject } from "../enums/EProject";
import { EProjectType } from "../enums/EProjectType";

export interface IProject {
    name: EProject,
    type: EProjectType,
    demoUrl?: string,
    repoUrl?: string,
    otherUrl?: string,
}