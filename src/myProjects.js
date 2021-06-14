import Project from './project.js';
export let myProjects = [];

const storedProjects = localStorage.getItem('myProjects');
if (storedProjects) {
	myProjects = JSON.parse(storedProjects).map((project) => new Project(project));
}

export let currentProject;

export const selectProject = (() => {
	const defaultProject = () => {
	if (myProjects.length == null) return; 
	currentProject = myProjects[0];
	}

	const setCurrentProject = (index) => {
		currentProject = myProjects[index];
	}

	return {
		setCurrentProject,
		defaultProject
	}
})();

