import { ERSTabType } from "../enums/ERSTabType";

export interface IRSTab {
    tabType: ERSTabType,
    component: any,
    title?: string,
    className?: string
    

}