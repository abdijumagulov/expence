import React from 'react';
import "./css/Expenceitem.css";
import Date from "./ExpenceDate"
function ExpenceItem(props) {
    return (
        <div className='expense-item'>
            <h2 className='expense-item__description'>{props.title}</h2>
            <img src={props.img} alt="" />
            <div className='expense-item__prise'>{props.amount}</div>
            <Date date={props.date}/>
        </div>
    );
}

export default ExpenceItem;