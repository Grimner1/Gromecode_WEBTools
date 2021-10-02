import { render, renderTasks } from './renderer.js';
import { createTask } from './createTask.js';
import { pushOnCheckbox } from './updateList.js';
import { getTasksList, setItem, deleteListElem } from './storage.js';

const creatButton = document.querySelector('.create-task-btn');
const listElem = document.querySelector('.list');
const fieldinput = document.querySelector('.task-input');

const onCreateButtonPush = () => {
  const text = fieldinput.value;

  if (!fieldinput.value) {
    return;
  }

  fieldinput.value = '';
  createTask(text);
  // listElem.innerHTML = '';
  // render();
};

// ----------------------old version for localStorage

// const deleteTask = (event) => {
//   const clickTarget = event.target;
//   if (clickTarget.dataset.id !== 'delete') {
//     return;
//   }
//   const liElem = clickTarget.closest('li');
//   const liElemId = liElem.dataset.id;
//   const taskList = getItem('tasksList');
//   const getTaskElement = taskList.find((elem) => elem.id === +liElemId);
//   const indexOfTask = taskList.indexOf(getTaskElement);
//   taskList.splice(indexOfTask, 1);
//   setItem('tasksList', taskList);
//   render();
// };

// ------------------------

const deleteTask = (event) => {
  const clickTarget = event.target;
  if (clickTarget.dataset.id !== 'delete') {
    return;
  }
  const liElem = clickTarget.closest('li');
  const liElemId = liElem.dataset.id;
  deleteListElem(liElemId)
    .then(() => getTasksList())
    .then((taskslist) => renderTasks(taskslist));
  // render();
};

export const initTodoList = () => {
  creatButton.addEventListener('click', onCreateButtonPush);

  listElem.addEventListener('click', pushOnCheckbox);

  listElem.addEventListener('click', deleteTask);
};
