import React from 'react';
import "./css/lessonHtml.scss";
import { Link } from 'react-router-dom';
const lessonReactJs = () => {
    return (
        <div className='body'>
            <h1 className="h1">
                Уроки по React, иди четка по плану и тогда будет больше ефективности.
            </h1>
            <div className="blockDoc">
                <h3 className="h3">
                Небольшая документация про React.    
                </h3> 
                <p className="prg">
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Consequuntur, commodi animi? Adipisci provident
                quidem repudiandae dolorem cumque praesentium, et
                beatae aperiam architecto delectus harum recusandae 
                tempore culpa velit in possimus cupiditate quod eligendi aut blanditiis a expedita veniam ipsa consequatur! Nam, qui laborum! Numquam quasi, nulla, ullam reiciendis repellat fugiat quibusdam iusto perferendis voluptatum consequatur nam doloribus exercitationem aperiam ea.
                </p>   
            </div>  
            <div className="blockBtn">
            <button className="btnLi"><Link to="/lessonReact26" className='li'>Знакомство React</Link></button>
            <button className="btnLi"><Link to="/lessonReact27" className='li'>React. Components, JSX.</Link></button>
            <button className="btnLi"><Link to="/lessonReact28" className='li'>React. Props</Link></button>
            <button className="btnLi"><Link to="/lessonReact29" className='li'>React. Events an State</Link></button>
            <button className="btnLi"><Link to="/lessonReact30" className='li'>React. Routing.</Link></button>
            </div>
        </div>
    );
};

export default lessonReactJs;