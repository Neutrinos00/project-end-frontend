"use strict";

const init = () => {
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  }, 2200);
};

const toggleLinks = () => {
  document.querySelector("nav").classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
};

const humbergerButtonLinks = () => {
  const nav = document.querySelector("nav");
  const links = document.querySelector(".nav-links");
  const body = document.querySelector("body");

  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    links.classList.remove("active");
    body.classList.remove("stop-scrolling");
  } else {
    nav.classList.add("active");
    links.classList.add("active");
    body.classList.add("stop-scrolling");
  }
};

const buttonLinks = () => {
  const nav = document.querySelector("nav");
  const links = document.querySelector(".nav-links");
  const body = document.querySelector("body");

  if (links.classList.contains("active")) {
    nav.classList.remove("active");
    links.classList.remove("active");
    body.classList.remove("stop-scrolling");
  }
};

const buildNFTGlide = () => {
  const glideMulti = new Glide(".nft", {
    type: "carousel",
    autoplay: 3500,
    perView: 1,
  });
  glideMulti.mount();
};

const buildAboutGlide = () => {
  const glideMulti = new Glide(".chapter", {
    type: "slider",
    perView: 1,
    rewind: false,
  });
  const chapterCounter = document.querySelector("#chapter-counter")
  glideMulti.on("run.after", () => {
    chapterCounter.innerHTML = `${glideMulti.index + 1} / 7`;
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

const openMintOverlay = () => {
  const overlay = document.querySelector(".mint-overlay");
  const container = document.querySelector(".mint-overlay-container");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelector(".nav-links");
  const body = document.querySelector("body");

  overlay.classList.add("active");
  overlay.addEventListener("click", (e) => {
    if (!e.path.includes(container)) {
      closeMintOverlay();
    }
  });
  nav.classList.remove("active");
  navLinks.classList.remove("active");
  body.classList.add("stop-scrolling");
};

const closeMintOverlay = () => {
  const mintOverlay = document.querySelector(".mint-overlay")
  const checkMark = document.querySelector(".tooltip");
  const body = document.querySelector("body");

  mintOverlay.classList.remove("active");
  body.classList.remove("stop-scrolling");
  checkMark.style.display = "none";
};

const copyPublicAdress = async () => {
  const adress = document.querySelector(".public-adress");
  const checkMark = document.querySelector(".tooltip");
  const adress_text = "addr1vyw9xuh3uryf7s66y7qgmscvtaucjq3we4rgngx76yfwyug2sqd7k";

  await navigator.clipboard.writeText(adress_text)
    .then(() => checkMark.style.display = "block");
};

buildNFTGlide();
buildAboutGlide();
buildScrollAnimations();

window.onload = init();