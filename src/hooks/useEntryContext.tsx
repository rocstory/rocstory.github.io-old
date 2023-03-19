import {useContext} from 'react'
import { EntryContext } from '../contexts/EntryContext'


export const useEntryContext = () => {
  return useContext(EntryContext)
}