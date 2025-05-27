import { FaFileLines } from "react-icons/fa6";

export const Education = () => {
    return (
        <div>
            <h2>Education</h2>
            <ul>
                <li>
                    <p>2024-2025</p>
                    <h4>IT School GoIT</h4>
                    <h5>Fullstack Developer</h5>
                    <a href="/public/Anastasiia_Burianenko_certificate.pdf" target="_blank" rel="noopener noreferrer">
                        <FaFileLines />
                    </a>
                </li>
                <li>
                    <p>2018-2020</p>
                    <h4>Kyiv National Economics University</h4>
                    <h5>Master’s Degree, Accounting and taxation</h5>
                </li>
                <li>
                    <p>2014-2018</p>
                    <h4>Kyiv National Economics University</h4>
                    <h5>Bachelor’s Degree, Economics of Enterprise</h5>
                </li>
            </ul>
        </div>
    )
}