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
    console.log(errors);
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
    <form
      action=""
      onSubmit={handleFormSubmit}
      className="flex flex-col mx-auto space-y-0.5 border-2 border-green"
    >
      <label htmlFor="">Project Name</label>
      <input
        type="text"
        value={formInputs.name}
        onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
      />
      {invalidInputs.name ? (
        <p className="text-red-600 text-center text-xs">{invalidInputs.name}</p>
      ) : null}

      <label htmlFor="">Description</label>
      <input
        type="text"
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

      <label htmlFor="">Date</label>
      <input
        type="date"
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
      <label htmlFor="">Project Type</label>
      <select
        name=""
        id=""
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

      <button>Create Project</button>
    </form>
  );
};
