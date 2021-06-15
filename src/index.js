import { selectProject } from './myProjects';
import { updateDisplay } from './toDoDom';
import { showAllProjects, chooseProject } from './projectDom';
import { createNewProject, deleteProject } from './projectActions';

selectProject.defaultProject();
showAllProjects.updateAllProjects();
chooseProject.defaultHeader();
updateDisplay.updateToDoDisplay();
