import React from 'react';
import "./css/lessonHtml.scss";
import { Link } from 'react-router-dom';
const lessonGit = () => {
    return (
        <div className='body'>
            <h1 className="h1">
                Уроки по Git, иди четка по плану и тогда будет больше ефективности.
            </h1>
            <div className="blockDoc">
                <h3 className="h3">
                Небольшая документация про Git.    
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
            <button className="btnLi"><Link to="/lessonGit31" className='li'>Git</Link></button>
            <button className="btnLi"><Link to="/lessonGit32" className='li'>Git. Продолжаем знакомство с гитом</Link></button>
            <button className="btnLi"><Link to="/lessonGit33" className='li'>Git. Команды для работы с репозиторием</Link></button>
            <button className="btnLi"><Link to="/lessonGit34" className='li'>Git. Команды для работы с удаленным репозиторием</Link></button>
            <button className="btnLi"><Link to="/lessonGit35" className='li'>Знакомство с БЭМ. </Link></button>
            </div>      
        </div>
    );
};

export default lessonGit;