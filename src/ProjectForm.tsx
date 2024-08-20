import { useState } from "react";
import { IProject } from "./models/Project";

export const ProjectForm = ({
    setProject,
  }: {
    setProject: React.Dispatch<React.SetStateAction<IProject | null>>;
  }) => {

    const [formInputs, setFormInputs] = useState<IProject>({
        name: "",
        description: "",
        startDate: "",
        projectType: "",
      });

      const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
          setProject({
            name: formInputs.name,
            description: formInputs.description,
            startDate: formInputs.startDate,
            projectType: formInputs.projectType,
          });
        }
      
    return (
        <form action="" onSubmit={handleFormSubmit} className="flex flex-col mx-auto space-y-0.5 border-2 border-green">
            <label htmlFor="">Project Name</label>
            <input type="text" value={formInputs.name} onChange={(e) =>
            setFormInputs({ ...formInputs, name: e.target.value })
          }/>
            <label htmlFor="">Description</label>
            <input type="text" value={formInputs.description} onChange={(e) =>
            setFormInputs({ ...formInputs, description: e.target.value })
          }/>
            <label htmlFor="">Date</label>
            <input type="date" value={formInputs.startDate} onChange={(e) =>
            setFormInputs({ ...formInputs, startDate: e.target.value })
          }/>
            <label htmlFor="">Project Type</label>
            <select name="" id="" onChange={(e) =>
            setFormInputs({ ...formInputs, projectType: e.target.value })
          }>
                <option value="">none</option>
                <option value="Business">Business</option>
                <option value="Pleasure">Pleasure</option>
            </select>
            <button>Create Project</button>
        </form>
    )
}