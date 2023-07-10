import { ESocialMedia } from "../enums/ESocialMedia";
import { ETechnology } from "../enums/ETechnology";

export interface ISocialLink {
    src: string,
    name: ESocialMedia,
    type: ETechnology
}