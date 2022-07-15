const carrusel = document.querySelector(".carousel-items");
const anchors = document.querySelectorAll(".nav-item");
const offcanvas = document.querySelector(".offcanvas");
const formulario = document.querySelector("#form_contact");
const formError = document.querySelector('#error');
const carouselContainer = document.querySelector("#carousel-container");

let interval = null;
let maxScrolltWidth = carrusel.clientWidth - carrusel.scrollLeft;
console.log(maxScrolltWidth);
let step = 1
const start = () => {
  interval = setInterval(() => {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrolltWidth) {
      step = step * -1
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 8);
};
start();

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    let breakpoint = window.scrollY;
    const tag = document.getElementById(event.target.href.split('#')[1]);
    breakpoint += tag.getBoundingClientRect().y;
    breakpoint += -87;
    window.scroll(0, breakpoint);
  })
})

let projects = new Array();
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
})
projects.map((project) => {
  carouselContainer.innerHTML = `<div class="carousel-item active">
                      <div class="card">
                        <div class="card-header">
                          <h5 class="card-title text-capitalize">${project.name}</h5>
                        </div>
                        <div class="card-body row" style ="height: 340px;">
                        <div class="col-12  h-100 col-sm-6 d-flex  align-items-center">
                        <img src="img/${project.image}" class="img-fluid">
                        </div>
                        <div class="d-none d-lg-flex col-6">
                        </div>
                        </div>
                      </div>
                    </div>`;

})

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(event.target);
  fetch(event.target.action, {
    method: formulario.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      formError.innerHTML = 'Todo ha ido correctamente';
      formError.classList = 'text-success fw-bold';
      formulario.reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(formData, 'errors')) {
          formError.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          formError.innerHTML = 'Oops! Algo ha ido mal en el proceso de envio';
        }
      })
    }
  }).catch(error => {
    formError.innerHTML = "Oops! There was a problem submitting your form"
  })
})