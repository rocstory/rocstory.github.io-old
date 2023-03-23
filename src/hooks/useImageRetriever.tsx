import {useContext} from 'react'
import { EntryContext } from '../contexts/EntryContext'

// images
import headerBanner from "../assets/website-bg-compressed.jpg"
import projectDefaultThumbnail from "../assets/thumbnails/default-thumbnail_compressed.jpg"
import twinlandeThumbnail from "../assets/thumbnails/twinlande-thumbnail_compressed.jpg"

export const useImageRetriever = () => {
  return {
    headerBanner,
    projectDefaultThumbnail,
    twinlandeThumbnail
  }
}