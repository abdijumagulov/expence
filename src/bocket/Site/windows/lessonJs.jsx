import React from 'react';
import "./css/lessonHtml.scss";
import { Link } from 'react-router-dom';
const lessonJs = () => {
    return (
        <div className='body'>
            <h1 className="h1">
                Уроки по Js, иди четка по плану и тогда будет больше ефективности.
            </h1>
            <div className="blockDoc">
                <h3 className="h3">
                Небольшая документация про Js.    
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
            <button className="btnLi"><Link to="/lessonJs18" className='li'>Знакомство с Js</Link></button>
            <button className="btnLi"><Link to="/lessonJs19" className='li'>Переменные и константы?</Link></button>
            <button className="btnLi"><Link to="/lessonJs20" className='li'>switch, логические операции, массивы</Link></button>
            <button className="btnLi"><Link to="/lessonJs21" className='li'>Циклы</Link></button>
            <button className="btnLi"><Link to="/lessonJs22" className='li'>Функции</Link></button>
            <button className="btnLi"><Link to="/lessonJs23" className='li'>Dom</Link></button>
            <button className="btnLi"><Link to="/lessonJs24" className='li'>Работа со стилями. Введение в События.</Link></button>
            <button className="btnLi"><Link to="/lessonJs25" className='li'>NavBar</Link></button>
            
            </div>      
        </div>
    );
};

export default lessonJs;