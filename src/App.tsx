import { ProjectDetails } from "./ProjectDetails";
import { ProjectForm } from "./ProjectForm";
import { IProject } from "./models/Project";
import { useState } from "react";

export default function App() {
  const [project, setProject] = useState<IProject | null>(null);

  return (
    <main className="flex flex-col">
      <header className="flex h-24 bg-light-green">
        <img src="/logo.png" height={64} className="h-16 m-auto" />
      </header>
      {project ? (
        <ProjectDetails project={project} setProject={setProject} />
      ) : (
        <ProjectForm setProject={setProject} />
      )}
    </main>
  );
}
