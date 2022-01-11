import React from 'react';
import "./css/lessonHtml.scss"
import { Link } from 'react-router-dom';
const lessonCss = () => {
    return (
        <div className='body'>
        <h1 className="h1">
            Уроки по Css, иди четка по плану и тогда будет больше ефективности.
        </h1>
        <div className="blockDoc">
            <h3 className="h3">
            Небольшая документация про Css.    
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
        <button className="btnLi"><Link to="/lessonCss8" className='li'>Знакомство с CSS</Link></button>
        <button className="btnLi"><Link to="/lessonCss9" className='li'>Селекторы</Link></button>
        <button className="btnLi"><Link to="/lessonCss10" className='li'>Наследование</Link></button>
        <button className="btnLi"><Link to="/lessonCss11" className='li'>Оформление текста</Link></button>
        <button className="btnLi"><Link to="/lessonCss12" className='li'>Поля, отступы, границы</Link></button>
        <button className="btnLi"><Link to="/lessonCss13" className='li'>Работа с фоном</Link></button>
        <button className="btnLi"><Link to="/lessonCss14" className='li'>Flex</Link></button>
        <button className="btnLi"><Link to="/lessonCss15" className='li'>Преобразования, переходы, анимация</Link></button>
        <button className="btnLi"><Link to="/lessonCss16" className='li'>CSS счетчики</Link></button>
        <button className="btnLi"><Link to="/lessonCss17" className='li'>Grid</Link></button>

        </div>      
    </div>
    );
};

export default lessonCss;