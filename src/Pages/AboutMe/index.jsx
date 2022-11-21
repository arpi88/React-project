import "./styles.css";
export const AboutMe = () => {
  return (
    <div className="about-me-div">
      <h1 className="about-me"> About Me</h1>
      <div className="info-div">
        <h2 className="name-last"> Hakobyan Arpine </h2>

        <p className="p1">
          Experienced JavaScript Developer. Demonstrated success developing a
          variety of software systems while taking on increasing responsibility
          for analysis, design, implementation, and deployment tasks.
        </p>
        <div className="skills-div">
          <p className="skills">Skills</p>
          <p className="skills-text">
            HTML, CSS, JavaScript, XML, JSON, ReactJs, Bootstrap, Scss.
          </p>
        </div>
        <div className="exp-div">
          <p className="exp">Experience</p>
          <p className="workplace">
            Add the workplace <span className="span"> Feb 2022 - present</span>
          </p>
          <p className="position"> Software Engineer Web Platform</p>
          <ul>
            <li>
              Implement internal web Application to support development teams,
            </li>
            <li>
              Design and implement features to meet requirements and business
              goals,
            </li>
            <li>
              Write clean, and reusable code and participate in the code review
              process.
            </li>
            <li>Optimizde application for maximum speed and scalability</li>
          </ul>
        </div>
        <div className="education-div">
          <p className="education">Education</p>
          <p className="univercity">
            Armenian State University, Yerevan, Armenia
          </p>
          <p className="univercity-date">Sep 2005 - Jul 2009</p>
        </div>
      </div>
    </div>
  );
};
