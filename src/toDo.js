export default class ToDo {
	constructor(params) {
		this.title = params.title;
		this.description = params.description;
		this.dueDate = params.dueDate;
		this.priority = params.priority;
	}

	updateTitle(title) {
		this.title = title;
	}

	updateDescription(description) {
		this.description = description;
	}

	updateDueDate(dueDate) {
		this.dueDate = dueDate;
	}

	updatePriority(priority) {
		this.priority = priority;
	}
}
