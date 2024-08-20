import { IProject } from "./models/Project";

export const ProjectDetails = ({
  project,
  setProject,
}: {
  project: IProject;
  setProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}) => {
  const createNewProject = () => {
    setProject(null);
  };

  return (
    <section className="flex flex-col mx-auto">
      <p className="my-2 ml-2 py-4 px-4 max-w-xs text-green-800 border-b-2 border-r-2 border-green font-semibold shadow-lg">Project Details</p>
      <article className="min-h-96 min-w-72 my-2 ml-2 py-4 px-4 max-w-xs border-2 rounded-lg border-green">
        <p className="mb-2 font-semibold">{project.name}</p>
        <br />
        <p>Description: {project.description}</p>
        <br />
        <p>Project Type: {project.projectType}</p>
        <br />
        <p>Start date: {project.startDate}</p>
      </article>
      <button onClick={createNewProject} className="px-2 mx-auto text-sm text-green-600 font-semibold rounded-full border border-green-600 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Start New Project</button>
    </section>
  );
};
