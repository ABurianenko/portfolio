import { Suspense } from 'react'
import { Profile } from '../Profile/Profile'
import s from './Layout.module.css'
import { AppBar } from '../AppBar/AppBar'
import { SwitchTheme } from '../SwitchTheme/SwitchTheme'

export const Layout = ({ children }) => {
    return (
        <div>
            <header className={s.header}>
                <p className={s.logo}>PortFolio</p>
                <SwitchTheme />
            </header>
            
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
    )
}