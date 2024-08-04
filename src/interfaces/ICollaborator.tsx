import { EPerson } from "../enums/EPerson";
import { EProjectRole } from "../enums/EProjectRole";

export interface ICollaborator {
    personId: EPerson;
    role: EProjectRole;
}