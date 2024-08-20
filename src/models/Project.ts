export interface IProject {
  name: string;
  description: string;
  startDate: string;
  projectType: string;
  projectStatus: string
}

export interface IInvalidInputs {
  name?: string;
  description?: string;
  startDate?: string;
  projectType?: string;
}
