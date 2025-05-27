import s from './Summary.module.css'

export const Summary = () => {
    return (
        <div className="container">
            <h2>About</h2>
            <div className={s.sectionText}>
            <p>
                    I am a frontend-focused web developer with a strong interest in creating
                    responsive and user-friendly interfaces. I completed a fullstack development course,
                    during which I worked on several backend projects using technologies like Node.js and Express.
                </p>
                <p>
                    While I don't have commercial experience yet, I have built a number of personal and
                    course-based projects that demonstrate my skills in both frontend and backend development.
                    I enjoy learning new tools and applying best practices to build clean and maintainable code.
                </p>
                <p>
                    I can also make small improvements to UI/UX designs to enhance usability,
                    although I do not create full design mockups myself.
                </p>
            </div>
            <h3 className={s.sectionSubtitle}>What I Do</h3>
            <ul className={s.servicesList}>
                <li className={s.servicesList_item}>
                    <img className={s.servicesList_img} src="public/images/service1-min.jpg" alt="front-end" />
                    <h4 className={s.servicesList_title}>Web Front-End Development</h4>
                    <p className={s.servicesList_description}>
                        I build responsive and accessible user interfaces using React.js and modern web technologies. 
                        I focus on clean code, performance, and usability.
                    </p>
                </li>
                <li className={s.servicesList_item}>
                    <img className={s.servicesList_img} src="public/images/service2-min.jpg" alt="UI/UX" />
                    <h4 className={s.servicesList_title}>Back-End Development</h4>
                    <p className={s.servicesList_description}>
                        During my fullstack course, I developed several backend projects using Node.js, Express, and MongoDB.
                        While my main focus is frontend, I am comfortable working with server-side logic when needed.
                    </p>
                </li>
                <li className={s.servicesList_item}>
                    <img className={s.servicesList_img} src="public/images/service3-min.jpg" alt="back-end" />
                    <h4 className={s.servicesList_title}>UI/UX Designing</h4>
                    <p className={s.servicesList_description}>
                        I can suggest and implement small design improvements to make interfaces more user-friendly,
                        ensuring a smooth and intuitive user experience.
                    </p>
                </li>
            </ul>
        </div>
    )
}