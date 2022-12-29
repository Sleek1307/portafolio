const projectsContainer = document.getElementById('projects-container');
const projects = new Array();

projects.push({
  name: "Calculadora",
  description: "Calculadora funcional en todos los aspectos hecha con HTML5, CSS3 con estilos personalizados usando la metodología BEM y Vanilla JavaScript con una metodología de programacion funcional",
  image: 'calculadora.png',
  github_link: "https://github.com/Sleek1307/calculadora",
  project_link: '#',
  tags: [
    'Html',
    'Css',
    'Javascript',
  ]
}, {
  name: 'Alkeflix',
  description: 'Una pagina web que se conecta a la API de theMovieDb que permite buscar filmes, ver una seccion con detalles de la pelicula y agregar o quitar a una seccion de favoritos',
  image: 'alkeflix.png',
  github_link: '',
  project_link: '',
  tags: [
    'Bootstrap',
    'React'
  ]
}, {
  name: 'Spotify API',
  description: 'Buscador que permite acceder a la cuenta de un usuario en Spotify y buscar pistas, albumes, artistas, etc. Tambien permite ver una breve descripcion de cada elemento buscado y encontrado',
  image: 'spotify.png',
  github_link: '',
  project_link: '',
  tags: [
    'Bootstrap',
    'React',
    'React-Recoil',
  ]
});

console.log(projectsContainer)

projects.map((project, index) => {
  projectsContainer.innerHTML += `
  <div class="swiper-slide">
    <div class=" card col-3">
      <div class="card__front card__face card__face--dark">
        <div class="card__body">
          <img src="img/${project.image}" class="card__img">
        </div>
        <div class="card__footer card__footer--dark">
          <p class="card__title">${project.name}</p>
        </div>
      </div>
      <div class="card__back card__face card__face--dark">
        <div>
        ${project.description}
        </div>
        <div class="w-100 d-flex mt-1 flex-wrap" id="tags-${index}">
        </div>
      </div>
    </div>
  </div>  
  `;

  const tags = document.querySelector(`#tags-${index}`);
  project.tags.map(tag => {
    tags.innerHTML += `<span class="badge text-bg-secondary fw-bolder fst-italic m-1 text-uppercase">${tag}</span>`
  })
}) 
