import React from 'react';
import "./scss/section1.scss";
import { Link } from 'react-router-dom';
const section = (props) => {
    return (
        <section className="section1">
            <h3 className="h3sect">
                Для кого и что такое {props.name}
            </h3>
            <div className="blockCont">
                <img src={props.img} alt="" className="imgMore" />
                <div className="blockMore">
                    <p className="prgMore">
                        {props.prg}
                    </p>
                    <button className="btnContun">
                        <Link className='link' to={props.link}>Начать сейчас</Link>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default section;