export interface ITreeLink {
    url: string, 
    label: string,
    icon: ITreeLinkIcon,
    color: string
}

export interface ITreeLinkIcon {
    type: string,
    name: string
}