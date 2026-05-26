//GA Tracking
function initTracking() {
  const domain = window.location.hostname;
  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    const button = e.target.closest("button");
    if (link) {
      const href = link.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      )
        return;
      const isExternal = href.startsWith("http") && !href.includes(domain);
      if (isExternal) {
        gtag("event", "external_link_click", {
          link_url: href,
          link_text: link.innerText.trim() || "(no text)",
        });
      } else {
        gtag("event", "internal_link_click", {
          link_url: href,
          link_text: link.innerText.trim() || "(no text)",
        });
      }
    }
    if (button) {
      gtag("event", "button_click", {
        button_id: button.id || "(no id)",
        button_text: button.innerText.trim() || "(no text)",
      });
    }
  });
}

window.onload = function () {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-ED4J0PBTKM";
  script.async = true;
  script.onload = function () {
    initTracking();
  };
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-ED4J0PBTKM", {
    anonymize_ip: true,
    storage: "none",
    client_storage: "none",
  });
};

//Hamburger Menu JS
const toggleButton = document.getElementsByClassName("toggle-button")[0];

if (toggleButton) {
  const navBarLinks = document.getElementsByClassName("navlinks")[0];
  const title = document.getElementsByClassName("title")[0];

  toggleButton.addEventListener("click", () => {
    navBarLinks.classList.toggle("active");
    title.classList.toggle("active");
  });
}

//Contact Form JS

const contactForm = document.getElementById("contact");

if (contactForm) {
  const banner = document.getElementsByClassName("formsubmittedbanner")[0];
  const close = document.getElementsByClassName("closebtn")[0];

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    const response = await fetch("https://www.ryanshill.com/api/contact", {
      method: "POST",
      body: new URLSearchParams(formData),
    });

    if (response.ok) {
      banner.classList.toggle("active");
    }
  });

  close.addEventListener("click", () => {
    banner.classList.toggle("active");
  });
}

//Projects Page JS
//animation for card movement
const thumbnails = document.querySelectorAll(".thumbnail");

function startHandler(event) {
  if (document.documentElement.clientWidth >= 550) {
    const graphicActive = event.target.querySelector(".projectgraphic");
    const leftActive = event.target.querySelector(".left");
    const mobileRightActive = event.target.querySelector(".mobileright");
    const mobileLeftActive = event.target.querySelector(".mobileleft");

    if (
      event.pointerType === "touch" ||
      event.pointerType === "pen" ||
      event.pointerType === "mouse"
    ) {
      event.preventDefault();

      graphicActive.classList.add("graphic-active");
      if (window.clientWidth < 1000) {
        mobileLeftActive.classList.add("mobile-left");
        mobileRightActive.classList.add("mobile-right");
      } else {
        leftActive.classList.add("left-active");
      }

      setTimeout(function () {
        graphicActive.classList.remove("graphic-active");
        leftActive.classList.remove("left-active");
        mobileLeftActive.classList.remove("mobile-left");
        mobileRightActive.classList.remove("mobile-right");
      }, 10000);
    }
  }
}

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("pointerenter", startHandler, false);
}

function endHandler(event) {
  if (document.documentElement.clientWidth >= 550) {
    const graphicActive = event.target.querySelector(".projectgraphic");
    const leftActive = event.target.querySelector(".left");
    const mobileRightActive = event.target.querySelector(".mobileright");
    const mobileLeftActive = event.target.querySelector(".mobileleft");

    if (
      event.pointerType === "touch" ||
      event.pointerType === "pen" ||
      event.pointerType === "mouse"
    ) {
      event.preventDefault();

      graphicActive.classList.remove("graphic-active");
      if (window.clientWidth < 1000) {
        mobileLeftActive.classList.remove("mobile-left");
        mobileRightActive.classList.remove("mobile-right");
      } else {
        leftActive.classList.remove("left-active");
      }
    }
  }
}
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("pointerleave", endHandler, false);
}

//animation for page load - card dealing
window.addEventListener("load", () => {
  if (document.documentElement.clientWidth >= 580) {
    const middleCard = thumbnails[4].getBoundingClientRect();
    const centerX = middleCard.left + middleCard.width / 2;
    const centerY = middleCard.top + middleCard.height / 2;

    for (let i = 0; i < thumbnails.length; i++) {
      const cardLocation = thumbnails[i].getBoundingClientRect();
      const cardsX = cardLocation.left + cardLocation.width / 2;
      const cardsY = cardLocation.top + cardLocation.height / 2;
      const travelX = cardsX - centerX;
      const travelY = cardsY - centerY;

      thumbnails[i].style.transform = `translate(${-travelX}px, ${-travelY}px)`;

      setTimeout(
        function () {
          thumbnails[i].style.transition = "transform 1s ease, opacity 1s ease";
        },
        500 + i * 200,
      );

      setTimeout(
        function () {
          thumbnails[i].style.transform = "none";
          thumbnails[i].style.opacity = "1";
        },
        501 + i * 200,
      );
    }
  }
});

//Mobile Modals
const modal = document.querySelectorAll(".thumbnail");

if (modal.length) {
  let targetModal;
  
  for (let i = 0; i < modal.length; i++) {
    modal[i].addEventListener("click", (event) => {
      if (document.documentElement.clientWidth <= 600) {
        if (targetModal) {
      targetModal.classList.remove("active");
    }
      targetModal = document.querySelector(
        "." + event.currentTarget.dataset.modal,
      );
      targetModal.classList.add("active");
  }});
  }
  const close = document.querySelectorAll(".closebutton");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      targetModal.classList.remove("active");
    });
  }
}


//animation for page load - diagnol slide

/* window.addEventListener('load', () => {
       const middleCard = thumbnails[4].getBoundingClientRect();
       const centerX = middleCard.left + middleCard.width / 2 + window.scrollX;
       const centerY = middleCard.top + middleCard.height / 2 + window.scrollY;

        for (let i = 0; i < thumbnails.length; i++) {
            const cardLocation = thumbnails[i].getBoundingClientRect();
            const travelX = cardLocation.left - centerX;
            const travelY = cardLocation.top - centerY;

            thumbnails[i].style.transform = `translate(${-travelX}px, ${-travelY}px)`;

            setTimeout(function() {
                thumbnails[i].style.transition = 'transform 1s ease';
            }, 500);

            setTimeout(function() {
                thumbnails[i].style.transform = 'none';
            }, 501);
        }
}); */

//annimation for page load - random matrix
/*window.addEventListener('load', () => {
    for (let i=0; i < thumbnails.length; i++) {
    thumbnails[i].classList.add('load-animation')
thumbnails[i].style.animationDelay = Math.random() * 2 + "s"
}
})*/
