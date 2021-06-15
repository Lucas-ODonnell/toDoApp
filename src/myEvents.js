import ToDo from './toDo';

let myEvents = [];

const storedLibrary = localStorage.getItem('myEvents');
if (storedLibrary) {
  myEvents = JSON.parse(storedLibrary).map((event) => new ToDo(event));
}

export default myEvents;
