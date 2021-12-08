const input = document.querySelector("#input");
const suggestions = document.querySelector(".suggestions");

const searchText = async (searchText) => {
  // search data.json
  const res = await fetch("./data.json");
  const states = await res.json();

  // get matches to current text Input

  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    suggestions.innerHTML = "";
  }

  console.log(matches);
  outputHtml(matches);
};

// Show results in html

const outputHtml = (matches) => {
  if (matches.length > 0) {
    const output = matches
      .map((match) => {
        return `<li>${match.name}</li>`;
      })
      .join("");
    suggestions.innerHTML = output;
  }
};

input.addEventListener("input", () => searchText(input.value));
