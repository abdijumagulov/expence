import Header from "./header/headerSite";
import Main from "./main/main";
import { Link, Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import "./home.scss";
function Home() {

  return (
    <div className="Home">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default Home;