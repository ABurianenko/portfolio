import { Suspense } from 'react'
import s from './Layout.module.css'

export const Layout = ({ children }) => {
    return (
        <div className={s.layout}>
            <p className={s.logo}>PortFolio</p>
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    )
}