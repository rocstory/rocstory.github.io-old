import { EPerson } from "../enums/EPerson";
import { IRefLink } from "./IRefLink";

export interface IContact {
    person: EPerson,
    name: string,
    profilePicSrc?: string,
    refLinks: IRefLink[],
}