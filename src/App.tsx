import { ProjectDetails } from "./ProjectDetails";
import { ProjectForm } from "./ProjectForm";
import { IProject } from "./models/Project";
import { useState } from "react";

export default function App() {
  const [project, setProject] = useState<IProject | null>(null);

  return (
    <main className="flex flex-col">
      <header className="flex h-24 bg-light-green">
        <h1 className="m-auto py-5 h-16 p-1">Project Manager</h1>
      </header>
      {project ? (
        <ProjectDetails project={project} setProject={setProject} />
      ) : (
        <ProjectForm setProject={setProject} />
      )}
    </main>
  );
}
