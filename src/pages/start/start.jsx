import React from 'react';
import './start.scss';
import Navbar from './../../components/navbar/Navbar';
import Profile from "../../images/profile.jpg";
import Eclipse from "../../images/eclipseBig.png";
import EclipseSmall from "../../images/eclipseSmall.png";
import OrnamentBin from "../../images/OrnamentBin.png";
import OrnamentRounded from "../../images/OrnamentRounded.png";
import OrnamentSquare from "../../images/OrnamentSquare.png";
import OrnamentTie from "../../images/OrnamentTie.png";
import { Intro } from './data';

const Start = () => {
    return (
        <div>
            <Navbar />
           <div className="intro">
            <article className="intro__article">
                <p className="intro__article__welcome">{Intro[0].title}</p>
                <h3 className="intro__article__job">{Intro[0].job}</h3>
                <p className="intro__article__description">{Intro[0].description}</p>
            </article>
            <div className="intro__profile">
                <img className="intro__profile__image" src={Profile} alt="A profile image" />
                <img className="intro__profile__ornamentsquare" src={OrnamentSquare} alt="pattern3" />
                <img className="intro__profile__eclipse" src={Eclipse} alt="eclipse pattern" />
                <img className="intro__profile__eclipsesmall" src={EclipseSmall} alt="small eclipse" />
                <img className="intro__profile__ornamentrounded" src={OrnamentRounded} alt="pattern2" />
                <img className="intro__profile__ornamentbin" src={OrnamentBin} alt="pattern4" />
                <img className="intro__profile__ornamenttie" src={OrnamentTie} alt="pattern5" />
            </div>
           </div>
        </div>
    );
};


export default Start;