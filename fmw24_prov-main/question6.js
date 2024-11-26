// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`
const container = document.getElementById("photoContainer");

async function getPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  const firstTen = data.slice(0, 10);

  firstTen.forEach((image) => {
    const imageContainer = document.createElement("div");
    const imgEl = document.createElement("img");

    imgEl.src = image.url;
    imgEl.alt = image.title;

    imgEl.addEventListener("click", () => {
      alert(`Title: ${image.title}`);
    });
    container.appendChild(imgEl);
    container.appendChild(imageContainer);
  });
}

getPhotos();
