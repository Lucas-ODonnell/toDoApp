import { myProjects, currentProject, selectProject } from './myProjects.js';
import Project from './project.js';
import { showAllProjects } from './projectDom.js';
import { v4 as uuidv4 } from 'uuid';

export const newProject = (() => {
	const newProjectForm = document.querySelector('[data-add-project]');

	newProjectForm.addEventListener('submit', addNewProject);

	function addNewProject(e) {
		e.preventDefault();
		const newProject = new Project({
			title: document.querySelector('[name=project-title]').value
		})
		addProjectToStorage(newProject);
		this.reset();
		showAllProjects.updateAllProjects();
	}

	const addProjectToStorage = (newProject) => {
		if (newProject == null) return;
		newProject.id = uuidv4();
		myProjects.push(newProject);
		localStorage.setItem('myProjects', JSON.stringify(myProjects));
	} 
})();
