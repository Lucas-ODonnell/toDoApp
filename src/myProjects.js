import Project from './project';

export let myProjects = [];
export let currentProject;

const storedProjects = localStorage.getItem('myProjects');
if (storedProjects) {
  myProjects = JSON.parse(storedProjects).map((project) => new Project(project));
}

export const selectProject = (() => {
  const defaultProject = () => {
    if (myProjects.length == null) return;
    currentProject = myProjects[0];
  };

  const setCurrentProject = (index) => {
    currentProject = myProjects[index];
  };

  return {
    setCurrentProject,
    defaultProject,
  };
})();
