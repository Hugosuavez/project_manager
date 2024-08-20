import { ProjectForm } from "./ProjectForm";
import { IProject } from "./models/Project";
import { useState } from "react";


export default function App() {

  const [project, setProject] = useState<IProject | null>(null)
  
  console.log(project)
  
  return (
    <main className="flex flex-col">
      <header className="flex h-24 bg-light-green">
        <img src="/logo.png" height={64} className="h-16 m-auto" />
      </header>
      <ProjectForm setProject={setProject} />
    </main>
  );
}
