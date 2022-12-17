const formulario = document.querySelector("#form");
const formError = document.querySelector('#error');
const downloadButton = document.querySelector('#download-button');

// ----------------------------------------------- Descarga de arvhivo -----------------------------------------------------
const download = (path, goBlank, fileName) => {
    const downloadInstance = document.createElement('a');
    downloadInstance.href = path;
    downloadInstance.target = goBlank ? '_blank' : '';

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
};

downloadButton.addEventListener('click', () => {
    download('assets/files/Hoja-de-vida-Julian-2.pdf', true, 'Hoja-de-vida-julian')
});
// ------------------------------------------------ Formulario ----------------------------------------------------------------

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);

    const response =  await fetch('https://formspree.io/f/xlezyjov', {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        formulario.reset();
        alert('Gracias por contactarte conmigo, te estaré respondiendo muy pronto :)')
    }else{
        formulario.reset();
        alert("Oh no! algo ha ido mal a la hora de enviar el correo intentalo mas tarde :'(")
    }
}

formulario.addEventListener('submit', handleSubmit);