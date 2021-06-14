import { selectProject } from './myProjects.js';
import {updateDisplay} from './toDoDom.js';
import {showAllProjects, chooseProject} from './projectDom.js';
import { newProject, deleteProject } from './projectActions.js';

selectProject.defaultProject();
showAllProjects.updateAllProjects();
chooseProject.defaultHeader();
updateDisplay.updateToDoDisplay();








