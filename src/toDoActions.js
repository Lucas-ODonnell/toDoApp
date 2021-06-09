import {dateFormatter} from './dateFormatter.js';
import ToDo from './toDo.js';

let myEvents = [];
const storedLibrary = localStorage.getItem('myEvents');
if (storedLibrary) {
	myEvents = JSON.parse(storedLibrary).map((event) => new ToDo(event));
}

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
		location.reload();
	}

	function addToDoToArray(newEvent) {
		let formatted = dateFormatter.formatDate(newEvent.dueDate);
		newEvent.dueDate = formatted;
		myEvents.push(newEvent);
		localStorage.setItem('myEvents', JSON.stringify(myEvents));
	}

	function hideModal(modal) {
		if (modal == null) return;
		modal.classList.remove('active');
	}

	function hideOverlay(overlay) {
		if (overlay == null) return;
		overlay.classList.remove('active');
	}
})();

export const editToDo = (() => {
	const modal = document.querySelector('[data-wrap-form-update]');

	//data-edit-card from updateDisplay.updateToDoDisplay
	const editButtons = document.querySelectorAll('[data-edit-card]');
	const overlay = document.getElementById('overlay');
	const closeButton = document.querySelector('[data-hide-update-button]');

	const editForm = document.querySelector('[data-update-event-form]');
	let newTitle = "";
	let newDescription = "";
	let newDueDate = "";
	let newPriority = "";
	let thisIndex;

	editButtons.forEach(button => {
		button.addEventListener('click', () => {
			const updateModal = document.querySelector(button.dataset.editCard);
			showUpdateModal(updateModal, button);
		});
	});

	closeButton.addEventListener('click', () => {
		const updateModal = closeButton.closest('.wrap-modal');
		closeUpdateModal(updateModal);
	})

	function showUpdateModal(updateModal, button) {
		if (updateModal == null ) return;
		updateModal.classList.add('active');
		overlay.classList.add('active');
		thisIndex = button.id;
		updateModalEvent();
	}

	function closeUpdateModal(updateModal) {
		if (updateModal == null) return;
		updateModal.classList.remove('active');
		overlay.classList.remove('active');
	}

	function updateModalEvent() {
		editForm.addEventListener('submit', updateThisEvent);
	}

	function updateThisEvent(e) {
		e.preventDefault();
		let thisEvent = myEvents[thisIndex];
		setUpdatedParams();
		makeChangesToEvent();
		localStorage.setItem('myEvents', JSON.stringify(myEvents));
		this.reset();
		location.reload();
	}

	function setUpdatedParams() {
		newTitle = document.querySelector('[name=update-title]').value;
		newDescription = document.querySelector('[name=update-description]').value;
		newDueDate = document.querySelector('[name=update-due-date]').value;
		newPriority = document.querySelector('[name=update-priority]').value;
	}

	function makeChangesToEvent() {
		let thisObject = myEvents[thisIndex];
		changeTitle(thisObject);
		changeDescription(thisObject);
		changeDueDate(thisObject);
		changePriority(thisObject);
	}

	function changeTitle(thisObject) {
		if (newTitle == "") {
			newTitle = thisObject.title;
		};
		thisObject.updateTitle(newTitle);
	}

	function changeDescription(thisObject) {
		if (newDescription == "") {
			newDescription = thisObject.description;
		};
		thisObject.updateDescription(newDescription);
	}

	function changeDueDate(thisObject) {
		if (newDueDate == "") {
			newDueDate = thisObject.dueDate;
			thisObject.updateDueDate(newDueDate);
			return;
		};
		thisObject.updateDueDate(dateFormatter.formatDate(newDueDate));
	}

	function changePriority(thisObject) {
		if (newPriority == null) return;
		thisObject.updatePriority(newPriority);
	}
})();

