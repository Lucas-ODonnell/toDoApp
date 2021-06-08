import {dateFormatter} from './dateFormatter.js';
import ToDo from './toDo.js';

let myEvents = [];
const storedLibrary = localStorage.getItem('myEvents');
if (storedLibrary) {
	myEvents = JSON.parse(storedLibrary).map((event) => new ToDo(event));
}

export const updateDisplay = (() => {
	const tableBody = document.querySelector('[data-todo-events]');

	function updateToDoDisplay(myEvents) {
		tableBody.innerHTML = myEvents.map((toDoEvent,index) => `
		<tr data-card-row-${index}>
				<td><strong>To Do:</strong> ${toDoEvent.title} </td>
				<td><strong>Due:</strong> ${toDoEvent.dueDate}</td>
				<td><button data-expand-event>Expand</button></td>
				</tr><br />`).join('');
		//color code the events based on priority
		myEvents.map((toDoEvent, index) => {
			colorCode(toDoEvent, index);
		});
	}

	function colorCode(toDoEvent, index) {
		const thisTR = document.querySelector(`[data-card-row-${index}]`);
		if (toDoEvent.priority == "high") {
			thisTR.classList.add('danger');
		} else if (toDoEvent.priority == "medium") {
			thisTR.classList.add('medium');
		} else if (toDoEvent.priority == "low") {
			thisTR.classList.add('easy');
		}
	}

	return {
		updateToDoDisplay,
	}
})();

updateDisplay.updateToDoDisplay(myEvents);
/*This is the form for creating a new event.*/
export const popUpForm = (() => {
	const eventButton = document.querySelector('[data-add-modal]');
	const eventExitButton = document.querySelector('[data-hide-button]');
	const overlay = document.getElementById('overlay');

	eventButton.addEventListener('click', () => {
		const eventModal = document.querySelector(eventButton.dataset.addModal);
		openForm(eventModal);
	});

	eventExitButton.addEventListener('click', () => {
		const eventModal = eventExitButton.closest('.wrap-modal');
		hideForm(eventModal);
	});

	function openForm(eventModal) {
		if (eventModal == null) return;
		eventModal.classList.add('active');
		overlay.classList.add('active');
	}

	function hideForm(eventModal) {
		if (eventModal == null) return;
		eventModal.classList.remove('active');
		overlay.classList.remove('active');
	}
})();

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

export const showCard = (() => {
	const expandedCard = document.querySelector('[data-expand-modal]');
	const expandButtons = document.querySelectorAll('[data-expand-event]');
	const overlay = document.getElementById('overlay');
	const cardTitle = document.querySelector('[data-event-title]');
	const cardDescription = document.querySelector('[data-card-description]');
	const cardDueDate = document.querySelector('[data-card-due-date]');
	const cardPriority = document.querySelector('[data-card-priority]');
	const cardCompleteStatus = document.querySelector('[data-complete-status]');
	const closeCardButton = document.querySelector('[data-card-close]');

	expandButtons.forEach((button, index) => {
		button.addEventListener('click', () => {
			const clickedEvent = myEvents[index];
			expandCard(clickedEvent);
			overlay.classList.add('active');
		});
	});

	closeCardButton.addEventListener('click', () => {
		const modal = closeCardButton.closest('.wrap-event-modal');
		closeCard(modal);
	});


	function expandCard(clickedEvent) {
		cardTitle.innerHTML = `<strong>${clickedEvent.title}</strong>`;
		cardDescription.innerHTML = `${clickedEvent.description}`;
		cardDueDate.innerHTML = `<strong>Due:</strong> ${clickedEvent.dueDate}`;
		cardPriority.innerHTML = `<strong>Priority:</strong> ${clickedEvent.priority[0].toUpperCase() + clickedEvent.priority.slice(1)}`;
		cardCompleteStatus.innerHTML = `<strong>Complete:&nbsp;</strong> ${clickedEvent.complete == true ? "Yes" : "No"}`;
		expandedCard.classList.add('active');
	}

	function closeCard(modal) {
		modal.classList.remove('active');
		overlay.classList.remove('active');
	}
})();
