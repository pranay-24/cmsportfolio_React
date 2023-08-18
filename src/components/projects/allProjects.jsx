import React,{useEffect,useState} from "react";

import Project from "./project";



import "./styles/allProjects.css";

const AllProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        // Fetch social media links from the JSON file
        fetch("http://localhost:5173/data.json")
          .then((response) => response.json())
          .then((data) => {
           
          
            setProjects(data.projects);
           
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

	return (
		<div className="all-projects-container">
			{projects && projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						// logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;