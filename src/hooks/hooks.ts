import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/reducers'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<RootState>()
