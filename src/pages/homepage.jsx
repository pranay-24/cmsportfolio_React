import React, { useState, useEffect } from "react";
//import { Helmet } from "react-helmet";

// import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillCard from "../components/SkillCard";
import Logo from "../components/common/logo.jsx";
//import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
// import {
// 	faTwitter,
// 	faGithub,
// 	faStackOverflow,
// 	faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/common/navbar";

// import Logo from "../components/common/logo";
// import Footer from "../components/common/footer";

// import Article from "../components/homepage/article";
// import Works from "../components/homepage/works";
// import AllProjects from "../components/projects/allProjects";

// import INFO from "../data/user";
// import SEO from "../data/seo";
// import myArticles from "../data/articles";

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

  // useEffect(() => {
  // 	window.scrollTo(0, 0);
  // }, []);

  // useEffect(() => {
  // 	const handleScroll = () => {
  // 		let scroll = Math.round(window.pageYOffset, 2);

  // 		let newLogoSize = 80 - (scroll * 4) / 10;

  // 		if (newLogoSize < oldLogoSize) {
  // 			if (newLogoSize > 40) {
  // 				setLogoSize(newLogoSize);
  // 				setOldLogoSize(newLogoSize);
  // 				setStayLogo(false);
  // 			} else {
  // 				setStayLogo(true);
  // 			}
  // 		} else {
  // 			setLogoSize(newLogoSize);
  // 			setStayLogo(false);
  // 		}
  // 	};

  // 	window.addEventListener("scroll", handleScroll);
  // 	return () => window.removeEventListener("scroll", handleScroll);
  // }, [logoSize, oldLogoSize]);

  // const currentSEO = SEO.find((item) => item.page === "home");

  // const logoStyle = {
  // 	display: "flex",
  // 	position: stayLogo ? "fixed" : "relative",
  // 	top: stayLogo ? "3vh" : "auto",
  // 	zIndex: 999,
  // 	border: stayLogo ? "1px solid white" : "none",
  // 	borderRadius: stayLogo ? "50%" : "none",
  // 	boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  // };

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

                <div className="light">
                  {aboutMe.description}
                </div>
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
      </div>
    </div>
  );
};

export default Homepage;
