var tecnologias = new Swiper(".tecnologias", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".tecnologies-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
});

var proyectos = new Swiper(".proyectos", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".projects-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
}); 