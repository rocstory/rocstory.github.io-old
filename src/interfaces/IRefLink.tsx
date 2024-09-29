import { ERefLinkType } from "../enums/ERefLinkType";

export interface IRefLink {
    src: string,
    type: ERefLinkType,
    label?: string,
}