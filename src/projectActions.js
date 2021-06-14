import { myProjects, currentProject, selectProject } from './myProjects.js';
import Project from './project.js';
import { showAllProjects } from './projectDom.js';
import { myEvents } from './myEvents.js';
import { updateDisplay } from './toDoDom.js';
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

export const deleteProject = (() => {
	const projectTableBody = document.querySelector('[data-project-list]');
	projectTableBody.addEventListener('click', deleteProject);

	function deleteProject(e) {
		if (!e.target.matches('[data-delete-project]')) return;
		const thisIndex = e.target.dataset.deleteProject;
		const thisProject = myProjects[thisIndex];
		deleteThisProject(thisProject, thisIndex);
	}

	const deleteThisProject = (thisProject, thisIndex) => {
		const relatedEvents = [];
		const relatedIndex = [];
		console.log(thisIndex);
		/* Get all related events */
		myEvents.forEach(event => {
			if (event.projectId == thisProject.id) {
				relatedEvents.push(event);
			}
		});
		/*Get indexes of related Events */
		relatedEvents.forEach(event => {
			let currentEvent = myEvents.findIndex(thisEvent => thisEvent.id == event.id)
			relatedIndex.push(currentEvent);
		})

		deleteRelatedEvents(relatedIndex);
		myProjects.splice(thisIndex, 1);
		showAllProjects.updateAllProjects();
		updateDisplay.updateToDoDisplay();
		localStorage.setItem('myProjects', JSON.stringify(myProjects));
		localStorage.setItem('myEvents', JSON.stringify(myEvents));
	}

	const deleteRelatedEvents = (relatedIndex) => {
		relatedIndex.forEach(index => {
			myEvents.splice(index, 1);
		});
	} 
})();
