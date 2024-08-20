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
    projectStatus: ""
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
        projectStatus: 'Incomplete'
      });
    }
  };

  return (
    <section className="mx-4">
      <form
        action=""
        onSubmit={handleFormSubmit}
        className="mx-auto my-8 flex max-w-sm flex-col space-y-2 rounded-xl border-b-2 border-l border-r-2 border-t border-green bg-light-green px-8 py-8 shadow-lg"
      >
        <label className="text-sm">Project Name*</label>
        <input
          type="text"
          maxLength={25}
          className="mx-1 px-1 hover:bg-slate-200 focus:bg-slate-200"
          value={formInputs.name}
          onChange={(e) =>
            setFormInputs({ ...formInputs, name: e.target.value })
          }
        />
        {invalidInputs.name ? (
          <p className="text-center text-xs text-red-600">
            {invalidInputs.name}
          </p>
        ) : null}

        <label className="text-sm">Description*</label>
        <input
          type="text"
          maxLength={75}
          className="mx-1 px-1 hover:bg-slate-200 focus:bg-slate-200"
          value={formInputs.description}
          onChange={(e) =>
            setFormInputs({ ...formInputs, description: e.target.value })
          }
        />
        {invalidInputs.description ? (
          <p className="text-center text-xs text-red-600">
            {invalidInputs.description}
          </p>
        ) : null}

        <label className="text-sm">Start Date*</label>
        <input
          type="date"
          className="mx-1 px-1 hover:bg-slate-200 focus:bg-slate-200"
          min={new Date().toISOString().split("T")[0]}
          value={formInputs.startDate}
          onChange={(e) =>
            setFormInputs({ ...formInputs, startDate: e.target.value })
          }
        />
        {invalidInputs.startDate ? (
          <p className="text-center text-xs text-red-600">
            {invalidInputs.startDate}
          </p>
        ) : null}
        <label className="text-sm">Project Type*</label>
        <select
          name=""
          id=""
          className="mx-1 px-1 hover:bg-slate-200 focus:bg-slate-200"
          onChange={(e) =>
            setFormInputs({ ...formInputs, projectType: e.target.value })
          }
        >
          <option value="">none</option>
          <option value="Business">Business</option>
          <option value="Pleasure">Pleasure</option>
        </select>
        {invalidInputs.projectType ? (
          <p className="text-center text-xs text-red-600">
            {invalidInputs.projectType}
          </p>
        ) : null}
        <br />
        <button className="rounded-full border-b-2 border-l border-r-2 border-t border-green-600 px-4 py-1 text-sm font-semibold text-green-600 hover:border-transparent hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
          Create Project
        </button>
      </form>
      <p className="mx-auto my-8 flex max-w-sm flex-col space-y-2 rounded-xl border-b-2 border-l border-r-2 border-t border-green bg-light-green px-8 py-8 shadow-lg">
        Fields marked with an asterix are required
      </p>
    </section>
  );
};
