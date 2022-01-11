import "./headerStyle.scss"
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="Header">
      <div className="topBg">
        <p className="logo">BOWL</p>
         <nav className="navBar">
          <Link className="li" to="/">Главное</Link>
          <Link className="li" to="lessonHtml">Html</Link>
          <Link className="li" to="lessonCss">Css</Link>
          <Link className="li" to="lessonJs">Js</Link>
          <Link className="li" to="lessonReactJs">ReactJs</Link>
          <Link className="li" to="lessonScss">Sass</Link>
          <Link className="li" to="lessonGit">Git</Link>
        </nav>
      </div>

      <h1 className="h1_header">
        Научись кодить ефективно быстро и бесплатно.
      </h1>
      <strong className="strongH1">Видео уроки документации, советы, и готовые коды.</strong>
      <button className="startBtn"><Link className="li" to="/lessonHtml">Начать сейчас</Link></button>
      <p className="prgBigLogo">BL</p>
    </header>
  );
}

export default Header;