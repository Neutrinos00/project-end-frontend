'use strict';


const init = () => {
    buildGlide();
    locomotiveScroll();
};

const buildGlide = () => {
    const glideSlides = document.querySelector(".glide__slides");
    const paths = [
        "./img/1.png",
        "./img/2.jpg",
        "./img/3.jpg",
        "./img/4.jpg",
        "./img/5.jpg",
        "./img/6.jpg",
        "./img/7.jpg",
        "./img/8.jpg",
        "./img/9.jpg",,
        "./img/10.jpg",
        "./img/11.jpg",
        "./img/12.jpg",
        "./img/13.jpg",
        "./img/14.jpg",
        "./img/15.jpg",
        "./img/16.jpg",
    ];

    paths.map((path) => {
        glideSlides.innerHTML += `
            <li class="glide__slide">
                <img src="${path}" alt="">
            </li>
        `;
    });

    let glideMulti = new Glide('.multi', {
        type: 'carousel',
        autoplay: 3500,
        perView: 3 
    });
    glideMulti.mount();
};

const locomotiveScroll = () => {
    // let scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // });
};


window.onload = init();