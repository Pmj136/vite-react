import { useLocation } from 'react-router-dom'

export function useCurrPathState(checkPath: string) {
    const location = useLocation()
    return location.pathname === checkPath
}
