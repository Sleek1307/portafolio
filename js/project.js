const projectsContainer = document.getElementById("projects-container");
const projectsList = document.getElementById("projects-list");
const projects = new Array();

projects.push(
  {
    name: "Calculadora",
    description:
      "Calculadora funcional en todos los aspectos hecha con HTML5, CSS3 con estilos personalizados usando la metodología BEM y Vanilla JavaScript con una metodología de programacion funcional",
    image: "calculadora.png",
    github_link: "https://github.com/Sleek1307/calculadora",
    project_link: "#",
    tags: ["Html", "Css", "Javascript"],
  },
  {
    name: "Alkeflix",
    description:
      "Una pagina web que se conecta a la API de theMovieDb que permite buscar filmes, ver una seccion con detalles de la pelicula y agregar o quitar a una seccion de favoritos",
    image: "alkeflix.png",
    github_link: "https://github.com/Sleek1307/Alkeflix",
    project_link: "https://sleek1307.github.io/alkeflix",
    tags: ["Bootstrap", "React"],
  },
  {
    name: "Spotify API",
    description:
      "Buscador que permite acceder a la cuenta de un usuario en Spotify y buscar pistas, albumes, artistas, etc. Tambien permite ver una breve descripcion de cada elemento buscado y encontrado",
    image: "spotify.png",
    github_link: "https://github.com/Sleek1307/spotify-app",
    project_link: "#",
    tags: ["Bootstrap", "React", "React-Recoil"],
  }
);

if (projectsContainer) {
  projects.map((project, index) => {
    projectsContainer.innerHTML += `
  <div class="swiper-slide">
    <div class=" card col-3">
      <div class="card__front card__face card__face--dark">
        <div class="card__body">
          <img src="img/${project?.image}" class="card__img card__img--project">
        </div>
        <div class="card__footer card__footer--dark card__footer--project">
          <p class="card__title">${project?.name}</p>
        </div>
      </div>
      <div class="card__back card__face card__face--dark ">
        <div class="d-flex w-100 h-100 justify-content-around align-items-center">
        <a href="${project?.project_link}"class="btn btn-outline-dark">Live Demo</a>
        <a href="${project?.github_link}" target="_blank" class="btn btn-outline-dark">Github</a>
        </div> 
      </div>
    </div>
  </div>  
  `;
  });
}

if (projectsList) {
  projects.map((project, index) => {
    projectsList.innerHTML += `
    <div class="project-container bg-white  my-4 rounded-3 border">
    <div class="project-img-container">
      <img src="img/${project?.image}" class="project-img img-fluid">
      <div class="project-buttons">
      <a href="${project?.project_link}"class="btn btn-outline-dark">Live Demo</a>
      <a href="${project?.github_link}" target="_blank" class="btn btn-outline-dark">Github</a>
      </div>
    </div>
    <div class="project-body">
      <div class="project-description">
        ${project?.description}
      </div>
      <div id="tags-${index}" class="project-tags">
      </div>
      <hr class="w-100 ">
    </div>
  </div>
  `;

    const tagContainer = document.getElementById("tags-" + index);
    project.tags.map((tag, index) => {
      tagContainer.innerHTML += `<span class="badge bg-primary rounded-1 px-2 fst-italic">${tag}</span>`;
    });
    console.log(tagContainer);
  });
}
