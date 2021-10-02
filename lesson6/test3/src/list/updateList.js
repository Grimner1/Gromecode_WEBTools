import { getTasksList, setItem, changeListElement } from './storage.js';
import { render, renderTasks } from './renderer.js';

export const pushOnCheckbox = (event) => {
  const clickTarget = event.target;

  if (clickTarget.dataset.id !== 'checkbox') {
    return;
  }

  const liElement = clickTarget.closest('li');
  const liElementId = liElement.dataset.id;

  getTasksList().then((tasksList) => {
    const taskElement = tasksList.find((elem) => elem.id === liElement.dataset.id);
    if (taskElement.done === false) {
      taskElement.done = true;
    } else {
      taskElement.done = false;
    }
    changeListElement(liElementId, taskElement)
      .then(() => getTasksList())
      .then((tasksList_) => renderTasks(tasksList_));
  });
};

// чеклист:
//  - находим id нажатой кнопки
//  - вытаскиваем со списка объект по id
//  - меняем в объекте после done
//  - делаем PUT объекта по id
