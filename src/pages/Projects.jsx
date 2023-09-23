import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import projects from "../lib/projects";
import techstacks from "../lib/techstack";
import { useState } from "react";

export default function ProjectsPage() {
  const colors = useOutletContext();
  const [projectDetails, setProjectDetails] = useState(0);

  return (
    <div className="projects container">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__list">
        {projects.map((project, i) => (
          <div key={i} className="project">
            <div>
              <h2 className="project__name accent">{project.name}</h2>
              <p className="project__desc">{project.desc}</p>
              <div className="project__links">
                <Link
                  className="project__link"
                  to={project.demo}
                  target={project.demo ? "_blank" : null}
                >
                  Demo
                </Link>
                <Link
                  className="project__link"
                  to={project.repo}
                  target="_blank"
                >
                  Repo
                </Link>
                <button
                  className="project__link"
                  onClick={() =>
                    setProjectDetails((state) => (state === i ? null : i))
                  }
                >
                  Tech Stack
                </button>
              </div>
            </div>
            {projectDetails === i && (
              <div className="project__details">
                <div className="project__techstack">
                  {project.techstack.map((item, index) =>
                    colors ? (
                      <div key={index}>{techstacks[`${item}drk`]}</div>
                    ) : (
                      <div key={index}>{techstacks[item]}</div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
