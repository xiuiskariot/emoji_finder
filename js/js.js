import { data } from "./emoji.js";

const unicData = getUnicData(data);
const grid = document.querySelector(".grid");
const input = document.querySelector("input");

//Принимает массив объектов data, чтобы собрать новый массив, в котором раздел keywords каждого объекта состоит из уникальных слов
function getUnicData(data) {
  const unicData = [];
  data.forEach((card) => {
    unicData.push({
      ...card,
      keywords: [...new Set(card.keywords.split(" "))].join(" "),
    });
  });
  return unicData;
}

//Создает одну карточку по данным из одного объекта
function createCard(obj) {
  let card = document.createElement("div");
  card.classList.add("emoji_card");

  let symbol = document.createElement("p");
  symbol.classList.add("symbol");
  symbol.textContent = obj.symbol;

  let title = document.createElement("p");
  title.classList.add("title");
  title.textContent = obj.title;

  let keywords = document.createElement("p");
  keywords.classList.add("keywords");
  keywords.textContent = obj.keywords;

  card.append(symbol, title, keywords);

  return card;
}

//Отфильтровывает карточки по словам введеным в input, фильтр по словам в title и keywords
function search(e) {
  let value = e.target.value.toLowerCase().trim();
  grid.innerHTML = ""; //очищает контейнер от карточек, которые не прошли фильтр
  let filtred = unicData.filter(
    (card) =>
      card.title.toLowerCase().includes(value) ||
      card.keywords.toLowerCase().includes(value)
  );
  printCards(filtred); //рисует отфильтрованные карточки 
}

//Отрисовывает все карточки 
function printCards(array) {
  array.forEach((card) => grid.append(createCard(card)));
}

//Самовызывающася функция, которая отрисовывает все карточки из массива unicData
(function main() {
  printCards(unicData);
})();

input.addEventListener("input", search);
