'use strict';


const init = () => {
    
    let glideMulti = new Glide('.multi', {
        type: 'carousel',
        autoplay: 3500,
        perView: 3 
    });

    //navBarDisplay();
    glideMulti.mount();
};


// const navBarDisplay = () => {
//     const navBar = document.querySelector("nav");  

//     let prevScrollY = window.scrollY;

//     window.addEventListener("scroll", () => {
//         Promise(() => {
//             let curScrollY = window.scrollY;
//             if (curScrollY > prevScrollY) {
//                 navBar.classList.add("hidden_");
//             };
//             prevScrollY = curScrollY;
//         }).resolve().then(console.log)
//     });
// };




window.onload = init();