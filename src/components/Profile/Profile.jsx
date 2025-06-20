import { IoLogoLinkedin, IoMailUnreadOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import s from './Profile.module.css'
import { useMediaPoints } from "../../hooks/useMediaPoints";

export const Profile = () => {
    const { isMobile } = useMediaPoints();

    return (
        <>
            {isMobile ? (
                <div className={s.profile}>
                    <img className={s.avatar} src="/images/photo_2025-05-21_17-07-50.jpg" alt="avatar" />
                    <div className={s.wrapper}>
                        <h1 className={s.name}>Anastasiia Burianenko</h1>
                        <p className={s.position}>Front-End Developer</p>
                        <ul className={s.networkList}>
                            <li className={s.networkItem}>
                                <a className={s.contacts} href="https://t.me/anastasiia_burianenko">
                                    <BsTelegram style={{ color: 'var(--service-desc-color)' }} />
                                </a>
                            </li>
                            <li className={s.networkItem}>
                                <a className={s.contacts} href="tel:+351914640057">
                                    <CiMobile1 style={{ color: 'var(--service-desc-color)' }} />
                                </a>
                            </li>
                            <li className={s.networkItem

                            }>
                                <a className={s.contacts} href="mailto:aburianenko@gmail.com">
                                    <IoMailUnreadOutline style={{ color: 'var(--service-desc-color)' }} />
                                </a>
                            </li>
                            <li className={s.networkItem}>
                                <a href="https://www.linkedin.com/in/anastasiia-burianenko/">
                                    <IoLogoLinkedin style={{ color: 'var(--service-desc-color)' }} />
                                </a>
                            </li>
                            <li className={s.networkItem}>
                                <a href="https://github.com/ABurianenko">
                                    <IoLogoGithub style={{ color: 'var(--service-desc-color)' }}/>
                                </a>
                            </li>
                        </ul>
                        <a className={s.resumeLink} href="/docs/Anastasiia_Burianenko_FrontendDeveloper.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </div>
                </div>
            ) : (
                <div className={s.profile}>
                    <img className={s.avatar} src="/images/photo_2025-05-21_17-07-50.jpg" alt="avatar" />
                    <div className={s.wrapper}>
                        <h1 className={s.name}>Anastasiia Burianenko</h1>
                        <p className={s.position}>Front-End Developer</p>
                        <ul className={s.networkList}>
                            <li className={s.networkItem}>
                                <a href="https://www.linkedin.com/in/anastasiia-burianenko/">
                                    <IoLogoLinkedin style={{ color: 'var(--service-desc-color)' }} />
                                </a>
                            </li>
                            <li className={s.networkItem}>
                                <a href="https://github.com/ABurianenko">
                                    <IoLogoGithub style={{ color: 'var(--service-desc-color)' }} />
                                </a>
                            </li>
                        </ul>
                        <ul className={s.contactsList}>
                            <li className={s.contactsItem}>
                                <div className={s.contactsIcon}>
                                    <BsTelegram />
                                </div>
                                
                                <a className={s.contacts} href="https://t.me/anastasiia_burianenko">@anastasiia_burianenko</a>
                            </li>
                            <li className={s.contactsItem}>
                                <div className={s.contactsIcon}>
                                    <CiMobile1 />
                                </div>
                                
                                <a className={s.contacts} href="tel:+351914640057">+351 914 640 057</a>
                            </li>
                            <li className={s.contactsItem}>
                                <div className={s.contactsIcon}>
                                    <IoMailUnreadOutline />
                                </div>
                                
                                <a className={s.contacts} href="mailto:aburianenko@gmail.com">
                                    aburianenko@gmail.com
                                </a>
                            </li>
                            <li className={s.contactsItem}>
                                <div className={s.contactsIcon}>
                                    <FaMapMarkerAlt />
                                </div>
                                
                                <p className={s.contacts}>Lisbon, Portugal</p>
                            </li>
                        </ul>
                        <a className={s.resumeLink} href="/docs/Anastasiia_Burianenko_FrontendDeveloper.pdf" target="_blank" rel="noopener noreferrer">View Resume</a> 
                    </div>
                    
                </div>    
            )}
        </>
        
    )
}