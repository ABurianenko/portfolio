import { Suspense } from 'react'
import { Profile } from '../Profile/Profile'
import s from './Layout.module.css'
import { AppBar } from '../AppBar/AppBar'
import { useMediaPoints } from '../../hooks/useMediaPoints'
import { Header } from '../Header/Header'

export const Layout = ({ children }) => {
    const { isMobile, isTablet, isDesktop } = useMediaPoints();

    return (
        <>
            {isMobile && (
                <>
                    <Header />
                    <main>
                        <Suspense fallback={null}>{children}</Suspense>
                    </main>
                </>
                )}
            {isTablet && (
                <div>
                    <Header />
                    <div className={s.layout}>
                        <aside>
                            <Profile />
                        </aside>
                        <main>
                            <Suspense fallback={null}>{children}</Suspense>
                        </main>
                    </div>
                    
                </div>
            )}
            {isDesktop && (
                <div>
                <Header />
                
                <div className={s.layout}>
                    <aside>
                        <Profile />
                    </aside>
    
                    <main>
                        <Suspense fallback={null}>{children}</Suspense>
                    </main>
                    
                    <aside>
                        <AppBar />
                    </aside>
                </div>
            </div>
            )}
            
        </>
        
    )
}