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
    <section className="mx-auto flex flex-col">
      <p className="my-2 ml-2 max-w-xs border-b-2 border-r-2 border-green px-4 py-4 font-semibold text-green-800 shadow-lg">
        Project Details
      </p>
      <article className="my-2 ml-2 min-h-96 min-w-72 max-w-xs rounded-lg border-2 border-green px-4 py-4 md:w-auto">
        <p className="mb-2 font-semibold underline">{project.name}</p>
        <br />
        <p>{project.description}</p>
        <br />
        <p className="italic">Project Type: {project.projectType}</p>
        <br />
        <p className="italic">Start date: {project.startDate}</p>
      </article>
      <button
        onClick={createNewProject}
        className="mx-auto mt-5 rounded-full border border-green-600 px-2 text-sm font-semibold text-green-600 hover:border-transparent hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      >
        Start New Project
      </button>
    </section>
  );
};
