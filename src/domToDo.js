import {dateFormatter} from './dateFormatter.js';
import ToDo from './toDo.js';

let myEvents = [];
const storedLibrary = localStorage.getItem('myEvents');
if (storedLibrary) {
	myEvents = JSON.parse(storedLibrary).map((event) => new ToDo(event));
}

export const showForm = (() => {
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
		updateDisplay.updateToDoDisplay(myEvents);
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

export const updateDisplay = (() => {
	const tableBody = document.querySelector('[data-todo-events]');

	function updateToDoDisplay(myEvents) {
		tableBody.innerHTML = myEvents.map((toDoEvent) => `
		<tr>
				<td><strong>Title:</strong> ${toDoEvent.title} </td>
				<td><strong>Due:</strong> ${toDoEvent.dueDate}</td>
				<td><strong>Priority:</strong> ${toDoEvent.priority}</td>
				<td><button data-expand-event>Expand</button></td>
				</tr>`).join('');
	}

	return {
		updateToDoDisplay,
	}

})();

updateDisplay.updateToDoDisplay(myEvents);

export const showCard = (() => {
	const expandedCard = document.querySelector('[data-expand-modal]');
	const expandButtons = document.querySelectorAll('[data-expand-event]');
	const overlay = document.getElementById('overlay');

	
	expandButtons.forEach((button, index) => {
		button.addEventListener('click', () => {
			const clickedEvent = myEvents[index];
			expandCard(clickedEvent);
			overlay.classList.add('active');
		});
	});


	function expandCard(clickedEvent) {
		expandedCard.classList.add('card-border');
		expandedCard.innerHTML = `<div class="card">
					<div class="container">
						<div class="wrap-event-close">
						<button type="button" class="close-button" data-card-close>&times;</button>
						</div>
						<h3 class="wrap-btn"><strong>${clickedEvent.title}</strong></h3>
						<p class="wrap-text">
						${clickedEvent.description}
						</p>
						<div class="date-priority">
							<div>Due: ${clickedEvent.dueDate}</div>
							<div>Priority: ${clickedEvent.priority}</div>
						</div>
						<div class="wrap-btn">
							<button>Complete: ${clickedEvent.complete ? "Yes" : "No"}</button>
						</div>

					</div>
				</div>`; 
		closeCard();
	}

	function closeCard() {
		if (expandedCard.innerHTML == "") return;
		const closeButton = document.querySelector('[data-card-close]');
		closeButton.addEventListener("click", () => {
			expandedCard.classList.remove('card-border');
			expandedCard.innerHTML = "";
			overlay.classList.remove('active');
		})
	}
})();

