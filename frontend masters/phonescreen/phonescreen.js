const rootElement = document.querySelector(".foods");

const foodData = [
  { id: 1, name: "apple", image: "🍎" },
  { id: 2, name: "mango", image: "🥭" },
  { id: 3, name: "pineapple", image: "🍍" },
];

class Foods {
  constructor(el, foodData) {
    this.root = el;
    this.data = foodData;
  }

  renderList() {
    this.root.addEventListener("click", (event) => {
      const { target } = event;
      target.remove();
    });

    const fragment = document.createDocumentFragment();

    this.data.forEach((i) => {
      fragment.appendChild(this.createElement(i));
    });

    this.root.appendChild(fragment);
  }

  createElement(item) {
    const divElement = document.createElement("div");
    divElement.innerText = item.name;

    return divElement;
  }
}

const foods = new Foods(rootElement, foodData);
foods.renderList();
 