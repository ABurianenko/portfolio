import s from './Summary.module.css'

export const Summary = () => {
    return (
        <div className={s.summaryWrapper}>
            <h2>About</h2>
            <p>I am a passionate tech enthusiast with a deep interest in Web and App
                Development. Currently, I am pursuing a B.Tech in Information Technology at CSPIT, CHARUSAT, and am gaining valuable experience as an SDE Intern at Compnay A. I possess expertise in Flutter Development, UI/UX Design, React.js, and Tailwind CSS for web development, as well as Node.js and Express.js for robust backend solutions.</p>
            <p>Noteworthy Achievement of my carear is ranking in Top 10 Teams at hackathon hosted by Zyc org at CSF, Gujarat. As UI/UX Designer my several apps and websites designs are currently in used in production.</p>
            <p>Additionally, I have did internship as Flutter Developer, Ul/UX Designer and Java Developer. This diverse experience has provided me with a holistic understanding on front-end and back-end technologies, as well as user experience, allowing me to make meaningful contributions across various facets of technology projects.</p>
            <h3>What I Do</h3>
            <ul>
                <li>
                    <h4>Web Front-End Development</h4>
                    <p>With a robust proficiency in
                    React.js. I excel at transforming design concepts into dynamic, user-friendly websites.</p>
                </li>
                <li>
                    <h4>Back-End Development</h4>
                    <p>Skilled in Node.js, Express.js, Java I build scalable backend systems and efficient server-side solutions using databases like MongoDB and MySQL for dynamic applications.</p>
                </li>
                <li>
                    <h4>UI/UX Designing</h4>
                    <p>With strong expertise in UI/UX design, I excel at creating intuitive and visually engaging user experiences, translating user needs into seamless, impactful Designs.</p>
                </li>
                <li>
                    <h4>Flutter App Development</h4>
                    <p>Proficient in Flutter and Firebase, I build cross-platform, high-performance mobile apps with real-time data and seamless backend integration.</p>
                </li>
            </ul>
        </div>
    )
}