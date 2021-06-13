import { myProjects, currentProject, selectProject } from './myProjects.js';
import { updateDisplay } from './toDoDom.js';

export const showProjectForm = (() => {
	const newProjectButton = document.querySelector('[data-new-project]');

	newProjectButton.addEventListener('click', () => {
		const projectForm = document.querySelector(newProjectButton.dataset.newProject); 
		toggleProjectForm(projectForm);
	})

	const toggleProjectForm = (projectForm) => {
		if (projectForm.classList.contains('active')) {
			projectForm.classList.remove('active');
		} else {
			projectForm.classList.add('active');
		}
	}
})();

export const showAllProjects = (() => {
	const tableBody = document.querySelector('[data-project-list]');

	const updateAllProjects = () => {
		tableBody.innerHTML = myProjects.map((project, index) => `<tr class="project-row">
							<td class="project-name "data-project-target="${index}">${project.title}</td>
						</tr>`).join("");
	}

	return {
		updateAllProjects,
	}

})();

export const chooseProject = (() => {
	const projectTableBody = document.querySelector('[data-project-list]');

	projectTableBody.addEventListener('click', setCurrentEvents);

	function setCurrentEvents(e) {
		if (!e.target.matches('[data-project-target]')) return;
		const index = e.target.dataset.projectTarget;
		changeHeader(index);
		selectProject.setCurrentProject(index);
		updateDisplay.updateToDoDisplay();
	}

	const changeHeader = (index) => {
		const currentTitle = document.querySelector('[data-header-title]');
		const currentHeader = myProjects[index].title;
		currentTitle.innerText = currentHeader;
	}

	const defaultHeader = () => {
		if (myProjects.length == 0) return;
		const currentTitle = document.querySelector('[data-header-title]');
		currentTitle.innerText = myProjects[0].title;
	}

	return {
		changeHeader,
		defaultHeader,
	}
})();


showAllProjects.updateAllProjects();
chooseProject.defaultHeader();
