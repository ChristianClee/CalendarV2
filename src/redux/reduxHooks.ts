import {useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
// import type { TypedUseSelectorHook } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import {actions as dateActions} from './slices/dateSlice'
export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


  const rootActions = {
  ...dateActions,
}


export const useActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch )
  ,[dispatch])
}














