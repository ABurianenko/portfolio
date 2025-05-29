import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import s from './Pagination.module.css';

export const Pagination = ({ total, perPage, current, setCurrent }) => {
    const totalPages = Math.ceil(total / perPage);

    const handlePrev = () => {
        if (current > 1) setCurrent(current - 1);
    };

    const handleNext = () => {
        if (current < totalPages) setCurrent(current + 1);
    };

    return (
        <div>
            <div className={s.pagination}>
                <button className={s.pagination_btn} onClick={handlePrev} disabled={current === 1}>
                    <IoArrowBackCircleOutline />
                </button>
                <span className={s.pagination_count}>{current} / {totalPages}</span>
                <button className={s.pagination_btn} onClick={handleNext} disabled={current === totalPages}>
                    <IoArrowForwardCircleOutline />
                </button>
            </div>
        </div>
    )
}