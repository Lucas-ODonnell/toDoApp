export const showProject = (() => {
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
