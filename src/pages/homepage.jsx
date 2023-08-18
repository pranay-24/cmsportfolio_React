import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillCard from "../components/SkillCard";
import Logo from "../components/common/logo.jsx";
import Footer from "../components/common/footer";


import Navbar from "../components/common/navbar";



import "./styles/homepage.css";

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);
  const [skills, setSkills] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    // Fetch social media links from the JSON file
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setSocialMediaLinks(data.socialMediaLinks);
        // console.log(data.socialMediaLinks)
        setSkills(data.skills);
        setAboutMe(data.aboutMe);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getLinksByPlatform = (platform) => {
    return socialMediaLinks.filter(
      (link) => link.name.toLowerCase() === platform
    );
  };

 

  return (
    <div>
      <div className="page-content">
        <Navbar active="home" />
        {/* <div>
        <h2>Social media links</h2>
        {socialMediaLinks && socialMediaLinks.map(link=>{
            return <a key ={link.name} href={link.url}>{link.name}</a>
        })}
        </div> */}
        <div className="page-content">
          <div className="content-wrapper">
            <div className="about-logo-container">
              <div className="about-logo">
                <Logo width={46} />
              </div>
            </div>
            <div className="about-container">
              <div className="about-right-side">
                <div className="bold">{aboutMe.title}</div>

                <div className="light">{aboutMe.description}</div>
              </div>
            </div>

            <div className="about-left-side">
              <div className="about-image-container">
                <div className="about-image-wrapper">
                  <img src="image1.jpg" alt="about" className="about-image" />
                </div>
              </div>

              <div className="about-socials">
                {getLinksByPlatform("linkedin").map((link) => {
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin homepage-social-icon" />
                    </a>
                  );
                })}

                {getLinksByPlatform("github").map((link) => {
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github homepage-social-icon"></i>
                    </a>
                  );
                })}

                {getLinksByPlatform("instagram").map((link) => {
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram homepage-social-icon"></i>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <h2>Software Skills</h2>
        <div className="skill-cards">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
