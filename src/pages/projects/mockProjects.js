import servicifyWebApp from "../../images/servicify.png";
import servicifyMobileApp from "../../images/servicify-application.png";
import portfolio from "../../images/portofolio-app.png";

export const projects = [
  {
    imageSource: servicifyWebApp,
    description:
      "Servicify web-based application community local services website where User can post to the platform to request services an proposals will be made to that post directly for accepting and rejecting offers from other users, this project was developed with MERN stack.",
    url: "http://servicfy.herokuapp.com/",
    repoUrl:
      "https://github.com/App-development-SCSJ3104-Group-project/Servicify",
  },
  {
    imageSource: servicifyMobileApp,
    description:
      "Servicify mobile application: the same notion with web-based version but it is mobile based application, this project was developed with flutter for the frontend and MongoDB and Nodejs for backend.",
    url: "https://drive.google.com/drive/folders/14ZhAvcLoeEHZX7LAkEr69rqDW40u4wEe?usp=sharing",
    repoUrl: "https://github.com/Elraqab-Organization/eService_app",
  },
  {
    imageSource: portfolio,
    description:
      "Rubric management website: User can create customized rubric with his own preference and can receive notification about any changes to the rubric, developed with Java JSP with factory design pattern and observer design pattern.",
    url: "https://stellar-hamster-84075b.netlify.app/",
    repoUrl: "https://github.com/Jalalajlan/Jalal_portfolio",
  },
];
