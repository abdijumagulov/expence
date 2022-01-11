import React from 'react';
import "./css/ExpenceDate.css"
function ExpenceDate(props) {
    const expenceDate = props.date;
    const month = expenceDate.toLocaleDateString("en-Us", {month: "long"})
    const day = expenceDate.toLocaleDateString("en-Us", {day : '2-digit'})
    const year = expenceDate.getFullYear()
    return (
        <div className='expense-date'>
                <div className='date'>{month}</div>
                <div className='date'>{day}</div>
                <div className='date'>{year}</div>
        </div>
    );
}

export default ExpenceDate;