import {dateFormatter} from './dateFormatter.js';
import ToDo from './toDo.js';
import {updateDisplay} from './toDoDom.js';
import { myEvents }from './myEvents.js';

export const submitForm = (() => {
	const modal = document.querySelector('[data-wrap-form]');
	const overlay = document.getElementById('overlay');

	const eventForm = document.querySelector('[data-new-event-form]');
	eventForm.addEventListener('submit', newEvent);
	function newEvent(e) {
		e.preventDefault();
		let newEvent = new ToDo({
			title: document.querySelector('[name=title]').value,
			description: document.querySelector('[name=description]').value,
			dueDate: document.querySelector('[name=due-date]').value,
			priority: document.querySelector('[name=priority]').value
		})
		addToDoToArray(newEvent);
		hideModal(modal);
		hideOverlay(overlay);
		this.reset();
		updateDisplay.updateToDoDisplay();
	}

	const addToDoToArray = (newEvent) => {
		let formatted = dateFormatter.formatDate(newEvent.dueDate);
		newEvent.dueDate = formatted;
		myEvents.push(newEvent);
		localStorage.setItem('myEvents', JSON.stringify(myEvents));
	}

	const hideModal = (modal) => {
		if (modal == null) return;
		modal.classList.remove('active');
	}

	const hideOverlay = (overlay) => {
		if (overlay == null) return;
		overlay.classList.remove('active');
	}
})();

export const editToDo = (() => {
	const editForm = document.querySelector('[data-update-event-form]');
	const overlay = document.getElementById('overlay');
	const updateCardModal = document.querySelector('[data-wrap-form-update]');
	let newTitle = "";
	let newDescription = "";
	let newDueDate = "";
	let newPriority = "";
	let thisIndex;

	const updateModalEvent = (index) => {
		thisIndex = index
		editForm.addEventListener('submit', updateThisEvent);
	}

	function updateThisEvent(e) {
		e.preventDefault();
		let thisEvent = myEvents[thisIndex];
		setUpdatedParams();
		makeChangesToEvent();
		localStorage.setItem('myEvents', JSON.stringify(myEvents));
		this.reset();
		overlay.classList.remove('active');
		updateCardModal.classList.remove('active');
		updateDisplay.updateToDoDisplay();
	}

	const setUpdatedParams = () => {
		newTitle = document.querySelector('[name=update-title]').value;
		newDescription = document.querySelector('[name=update-description]').value;
		newDueDate = document.querySelector('[name=update-due-date]').value;
		newPriority = document.querySelector('[name=update-priority]').value;
	}

	const makeChangesToEvent = () => {
		let thisObject = myEvents[thisIndex];
		changeTitle(thisObject);
		changeDescription(thisObject);
		changeDueDate(thisObject);
		changePriority(thisObject);
	}

	const changeTitle = (thisObject) => {
		if (newTitle == "") {
			newTitle = thisObject.title;
		};
		thisObject.updateTitle(newTitle);
	}

	const changeDescription = (thisObject) => {
		if (newDescription == "") {
			newDescription = thisObject.description;
		};
		thisObject.updateDescription(newDescription);
	}

	const changeDueDate = (thisObject) => {
		if (newDueDate == "") {
			newDueDate = thisObject.dueDate;
			thisObject.updateDueDate(newDueDate);
			return;
		};
		thisObject.updateDueDate(dateFormatter.formatDate(newDueDate));
	}

	const changePriority = (thisObject) => {
		if (newPriority == null) return;
		thisObject.updatePriority(newPriority);
	}

	return {
		updateModalEvent,
	}
})();

export const deleteEvents = (() => {
	function deleteRow(e) {
		if (!e.target.matches('[data-delete-card]')) return;
		myEvents.splice(e.target.dataset.deleteCard, 1);
		localStorage.setItem('myEvents', JSON.stringify(myEvents));
		updateDisplay.updateToDoDisplay();
	}

	return {
		deleteRow,
	}
})();
