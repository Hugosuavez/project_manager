import { IProject } from "./models/Project";


export const ProjectDetails = ({
    project,
    setProject,
  }: {
    project: IProject;
    setProject: React.Dispatch<React.SetStateAction<IProject | null>>;
  }) => {

    const createNewProject = () => {
        setProject(null)
    }

    return (
        <section>
    <p>Your Projects</p>
    <button onClick={createNewProject}>Create New Project</button>
    <article>
        <p>Project Name{project.name}</p>
        <p>Description: {project.description}</p>
        <p>Type: {project.projectType}</p>
        <p>Start date: {project.startDate}</p>
    </article>
    </section>
)
}