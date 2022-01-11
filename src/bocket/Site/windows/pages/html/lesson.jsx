import React from 'react';
import "./lesson.scss"
const Lesson = (props) => {
    return (
        <div className='body'>
            <h1 className="h1">
                {props.h1}
            </h1>
            <div className="blockVideo">{props.video}</div>

            <div className="blockDoc">

                <h3 className="h3">
                    {props.h3}
                </h3>
                <p className="prg">
                    {props.prg}
                </p>
            </div>
            <div className="blockDoc2">

                <h3 className="h21">
                    {props.h31}
                </h3>
                <p className="prg2">
                    {props.prg2}
                </p>
            </div>
        </div>
    );
};

export default Lesson;