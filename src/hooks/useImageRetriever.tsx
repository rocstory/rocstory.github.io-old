import {useContext} from 'react'
import { EntryContext } from '../contexts/EntryContext'

// banners
import headerBanner from "../assets/website-bg-compressed.jpg"

// thumbnails
import projectDefaultThumbnail from "../assets/thumbnails/default-thumbnail_compressed.jpg"
import twinlandeThumbnail from "../assets/thumbnails/twinlande-thumbnail_compressed.jpg"
import chevEscapeThumbnail from  "../assets/thumbnails/chev-escape-thumbnail.jpg";
import colonialCarnivalThumbnail from "../assets/thumbnails/colonial-carnival-thmbnl.jpg";
import pawbytesCafeThumbnail from "../assets/thumbnails/pawbytes--cafe-thmbnl.jpg";



export const useImageRetriever = () => {
  return {
    headerBanner,
    projectDefaultThumbnail,
    twinlandeThumbnail,
    chevEscapeThumbnail,
    colonialCarnivalThumbnail,
    pawbytesCafeThumbnail
  }
}