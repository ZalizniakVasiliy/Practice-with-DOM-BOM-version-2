/* ------------------------------------Task-1----------------------------------------- */

/* Вытянуть все атрибуты, которые есть в теге ul, перебрать их (for..of)
   и записать значение каждого атрибута в массив — вывсести этот массив в консоль.
   Так-же, записать в отдельный массив каждое имя атрибута — вывести массив в консоль. */

const attributes = document.querySelector(`#ulId`).attributes;

const attributesArr = [];
const namesAttributesArr = [];

for (let attr of attributes) {
  attributesArr.push(attr.textContent);
  namesAttributesArr.push(attr);
}

console.log(attributesArr);
console.log(namesAttributesArr);

/* С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя. */

const lastLi = document.querySelector("#ulId > li:last-child");
lastLi.innerHTML = `Привет, меня зовут Вася.`;
console.log(lastLi);

/* Добавить первому элементу li атрибут ‘data-my-name‘ со значением, в котором
   будет лежать Ваше имя. */

const firstLi = document.querySelector(`#ulId > li:first-child`);
firstLi.setAttribute(`data-my-name`, `Вася`);
console.log(firstLi);

/* Удалить у тега ul атрибут ‘data-dog-tail‘ */

const ulWithoutAttr = document.getElementById(`ulId`);
ulWithoutAttr.removeAttribute(`data-dog-tail`);
console.log(ulWithoutAttr);

/* ---------------------------------------Task-2-------------------------------------- */

const simpleArr = [1, 2, 3];
const multidimensArr = [1, 2, [1.1, 1.2, 1.3], 3];

(function generateList(array) {
  const ul = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    const listItem = document.createElement("li");
    listItem.append(
      Array.isArray(array[i])
        ? generateList(array[i])
        : document.createTextNode(array[i])
    );
    ul.append(listItem);
  }
  document.body.append(ul);
  return ul;
})(multidimensArr /* or `simpleArr` */);

/* ---------------------------------------Task-3-------------------------------------- */

(function createTable(rows, cols) {
  const table = document.createElement("table");
  table.setAttribute("border", "1");
  document.body.append(table);
  let counter = 0;
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    table.append(tr);
    for (let j = 1; j <= cols; j++) {
      ++counter;
      const td = document.createElement("td");
      td.innerHTML = counter;
      tr.append(td);
    }
  }
})(10, 10);
