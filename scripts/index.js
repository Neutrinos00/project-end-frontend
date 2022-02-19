'use strict';


const init = () => {
    buildGlide();
    scrollAnimations()
};

const buildGlide = () => {
    const assets = [
        { path: "./img/nft/1.jpg", name: "cat"},
        { path: "./img/nft/2.jpg", name: "djinn"},
        { path: "./img/nft/3.jpg", name: "cyborg"},
        { path: "./img/nft/4.jpg", name: "robot"},
        { path: "./img/nft/5.jpg", name: "ruskov"},
        { path: "./img/nft/6.jpg", name: "akira"},
        { path: "./img/nft/7.jpg", name: "hunter"},
        { path: "./img/nft/8.jpg", name: "punk"},
        { path: "./img/nft/9.jpg", name: "a"},
        { path: "./img/nft/10.jpg", name: "a"},
        { path: "./img/nft/11.jpg", name: "a"},
        { path: "./img/nft/12.jpg", name: "a"},
        { path: "./img/nft/13.jpg", name: "a"},
        { path: "./img/nft/14.jpg", name: "a"},
        { path: "./img/nft/15.jpg", name: "a"},
        { path: "./img/nft/16.jpg", name: "a"},
    ];
    const glideSlides = document.querySelector(".glide__slides");

    assets.map((asset) => { 
        glideSlides.innerHTML += `
            <li class="glide__slide">
                <h2 class="nft-title-container">${asset.name}</h2>
                <img src="${asset.path}" alt="${asset.name}">
            </li>
        `;
    });

    const glideMulti = new Glide('.multi', {
        type: 'carousel',
        autoplay: 3500,
        perView: 1
    });
    glideMulti.mount();
};

const scrollAnimations = () => {
    const navBar = document.querySelector("nav");
    const shadow1 = document.querySelector(".cyborg > .shadow");
    const shadow2 = document.querySelector(".djinn > .shadow");
    const shadow3 = document.querySelector(".hunter > .shadow");
    const shadow4 = document.querySelector(".cat > .shadow");
    
    let prevPos = window.pageYOffset;
    window.addEventListener("scroll", () => {
        let curPos = window.pageYOffset
        if (prevPos < curPos) {
            navBar.classList.add("hidden");
            shadow1.classList.add("disp");
            shadow2.classList.add("disp");
            shadow3.classList.add("disp");
            shadow4.classList.add("disp");
        } else {
            navBar.classList.remove("hidden");
            shadow1.classList.remove("disp");
            shadow2.classList.remove("disp");
            shadow3.classList.remove("disp");
            shadow4.classList.remove("disp");
        }
        prevPos = curPos;
    });
};

window.onload = init();