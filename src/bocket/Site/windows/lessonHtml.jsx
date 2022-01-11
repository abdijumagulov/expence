import React from 'react';
import { Link } from 'react-router-dom';
const LessonHtml = () => {
    return (
        <div className='body'>
            <h1 className="h1">
                Уроки по Html, иди четка по плану и тогда будет больше ефективности.
            </h1>
            <div className="blockDoc">
                <h3 className='h3'>Немного про Html</h3>
                <p className="prg">
                HTML – это сокращение от Hyper Text Markup Language (язык разметки гипертекста). С помощью этого языка производится разметка содержания веб-сайта. То есть, с помощью HTML разработчик описывает заголовки на веб-страничке, где начинается и заканчивается абзац текста, рисунки, ссылки, видео и многие другие элементы сайта.
                </p>   
            </div>  
            <div className="blockBtn">
            <button className="btnLi"><Link to="/lesson" className='li'>Как работает интернет.Создание первой HTML страницы</Link></button>
            <button className="btnLi"><Link to="/lesson2" className='li'>Теги для разметки текста</Link></button>
            <button className="btnLi"><Link to="/lesson3" className='li'>Теги для разметки текста. Часть-2. Списки</Link></button>
            <button className="btnLi"><Link to="/lesson4" className='li'>Вставка изображений</Link></button>
            <button className="btnLi"><Link to="/lesson5" className='li'>Ссылки</Link></button>
            <button className="btnLi"><Link to="/lesson6" className='li'>Таблицы</Link></button>
            <button className="btnLi"><Link to="/lesson7" className='li'>Формы</Link></button>
            <button className="btnLi"><Link to="/lesson8" className='li'>Еще несколько важных тегов</Link></button>
            </div>      
        </div>
    );
};

export default LessonHtml;