import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../images/profile.jpg";
import SocialIcon from "../../components/social-icon/SocialIcon";
import { icons } from "./icons";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="socials">
        {icons.map((icon) => (
          <div key={icon.urlLink}>
            <SocialIcon IconName={icon.name} urlLink={icon.urlLink} />
          </div>
        ))}
      </div>
      <div className="main-section">
        <div className="main-section__left">
          <h3>Hi there!</h3>
          <h1 data-text="I'm a Software Engineer">I'm a Software Engineer</h1>
          <p>
            Welcome to my portofolio. I’m Jalal Ajlan, final year software
            engineering student in UTM Malaysia.
          </p>
          <br />
          <p>
            Passionate about software development and eager to focus on learning
            and developing computer programming skills and provide mindful
            insights in the field of computer science. Have gained a decent
            knowledge in topics such #webdevelopment #mobiledevlopment
            #data-structures #java.
          </p>
        </div>
        <div className="main-section__right">
          <div className="rounded"></div>
          <div>
            <img src={Profile} className="profile-image" alt="main profile" />
          </div>
          <div className="rounded"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
