import {useContext} from 'react'
import { PageContext } from '../contexts/PageContext'


export const usePageContext = () => {
  return useContext(PageContext)
}