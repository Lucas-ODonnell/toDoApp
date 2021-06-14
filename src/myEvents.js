import { myProjects, currentProjects, selectProject} from './myProjects.js';
import ToDo from './toDo.js';

export let myEvents = [];

const storedLibrary = localStorage.getItem('myEvents');
if (storedLibrary) {
	myEvents = JSON.parse(storedLibrary).map((event) => new ToDo(event));
}

















