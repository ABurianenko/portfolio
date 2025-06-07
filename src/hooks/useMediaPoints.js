import { useMediaQuery } from 'react-responsive';
import {BREAKPOINTS} from '../constants/index'

export function useMediaPoints() {
    const isMobile = useMediaQuery({ query: BREAKPOINTS.mobile });
    const isTablet = useMediaQuery({ query: BREAKPOINTS.tablet });
    const isDesktop = useMediaQuery({ query: BREAKPOINTS.desktop });

    return { isMobile, isTablet, isDesktop };
}