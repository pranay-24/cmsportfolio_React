import React, { useEffect ,useState} from "react";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";


import "./styles/contact.css";

const Contact = (props) => {
  const [aboutMe, setAboutMe] = useState({});
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  useEffect(() => {
    // Fetch social media links from the JSON file
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setSocialMediaLinks(data.socialMediaLinks);
        // console.log(data.socialMediaLinks)
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
        <Navbar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title bold">
              Let's Get in Touch: Ways to Connect with Me
            </div>

            <div className="subtitle contact-subtitle light">
              Thank you for your interest in getting in touch with me. I welcome
              your feedback, questions, and suggestions. If you have a specific
              question or comment, please feel free to email me directly at
              &nbsp; <a href={`mailto:${aboutMe.email}`}>{aboutMe.email}</a>. I
              make an effort to respond to all messages within 24 hours,
              although it may take me longer during busy periods. Alternatively,
              you can use the contact form on my website to get in touch. Simply
              fill out the required fields and I'll get back to you as soon as
              possible. Finally, if you prefer to connect on social media, you
              can find me on{" "}
              {getLinksByPlatform("instagram").map((link) => {
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                );
              })}

              
              . I post regular updates and engage with my followers there, so
              don't hesitate to reach out. Thanks again for your interest, and I
              look forward to hearing from you!
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
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

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
