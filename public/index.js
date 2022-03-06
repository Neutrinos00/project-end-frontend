"use strict";

const init = () => {
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  }, 2200)
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

buildNFTGlide();
buildAboutGlide();
buildScrollAnimations();

window.onload = init();
