import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import s from './BackBtn.module.css';

export const BackBtn = () => {
    const location = useLocation();
    const goBackRef = useRef(location.state?.from || "/projects");
    const fromIndex = location.state?.fromIndex;

    return (
        <div>
            <Link
                className={s.backBtn}
                to={{ pathname: goBackRef.current }}
                state={{ fromIndex }}
            >
                <IoIosArrowBack />
                Back
            </Link>
        </div>
    )
}