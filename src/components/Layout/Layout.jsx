import { Suspense } from 'react'
import { Profile } from '../Profile/Profile'
import s from './Layout.module.css'
import { AppBar } from '../AppBar/AppBar'
import { SwitchTheme } from '../SwitchTheme/SwitchTheme'

export const Layout = ({ children }) => {
    return (
        <div className={s.layout}>
            <header className={s.header}>
                <p className={s.logo}>PortFolio</p>
                <SwitchTheme />
            </header>
            
            <aside>
                <Profile />
            </aside>
            <Suspense fallback={null}>{children}</Suspense>
            <aside>
                <AppBar />
            </aside>
        </div>
    )
}