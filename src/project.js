export class Project {
	constructor(title, description, projectToDo=[]) {
		this.title = title;
		this.description = description;
		this.projectToDo = projectToDo;
	}

	addToDo(todo) {
		this.projectToDo.push(todo);
	}
}



