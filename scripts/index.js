'use strict';


const init = () => {
    buildGlide();
    // locomotiveScroll();
};

const buildGlide = () => {
    const glideSlides = document.querySelector(".glide__slides");
    const paths = [
        "./img/nft/1.png",
        "./img/nft/2.jpg",
        "./img/nft/3.jpg",
        "./img/nft/4.jpg",
        "./img/nft/5.jpg",
        "./img/nft/6.jpg",
        "./img/nft/7.jpg",
        "./img/nft/8.jpg",
        "./img/nft/9.jpg",,
        "./img/nft/10.jpg",
        "./img/nft/11.jpg",
        "./img/nft/12.jpg",
        "./img/nft/13.jpg",
        "./img/nft/14.jpg",
        "./img/nft/15.jpg",
        "./img/nft/16.jpg",
    ];

    paths.map((path) => {
        glideSlides.innerHTML += `
            <li class="glide__slide">
                <h2 class="nft-title-container"># 1000</h2>
                <img src="${path}" alt="" loading="lazy">
            </li>
        `;
    });

    let glideMulti = new Glide('.multi', {
        type: 'carousel',
        autoplay: 3500,
        perView: 1
    });
    glideMulti.mount();
};

// const locomotiveScroll = () => {
    // let scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // });
// };


window.onload = init();