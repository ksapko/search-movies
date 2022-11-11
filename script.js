const search = document.querySelector(".search");
const li = document.querySelectorAll("li");

const searchMovie = (e) => {
  const text = e.target.value.toUpperCase();

  li.forEach((el) => {
    if (el.textContent.toUpperCase().indexOf(text) !== -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

search.addEventListener("keyup", searchMovie);
