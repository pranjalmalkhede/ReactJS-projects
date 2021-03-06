import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
import Google from "../assets/google.gif";
import AvatarImg from '../assets/pranjal.png'

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/* <Link>About</Link>
          <Link>Store</Link> */}
        </div>
        <div className="home__headerRight">
          <Link>Gmail</Link>
          <Link>Images</Link>
          <AppsIcon />
          <Avatar src={AvatarImg} alt="pranjal malkhede" />
        </div>
      </div>

      <div className="home__body"> 
        <img src={Google} alt="google logo"/>
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
