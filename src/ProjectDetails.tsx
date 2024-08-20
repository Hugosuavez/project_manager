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
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </article>
    </section>
)
}