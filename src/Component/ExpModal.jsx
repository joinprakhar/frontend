import React from "react";
import elabHome from "../assets/prj-assets/elab-reg.png";
import compKare from "../assets/prj-assets/compliancecare.png";
import astroImg from "../assets/prj-assets/astroHome.png";
import talent from "../assets/prj-assets/talentimg.png";

export const Comp1 = () => {
  return (
    <div
      className="company-cont-modal"
      style={{ color: "black", cursor: "default" }}
    >
      <div className="company-details">
        <span className="comp-name">ItDose Infosystem</span>
        <span className="comp-post">Software Developer</span>
      </div>
      <div className="company-profile" style={{ color: "black" }}>
        <span>Noida, Uttar Pradesh</span>
        <span>August 2023 - Present</span>
      </div>
      <>
        <div className="company-responce">
          <span>Key Roles and Responsibility</span>
          <ul className="company-responce-role">
            <li>
              Developed Elabpro application form scratch, a software tailored
              for hospital labs, facilitating sample management, patient report
              generation, sample collection, dispatch reporting, and machine
              data retrieval.
            </li>
            <li>
              Utilized ReactJS, and JavaScript, and integrated REST APIs with
              Axios for seamless data communication.
            </li>
            <li>
              Constructed a scalable component library, incorporating API
              integration, form handling with Formik and Yup, routing, Redux
              Thunk, React PDF, and React Hooks.
            </li>
            <li>
              Tools used include ReactJS, Bootstrap, HTML/CSS, JavaScript, and
              Redux for state management.
            </li>
            <li>
              Gain 20+ clients in first month of product deployment and 95%
              satisfaction rate from them
            </li>
          </ul>
        </div>
        <div className="company-Projects-cont">
          <div className="company-Projects-S-cont" style={{ width: "100%" }}>
            <span>ElabPro</span>

            <ul>
              <li>
                A software tailored for hospital labs, facilitating sample
                management, patient report generation, sample collection,
                dispatch reporting, and machine data retrieval.
              </li>
              <li>
                Utilized ReactJS, and JavaScript, and integrated REST APIs with
                Axios for seamless data communication.
              </li>
              <li>
                Constructed a scalable component library, incorporating API
                integration, form handling with Formik and Yup, routing, Redux
                Thunk, React PDF, and React Hooks.
              </li>
              <li>
                Tools used include ReactJS, Bootstrap, HTML/CSS, JavaScript, and
                Redux for state management.
              </li>
            </ul>

            <a href="https://uat.elabpro.in" target="_blank">
              <button>
                Deployed Link
                <i class="fa fa-laptop" style={{ margin: "2px" }}></i>
              </button>
            </a>
          </div>
          <div className="company-Projects-img">
            <img src={elabHome} alt="" />
          </div>
        </div>
      </>
    </div>
  );
};

export const Comp2 = () => {
  return (
    <div className="company-cont-modal">
      <div className="company-details" style={{ color: "black" }}>
        <span className="comp-name">Infosyselite Technologies</span>
        <span className="comp-post">Front-End Developer</span>
      </div>
      <div className="company-profile" style={{ color: "black" }}>
        <span>Okhla, New Delhi </span>
        <span>Jan 2022 - July 2023</span>
      </div>
      <>
        <div className="company-responce">
          <span>Key Roles and Responsibility</span>
          <ul className="company-responce-role">
            <li>
              Implemented and maintained front-end web applications, resulting
              in a 20% reduction in page load speeds and conversion rates by
              utilizing modern web technologies such as React.js and best
              practices for user experience and accessibility.
            </li>
            <li>
              Worked with cross-functional teams to develop and execute on-time
              and on-budget projects and initiatives by effectively
              communicating project timelines, progress, and objectives{" "}
            </li>
            <li>
              Granted additional code review permissions after demonstrating
              strong attention to detail which led to a 25% decrease in code
              errors.
            </li>
            <li>
              Implemented and maintained front-end web applications, resulting
              in a 10% increase in website traffic and conversion rates. Major
              projects (Details on Second Page)
            </li>
          </ul>
        </div>
        <div className="company-Projects-cont">
          <div className="company-Projects-S-cont" style={{ width: "100%" }}>
            <span>ComplianceKare</span>

            <ul>
              <li>
                Tax-related web app for filling tax and related information.
              </li>
              <li>
                The technology used - MERN stack, featuring CRUD functions for
                managing blog posts
              </li>
            </ul>

            <a href="https://compliancekare.com/" target="_blank">
              <button>
                Deployed Link
                <i class="fa fa-laptop" style={{ margin: "2px" }}></i>
              </button>
            </a>
          </div>
          <div className="company-Projects-img">
            <img src={compKare} alt="" />
          </div>
        </div>
        <div className="company-Projects-cont">
          <div className="company-Projects-S-cont" style={{ width: "100%" }}>
            <span>Talent-Destination</span>

            <ul>
              <li>
                A software tailored for hospital labs, facilitating sample
                management, patient report generation, sample collection,
                dispatch reporting, and machine data retrieval.
              </li>
              <li>
                Utilized ReactJS, and JavaScript, and integrated REST APIs with
                Axios for seamless data communication.
              </li>
              <li>
                Constructed a scalable component library, incorporating API
                integration, form handling with Formik and Yup, routing, Redux
                Thunk, React PDF, and React Hooks.
              </li>
              <li>
                Tools used include ReactJS, Bootstrap, HTML/CSS, JavaScript, and
                Redux for state management.
              </li>
            </ul>

            <a href="https://talent-destination.com/" target="_blank">
              <button>
                Deployed Link
                <i class="fa fa-laptop" style={{ margin: "2px" }}></i>
              </button>
            </a>
          </div>
          <div className="company-Projects-img">
            <img src={talent} alt="" />
          </div>
        </div>
        <div className="company-Projects-cont">
          <div className="company-Projects-S-cont" style={{ width: "100%" }}>
            <span>Astrolense</span>

            <ul>
              <li>
                Developed astrology website with JavaScript and React,
                prioritizing user interaction.
              </li>
              <li>
                Implemented personalized horoscope features to enhance
                engagement.
              </li>
              <li>
                Ensured responsive design for seamless browsing across devices
              </li>
            </ul>

            <a href="https://www.astrolense.com/" target="_blank">
              <button>
                Deployed Link
                <i class="fa fa-laptop" style={{ margin: "2px" }}></i>
              </button>
            </a>
          </div>
          <div className="company-Projects-img">
            <img src={astroImg} alt="" />
          </div>
        </div>
      </>
    </div>
  );
};
