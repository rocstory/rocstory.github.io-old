export interface ITreeLinkIcon {
    type: string,
    name: string
}

export interface ITreeLink {
    url: string, 
    label: string,
    icon: ITreeLink,
    color: string
}