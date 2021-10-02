// let tasks = [
//   { text: 'Buy milk', done: true, id: 1 },
//   { text: 'Pick up Tom from airport', done: true, id: 2 },
//   { text: 'Visit party', done: false, id: 3 },
//   { text: 'Visit doctor', done: false, id: 4 },
//   { text: 'Buy meat', done: false, id: 5 },
// ];

// export const setItem = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

// export const getItem = (key) => JSON.parse(localStorage.getItem(key));

const url = 'https://614c751d59e92d00176ad25f.mockapi.io/tasksList/Tasks';

export const setItem = (taskElem) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskElem),
  });

export const getTasksList = () => fetch(url).then((taskElem) => taskElem.json());

export const getListElem = (id) => fetch(`${url}/${id}`).then((taskElem) => taskElem.json());

export const deleteListElem = (id) => fetch(`${url}/${id}`, { method: 'DELETE' });

export const changeListElement = (id, taskElem) =>
  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskElem),
  });

const obj = { text: 'text 4', done: true };

// setItem2(obj);
// let tasksList = [];
// getTasksList().then((el) => (tasksList = el));
// getTasksList().then((el) => console.log(el));
// console.log(tasksList);
// getListElem(6).then((el) => console.log(el));
// deleteListElem(5);
// getTasksList().then((el) => console.log(el));

// changeListElement(4, obj);
