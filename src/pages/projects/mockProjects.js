import servicifyWebApp from "../../images/servicify.png";
import servicifyMobileApp from "../../images/servicify-application.png";
import portfolio from "../../images/portofolio-app.png";
import ExpensesTracker from "../../images/expenses-tracker-2.png";

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
    imageSource: ExpensesTracker,
    description:
      "in this project, I utilized MERN Technologies as well as Redux for state management. user shall be able to track his expenses and web app summarize total spending and balance.",
    url: "https://imaginative-douhua-5aa328.netlify.app/",
    repoUrl: "https://github.com/Jalalajlan/expensesTracker",
  },
  {
    imageSource: portfolio,
    description:
      "My portfolio website developed with Reactjs and css framework sass",
    url: "https://stellar-hamster-84075b.netlify.app/",
    repoUrl: "https://github.com/Jalalajlan/Jalal_portfolio",
  },
];
