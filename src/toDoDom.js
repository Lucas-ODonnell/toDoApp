import { currentProject } from './myProjects';
import myEvents from './myEvents';
import { editToDo, deleteEvents } from './toDoActions';

export const updateDisplay = (() => {
  const tableBody = document.querySelector('[data-todo-events]');
  const showThisCard = document.querySelector('[data-expand-modal]');
  const updateCardModal = document.querySelector('[data-wrap-form-update]');
  const closeButton = document.querySelector('[data-card-close]');
  const updateCloseButton = document.querySelector('[data-hide-update-button]');
  const overlay = document.getElementById('overlay');

  function updateToDoDisplay() {
    if (currentProject == null) return;
    tableBody.innerHTML = myEvents
      .filter((thisEvent) => thisEvent.projectId === currentProject.id)
      .map((toDoEvent, index) => `
<tr class="event-row" data-card-row-${index} data-expand-card="${index}">
<td><strong>To Do:</strong> ${toDoEvent.title} </td>
<td><strong>Due:</strong> ${toDoEvent.dueDate}</td>
<td><button data-edit-card="${toDoEvent.id}">Edit</button></td>
<td><button class="is-danger" data-delete-card="${toDoEvent.id}">Delete</button></td>
</tr><br />`).join('');
    // color code the events based on priority
    myEvents.filter((thisEvent) => thisEvent.projectId === currentProject.id)
      .map((toDoEvent, index) => {
        colorCode(toDoEvent, index);
      });
  }

  tableBody.addEventListener('click', deleteEvents.deleteRow); // ./toDoActions.js
  tableBody.addEventListener('click', showCard);
  tableBody.addEventListener('click', showCardToUpdate);

  //* ****************Show Card *******************************************
  function showCard(e) {
    if (!e.target.matches('[data-expand-card]')) return;
    showThisCard.classList.add('active');
    overlay.classList.add('active');
    const index = e.target.dataset.expandCard;
    fillCard(index);
  }

  function fillCard(index) {
    const thisTitle = document.querySelector('[data-event-title]');
    const thisDescription = document.querySelector('[data-card-description]');
    const thisDueDate = document.querySelector('[data-card-due-date]');
    const thisPriority = document.querySelector('[data-card-priority]');
    thisTitle.innerHTML = `<strong>${myEvents[index].title}</strong>`;
    thisDescription.innerText = `${myEvents[index].description}`;
    thisDueDate.innerHTML = `<strong>Due:</strong> ${myEvents[index].dueDate}`;
    thisPriority.innerHTML = `<strong>Priority:</strong> ${myEvents[index].priority}`;
  }

  closeButton.addEventListener('click', () => {
    const openCard = closeButton.closest('.wrap-event-modal');
    openCard.classList.remove('active');
    overlay.classList.remove('active');
  });
  //* *******************Update section *************************************
  function showCardToUpdate(e) {
    if (!e.target.matches('[data-edit-card]')) return;
    updateCardModal.classList.add('active');
    overlay.classList.add('active');
    const thisEventId = e.target.dataset.editCard;
    editToDo.updateModalEvent(thisEventId);
  }

  updateCloseButton.addEventListener('click', () => {
    updateCardModal.classList.remove('active');
    overlay.classList.remove('active');
  });

  const colorCode = (toDoEvent, index) => {
    const thisTR = document.querySelector(`[data-card-row-${index}]`);
    if (toDoEvent.priority === 'high') {
      thisTR.classList.add('danger');
    } else if (toDoEvent.priority === 'medium') {
      thisTR.classList.add('medium');
    } else if (toDoEvent.priority === 'low') {
      thisTR.classList.add('easy');
    }
  };

  return {
    updateToDoDisplay,
  };
})();

/* This is opens the modal which contains the form to create a new event. */
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

  const openForm = (eventModal) => {
    if (eventModal == null) return;
    if (currentProject == null) {
      window.alert('You need to set up a project');
      return;
    }
    eventModal.classList.add('active');
    overlay.classList.add('active');
  };

  const hideForm = (eventModal) => {
    if (eventModal == null) return;
    eventModal.classList.remove('active');
    overlay.classList.remove('active');
  };
})();
