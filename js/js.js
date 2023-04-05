import { data } from "./emoji.js"



const unicData = getUnicData(data);
const grid = document.querySelector(".grid")


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


function createCard(obj) {
  let card = document.createElement("div");
  card.classList.add("emoji_card")

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




unicData.forEach((card) => grid.append(createCard(card)));