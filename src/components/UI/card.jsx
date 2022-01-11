import React from 'react';
import "./card.css";

const card = (props) => {
    const classes = "card " + props.classname;
    return (
        <div className='card'>
            <div className={classes}>{props.children}</div>
        </div>
    );
};

export default card;