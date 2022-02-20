'use strict';

const init = () => {
    buildNFTGlide();
    buildAboutGlide();
    scrollAnimations();
};

const buildNFTGlide = () => {
    const assets = [
        { path: "./img/nft/1.jpg", name: "cat"},
        { path: "./img/nft/2.jpg", name: "djinn"},
        { path: "./img/nft/3.jpg", name: "cyborg"},
        { path: "./img/nft/4.jpg", name: "robot"},
        { path: "./img/nft/5.jpg", name: "ruskov"},
        { path: "./img/nft/6.jpg", name: "akira"},
        { path: "./img/nft/7.jpg", name: "hunter"},
        { path: "./img/nft/8.jpg", name: "punk"},
        { path: "./img/nft/9.jpg", name: "cat"},
        { path: "./img/nft/10.jpg", name: "djinn"},
        { path: "./img/nft/11.jpg", name: "cyborg"},
        { path: "./img/nft/12.jpg", name: "arobot"},
        { path: "./img/nft/13.jpg", name: "akira"},
        { path: "./img/nft/14.jpg", name: "hunter"},
        { path: "./img/nft/15.jpg", name: "cyborg"},
        { path: "./img/nft/16.jpg", name: "akira"},
    ];
    const glideSlides = document.querySelector(".showcase-glide-container .glide__slides");

    assets.map((asset) => { 
        glideSlides.innerHTML += `
            <li class="glide__slide">
                <h2 class="nft-title-container">${asset.name}</h2>
                <img src="${asset.path}" alt="${asset.name}">
            </li>
        `;
    });
    const glideMulti = new Glide('.nft', {
        type: 'carousel',
        autoplay: 3500,
        perView: 1,
    });
    glideMulti.mount();
};


const buildAboutGlide = () => {
    const glideMulti = new Glide('.chapter', {
        type: 'carousel',
        perView: 1,
    });
    glideMulti.mount();
};


const scrollAnimations = () => {
    const navBar = document.querySelector("nav");
    const shadows = document.querySelectorAll(".shadow")
    
    let prevPos = window.pageYOffset;
    let isScrolling;

    const hideShadows = () => {
        setTimeout(() => {
            shadows.forEach((ele) => {
                ele.classList.add("hidden");
            });
        }, 500);
    };

    window.addEventListener("scroll", () => {
        let curPos = window.pageYOffset;
        if (prevPos < curPos) {
            navBar.classList.add("hidden");
            shadows.forEach((ele) => {
                ele.classList.remove("hidden");
            }); 
        } else {
            navBar.classList.remove("hidden");
            shadows.forEach((ele) => {
                ele.classList.add("hidden");
            });
        };

        if (curPos == 0) hideShadows();
        prevPos = curPos;

        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            navBar.classList.remove("hidden");    
        }, 1000);
    });

    hideShadows();
};

window.onload = init();