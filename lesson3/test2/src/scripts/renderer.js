import { getTasksList } from './storage.js';

const listElem = document.querySelector('.list');

const createCheckBox = (done, id) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-id', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  return checkbox;
};

const createDelete = () => {
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('list__item_cancel-button');
  deleteButton.setAttribute('data-id', 'delete');
  deleteButton.innerHTML = '+';
  return deleteButton;
};

const createLiElement = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  listItemElem.setAttribute('data-id', id);
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(createCheckBox(done, id), text, createDelete());
  return listItemElem;
};

export const renderTasks = (tasksList) => {
  listElem.innerHTML = '';
  const taskElements = tasksList
    .sort((a, b) => a.done - b.done)
    .map((taskObj) => createLiElement(taskObj));
  listElem.append(...taskElements);
};
