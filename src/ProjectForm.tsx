import { useState } from "react";
import { IProject } from "./models/Project";
import { IInvalidInputs } from "./models/Project";

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

  const [invalidInputs, setInvalidInputs] = useState<IInvalidInputs>({});

  const validateForm = (formInputs: IProject) => {
    const currentInvalidInputs: IInvalidInputs = {};
    if (!formInputs.name) {
      currentInvalidInputs.name = "Project name is required";
    }
    if (!formInputs.description) {
      currentInvalidInputs.description = "Description is required";
    }
    if (!formInputs.startDate) {
      currentInvalidInputs.startDate = "Start date is required";
    }
    if (!formInputs.projectType) {
      currentInvalidInputs.projectType = "Project type is required";
    }
    return currentInvalidInputs;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm(formInputs);

    setInvalidInputs(errors);
    
    if (Object.keys(errors).length === 0) {
      setProject({
        name: formInputs.name,
        description: formInputs.description,
        startDate: formInputs.startDate,
        projectType: formInputs.projectType,
      });
    }
  };



  return (
    <section className="mx-4">
      <form
        action=""
        onSubmit={handleFormSubmit}
        className="flex flex-col mx-auto my-8 py-8 px-8 max-w-sm space-y-2 bg-light-green border-green border-r-2 border-l border-t border-b-2 rounded-xl shadow-lg"
      >
        <label className="text-sm">Project Name*</label>
        <input
          type="text"
           className="mx-1 px-1 focus:bg-slate-200 hover:bg-slate-200"
          value={formInputs.name}
          onChange={(e) =>
            setFormInputs({ ...formInputs, name: e.target.value })
          }
        />
        {invalidInputs.name ? (
          <p className="text-red-600 text-center text-xs">
            {invalidInputs.name}
          </p>
        ) : null}

        <label className="text-sm">Description*</label>
        <input
          type="text"
          className="mx-1 px-1 focus:bg-slate-200 hover:bg-slate-200"
          value={formInputs.description}
          onChange={(e) =>
            setFormInputs({ ...formInputs, description: e.target.value })
          }
        />
        {invalidInputs.description ? (
          <p className="text-red-600 text-center text-xs">
            {invalidInputs.description}
          </p>
        ) : null}

        <label className="text-sm">Start Date*</label>
        <input
          type="date"
          className="mx-1 px-1 focus:bg-slate-200 hover:bg-slate-200"
          min={new Date().toISOString().split("T")[0]}
          value={formInputs.startDate}
          onChange={(e) =>
            setFormInputs({ ...formInputs, startDate: e.target.value })
          }
        />
        {invalidInputs.startDate ? (
          <p className="text-red-600 text-center text-xs">
            {invalidInputs.startDate}
          </p>
        ) : null}
        <label className="text-sm">Project Type*</label>
        <select
          name=""
          id=""
          className="mx-1 px-1 focus:bg-slate-200 hover:bg-slate-200"
          onChange={(e) =>
            setFormInputs({ ...formInputs, projectType: e.target.value })
          }
        >
          <option value="">none</option>
          <option value="Business">Business</option>
          <option value="Pleasure">Pleasure</option>
        </select>
        {invalidInputs.projectType ? (
          <p className="text-red-600 text-center text-xs">
            {invalidInputs.projectType}
          </p>
        ) : null}
        <br />
        <button className="px-4 py-1 text-sm text-green-600 font-semibold border-b-2 border-r-2 border-l border-t rounded-full border-green-600 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Create Project</button>
      </form>
      <p className="flex flex-col mx-auto my-8 py-8 px-8 max-w-sm space-y-2  bg-light-green border-green border-r-2 border-l border-t border-b-2 rounded-xl shadow-lg">
        Fields marked with an asterix are required
      </p>
    </section>
  );
};
