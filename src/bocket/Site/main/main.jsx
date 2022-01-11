import "./main.scss"
import Section from "./sections/section"
// import SocBlock from "./sections/socBlock"
import BtnMenu from "./sections/btnMenu"
function Main() {
 

  return (
    <main className="main">
      <h4 className="h4_main">
        Чему мы можем вас научить.
      </h4>
      <img className="imgTeam" src="https://вебджем.рф/800/600/https/plusiminusi.ru/wp-content/uploads/2017/02/iprog166.jpg" alt="" />
      <p className="prg_main">
        Если ты не знаеш с какого языка начать то сначала
        ознакомся небольшой информацией об языках.
      </p>
      <BtnMenu/>
      <Section name="Html" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6G_LlHn9gOR_1GbX6sZpWwIZ7Dl9rKcCexw&usqp=CAU" prg="HTML (Hypertext Markup Language) - это код, который используется для структурирования и отображения веб-страницы и её контента. Например, контент может быть структурирован внутри множества параграфов, маркированных списков или с использованием изображений и таблиц данных." link="/lessonHtml"/>
      <Section name="Css" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-oIpN0ZXDoxXzoGGQsoMXf7ECNIH_E08eQ&usqp=CAU" prg="CSS (Cascading Style Sheets) — это код, который вы используете для стилизации вашей веб-страницы." link="/lessonCss"/>
      <Section name="Js" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhJlTMKGEP32O9dXs3Laz-XYbL5gynMI08A&usqp=CAU" prg="JS /ˈdʒeɪ. ɛs./) — мультипарадигменный язык программирования. ... JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам." link="/lessonJs"/>
      <Section name="React" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNvkEASLqDoCuV_0p4zX7k-ADWkv-q-lCcg&usqp=CAU" prg="React (иногда React. js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций." link="/lessonReactJs"/>
      <Section name="Sass" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFLIg5ZkhwpDs5FFUr57ShsNwb9p3u85MVQ&usqp=CAU" prg="SCSS — диалект языка SASS. ... SASS это язык похожий на HAML (весьма лаконичный шаблонизатор), но предназначенный для упрощения создания CSS-кода. Проще говоря, SASS это такой язык, код которого специальной ruby-программой транслируется в обычный CSS код." link="/lessonScss"/>
      <Section name="Git" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJflRVfd9wk80MKCV4kTq-OoHehNMG8HJNLA&usqp=CAU" prg="Git — система управления версиями с распределенной архитектурой. В отличие от некогда популярных систем вроде CVS и Subversion (SVN), где полная история версий проекта доступна лишь в одном месте, в Git каждая рабочая копия кода сама по себе является репозиторием." link="/lessonGit"/>
      
    </main>
  );
}

export default Main