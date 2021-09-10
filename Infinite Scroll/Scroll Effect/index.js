const container = document.querySelector("#container");

async function getPhotos() {
  const response = await fetch("http://jsonplaceholder.typicode.com/photos");

  const data = response.json();
  return data;
}

async function showPhotos() {
  const photos = await getPhotos();
  for (let i = 0; i < 10; i++) {
    const divElement = document.createElement("div");
    divElement.classList.add("post");
    divElement.innerHTML = `${photos[i].title}+${photos[i].id}`;
    container.appendChild(divElement);
  }
}

function infiniteScroll() {
  setTimeout(() => {
    showPhotos();
  }, 2000);
}

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    infiniteScroll();
  }
});

showPhotos();
