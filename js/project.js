const projectsContainer = document.getElementById('projects-container');
const projects = new Array();

projects.push({
  name: "formularios en react",
  image: 'react-form.png',
  github_link: 'https://github.com/Sleek1307/react-form',
  project_link: '#',
  tags: [
    'html',
    'css',
    'javascript',
    'react',
  ]
}, {
  name: "calculadora",
  image: "calculadora.png",
  github_link: "https://github.com/Sleek1307/calculadora",
  project_link: '#',
  tags: [
    'html',
    'css',
    'javascript',
    'jQuery',
  ]
});
projects.map((project, index) => {
  projectsContainer.innerHTML += `
    <div class="col-sm-6 col-lg-4 col-12 d-flex justify-content-center my-3">
      <div class="card oswald" style="height: 400px; width: 350px;">
        <div class="card-header " style="height: 55px;">
          <h3 class="text-capitalize text-center">
            ${project.name}
          </h3>
        </div>
        <div class="card-body d-flex justify-content-center align-items-end bg-img" style ="background: url(img/${project.image}); height: 345px">
          <div class="w-100 row">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <a href="#" class="btn btn-secondary" style="width: 100px !important;">
                Ver proyecto
              </a>
            </div>
            <div class="col-6 d-flex justify-content-center align-items-center">
              <a href="${project.github_link}" class="btn btn-secondary" style="width: 110px !important;" target="_blank">
                Ver en github
              </a>
            </div>
            <div id="tags-${index}" class="d-flex flex-wrap justify-content-center">
            </div>
          </div>
        </div>
      </div>
    </div>`;

  const tags = document.querySelector(`#tags-${index}`);
  project.tags.map(tag => {
    tags.innerHTML += `<span class="badge text-bg-secondary fw-bolder fst-italic m-1 text-uppercase">${tag}</span>`
  })
}) 
