import React from 'react';
import "./scss/btnMenu.scss"
import { Link } from 'react-router-dom';
const btnMenu = () => {
    return (
        <div className="menu">
            <h2 className="h2">Выбери что ты хочешь изучать.</h2>
            <div className="blockMenu">
                <button className="btn"><Link className='li' to="/lessonHtml">Опщий Html</Link></button>
                <button className="btn"><Link className='li' to="/lessonCss">Опщий Css</Link></button>
                <button className="btn"><Link className='li' to="/lessonJS">Основы Js</Link></button> 
                <button className="btn"><Link className='li' to="/lessonScss">ОСновы Scss</Link></button>
                <button className="btn"><Link className='li' to="/lessonReactJs">Основы ReactJs</Link></button>
                <button className="btn"><Link className='li' to="/lessonGit">Основы Git</Link></button>
            </div>
        </div>
    );
};

export default btnMenu;