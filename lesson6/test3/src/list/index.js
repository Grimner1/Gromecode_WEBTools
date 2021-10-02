// --- модульный вариант с локал сторедж:

// index
//    - склеивание модулей -- неясно нужно ли?
//    - рендер после загрузки страницы
//    - рендер после изменения в сторедж
// createTask - модуль создания таски
//    - функция создания таски:
//       - извлечение массива
//       - создание такски
//       - доавление таски в массив
//       - запись массива в сторедж
// renderer - модуль рендера тасклиста
//    - функция создания чекбокса
//    - функция создания листайтема с чекбоксом внутри
//    - функция рендеринга всего тасклиста(render)
// storage - модуль локалстореджа, в последствии заменить на БД
//    - локалсторедж:
//        - функция записи такслиста в локалсторедж
//        - функция извлечения тасклиста из локал стореджа
// tod*List - модуль клик-активации
//    - функция клика по Create
//        - createTask --> renderer
//    - функция клика по чекбоксу
//        - updateTask
//  //  - функция удаления таски (при реализации работы с БД)
// updateTask - модуль чеклиста
//    - функция чеклиста:
//        - извлекает массив.
//        - находит элемент в массиве по id и меняет поле done
//        - записывает новый массив в локалсторедж
//        - renderer(render)

// ------------------------

// const listElem = document.querySelector('.list');
// const creatButton = document.querySelector('.create-task-btn');
// const fieldinput = document.querySelector('.task-input');

// window.addEventListener('storage', whenStorageChange); // ---- сюда дописать функцию которая будет исполняться, когда будет меняться локал сторедж;

import { renderTasks } from "./renderer.js";
import { initTodoList } from "./todoList.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoList();
});
