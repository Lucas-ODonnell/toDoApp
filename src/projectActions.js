import { v4 as uuidv4 } from 'uuid';
import { myProjects } from './myProjects';
import Project from './project';
import { showAllProjects, chooseProject } from './projectDom';
import myEvents from './myEvents';
import { updateDisplay } from './toDoDom';

export const createNewProject = (() => {
  const newProjectForm = document.querySelector('[data-add-project]');

  newProjectForm.addEventListener('submit', addNewProject);

  function addNewProject(e) {
    e.preventDefault();
    const newProject = new Project({
      title: document.querySelector('[name=project-title]').value,
    });
    addProjectToStorage(newProject);
    this.reset();
    showAllProjects.updateAllProjects();
  }

  const addProjectToStorage = (newProject) => {
    if (newProject == null) return;
    newProject.id = uuidv4();
    myProjects.push(newProject);
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
  };
})();

export const deleteProject = (() => {
  const projectTableBody = document.querySelector('[data-project-list]');
  projectTableBody.addEventListener('click', deleteProjectInit);

  function deleteProjectInit(e) {
    if (!e.target.matches('[data-delete-project]')) return;
    const thisIndex = e.target.dataset.deleteProject;
    const thisProject = myProjects[thisIndex];
    const result = confirm('Are you sure you want to delete this project?');
    if (result) {
      deleteThisProject(thisProject, thisIndex);
    }
  }

  const deleteThisProject = (thisProject, thisIndex) => {
    const relatedEvents = [];
    /* Get all related events */
    myEvents.forEach((event) => {
      if (event.projectId === thisProject.id) {
        relatedEvents.push(event);
      }
    });
    deleteRelatedEvents(relatedEvents);
    myProjects.splice(thisIndex, 1);
    updateDisplay.updateToDoDisplay();
    showAllProjects.updateAllProjects();
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    chooseProject.defaultHeader();
  };

  const deleteRelatedEvents = (relatedEvents) => {
    relatedEvents.forEach((event) => {
      myEvents.splice(myEvents.indexOf(event), 1);
    });
    localStorage.setItem('myEvents', JSON.stringify(myEvents));
  };
})();
