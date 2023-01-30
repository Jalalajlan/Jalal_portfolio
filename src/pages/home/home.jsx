import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../images/jalal_profile.jpg";
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
          <h1 data-text="I'm Jalal, a Software Engineer">
            I'm Jalal, a Software Engineer
          </h1>
          <p className="main-section__left__subtitle">
            Passionate about software development and eager to focus on learning
            and developing computer programming skills and provide mindful
            insights in the field of computer science. Have gained a decent
            knowledge in topics such #web-development #mobile-development.
          </p>
          <button>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1IzMMuq3OJc8byT9yCWvWvvV0mx4v0ic2/view?usp=share_link"
              rel="noreferrer"
            >
              View My Resume
            </a>
          </button>
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
