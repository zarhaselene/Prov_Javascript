// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.
const postsContainer = document.getElementById("container");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post) => {
    // Create elements
    const containerEl = document.createElement("div");
    const headingEl = document.createElement("h2");
    const postEl = document.createElement("p");

    containerEl.className = "post";
    headingEl.className = "heading";
    postEl.className = "content";

    // Add content to elements
    headingEl.textContent = post.title;
    postEl.textContent = post.body;

    //Append elements
    containerEl.appendChild(headingEl);
    containerEl.appendChild(postEl);
    postsContainer.appendChild(containerEl);
  });
}
getPosts();
