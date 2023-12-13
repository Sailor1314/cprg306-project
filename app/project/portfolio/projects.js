
import React from 'react';

const projects = [
    {
        title: "Project 1",
        description: "This is a brief description of Project 1...",
        technologies: ["React", "Node.js", "CSS"],
        link: "http://link-to-project1.com",
        code: "http://link-to-project1-code.com"
    },
];

const Projects = () => {
    return (
        <div className={styles.container}>
            <h1>My Projects</h1>
            <div className={styles.projectsList}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p>Technologies Used: {project.technologies.join(", ")}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">View Code</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
