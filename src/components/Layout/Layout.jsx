import { Suspense } from 'react'
import { Profile } from '../Profile/Profile'
import s from './Layout.module.css'
import { AppBar } from '../AppBar/AppBar'

export const Layout = ({ children }) => {
    return (
        <div className={s.layout}>
            <p className={s.logo}>PortFolio</p>
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