import { v4 as uuidv4 } from 'uuid';
import { currentProject } from './myProjects';
import myEvents from './myEvents';
import dateFormatter from './dateFormatter';
import ToDo from './toDo';
import { updateDisplay } from './toDoDom';
// This is submitForm for new event aka todo
export const submitForm = (() => {
  const modal = document.querySelector('[data-wrap-form]');
  const overlay = document.getElementById('overlay');
  const eventForm = document.querySelector('[data-new-event-form]');

  eventForm.addEventListener('submit', newEventInit);
  function newEventInit(e) {
    e.preventDefault();
    // set currentId seperately or all the projectId will be set to current id on init
    const currentId = currentProject.id;
    const eventId = uuidv4();

    const newEvent = new ToDo({
      title: document.querySelector('[name=title]').value,
      description: document.querySelector('[name=description]').value,
      dueDate: document.querySelector('[name=due-date]').value,
      priority: document.querySelector('[name=priority]').value,
    });
    newEvent.projectId = currentId;
    newEvent.id = eventId;
    addToDoToArray(newEvent);
    this.reset();
    closeOnSubmit();
  }

  const addToDoToArray = (newEvent) => {
    const formatted = dateFormatter.formatDate(newEvent.dueDate);
    newEvent.dueDate = formatted;
    myEvents.push(newEvent);
    localStorage.setItem('myEvents', JSON.stringify(myEvents));
    updateDisplay.updateToDoDisplay();
  };

  const closeOnSubmit = () => {
    overlay.classList.remove('active');
    modal.classList.remove('active');
  };
})();

export const editToDo = (() => {
  const editForm = document.querySelector('[data-update-event-form]');
  const overlay = document.getElementById('overlay');
  const updateCardModal = document.querySelector('[data-wrap-form-update]');
  let newTitle = '';
  let newDescription = '';
  let newDueDate = '';
  let newPriority = '';
  let thisEvent;

  const updateModalEvent = (thisEventId) => {
    thisEvent = myEvents.find((thisEvent) => thisEvent.id === thisEventId);
    editForm.addEventListener('submit', updateThisEvent);
  };

  function updateThisEvent(e) {
    e.preventDefault();
    setUpdatedParams();
    makeChangesToEvent();
    localStorage.setItem('myEvents', JSON.stringify(myEvents));
    this.reset();
    closeOnSubmit();
    updateDisplay.updateToDoDisplay();
  }

  const setUpdatedParams = () => {
    newTitle = document.querySelector('[name=update-title]').value;
    newDescription = document.querySelector('[name=update-description]').value;
    newDueDate = document.querySelector('[name=update-due-date]').value;
    newPriority = document.querySelector('[name=update-priority]').value;
  };

  const makeChangesToEvent = () => {
    changeTitle(thisEvent);
    changeDescription(thisEvent);
    changeDueDate(thisEvent);
    changePriority(thisEvent);
  };

  const changeTitle = (thisObject) => {
    if (newTitle === '') return;
    thisObject.updateTitle(newTitle);
  };

  const changeDescription = (thisObject) => {
    if (newDescription === '') return;
    thisObject.updateDescription(newDescription);
  };

  const changeDueDate = (thisObject) => {
    if (newDueDate === '') return;
    thisObject.updateDueDate(dateFormatter.formatDate(newDueDate));
  };

  const changePriority = (thisObject) => {
    if (newPriority == null) return;
    thisObject.updatePriority(newPriority);
  };

  const closeOnSubmit = () => {
    overlay.classList.remove('active');
    updateCardModal.classList.remove('active');
  };

  return {
    updateModalEvent,
  };
})();

export const deleteEvents = (() => {
  function deleteRow(e) {
    if (!e.target.matches('[data-delete-card]')) return;
    const thisEventId = e.target.dataset.deleteCard;
    const thisIndex = myEvents.findIndex((thisEvent) => thisEvent.id === thisEventId);
    myEvents.splice(thisIndex, 1);
    localStorage.setItem('myEvents', JSON.stringify(myEvents));
    updateDisplay.updateToDoDisplay();
  }

  return {
    deleteRow,
  };
})();
