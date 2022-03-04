"use strict";

const init = () => {
  buildNFTGlide();
  buildAboutGlide();
  buildScrollAnimations();

  const loader = document.querySelector(".loader");
  const body = document.querySelector("body");
  loader.style.display = "none";
  body.style.overflow = "scroll";
};

const toggleLinks = (isButton) => {
  document.querySelector("nav").classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
  if (isButton) {
    document.querySelector("body").classList.toggle("stop-scrolling");
  } else {
    document.querySelector("body").classList.remove("stop-scrolling");
  }
};

const buildNFTGlide = () => {
  const assets = [
    { path: "./img/nft/1.jpg", name: "Cat" },
    { path: "./img/nft/2.jpg", name: "Djinn" },
    { path: "./img/nft/3.jpg", name: "Cyborg" },
    { path: "./img/nft/4.jpg", name: "Robot" },
    { path: "./img/nft/5.jpg", name: "Ruskov" },
    { path: "./img/nft/6.jpg", name: "Akira" },
    { path: "./img/nft/7.jpg", name: "Hunter" },
    { path: "./img/nft/8.jpg", name: "Punk" },
  ];
  const glideSlides = document.querySelector(
    ".showcase-glide-container .glide__slides"
  );

  assets.map((asset) => {
    glideSlides.innerHTML += `
            <li class="glide__slide">
                <img src="${asset.path}" alt="${asset.name}">
            </li>
        `;
  });
  const glideMulti = new Glide(".nft", {
    type: "carousel",
    autoplay: 3500,
    perView: 1,
  });
  glideMulti.mount();
};

const buildAboutGlide = () => {
  const glideMulti = new Glide(".chapter", {
    type: "carousel",
    perView: 1,
  });
  glideMulti.on("run.after", () => {
    document.getElementById("a-about").scrollIntoView();
  });
  glideMulti.mount();

  const buildAboutGlideToggleButton = () => {
    const buttons = document.querySelectorAll(
      ".text-navigation-container > button"
    );
    let currentActive = buttons[0];
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (currentActive != button) {
          const img = button.querySelector(".img");
          const currentImg = currentActive.querySelector(".img");

          img.classList.add("active");
          currentImg.classList.remove("active");

          currentActive = button;
        }
      });
    });
  };
  buildAboutGlideToggleButton();
};

const buildScrollAnimations = () => {
  const navBar = document.querySelector("nav");
  const shadows = document.querySelectorAll(".shadow");

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
    }

    if (curPos == 0) hideShadows();
    prevPos = curPos;

    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      navBar.classList.remove("hidden");
    }, 1000);
  });

  hideShadows();
};

const openPaymentWindow = () => {
  const paymentUrl =
    "https://payment-testnet.nft-maker.io/?p=e164718a34ae48f196626d49a76adfd1&c=1";
  const popupWidth = 500;
  const popupHeight = 700;
  const left = window.top.outerWidth / 2 + window.top.screenX - popupWidth / 2;
  const top = window.top.outerHeight / 2 + window.top.screenY - popupHeight / 2;
  const popup = window.open(
    paymentUrl,
    "your-window-title",
    `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`
  );

  const backgroundCheck = setInterval(() => {
    if (popup.closed) {
      clearInterval(backgroundCheck);
      document.body.style = "";
    }
  }, 1000);
};

window.onload = init();
