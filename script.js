/* =========================================
   REVEAL ON SCROLL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.1
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});


/* =========================================
   HERO PARALLAX
========================================= */

const heroImage = document.querySelector(".hero-img");

function heroParallax() {

  if (!heroImage) return;

  const scrollY = window.scrollY;

  if (scrollY <= window.innerHeight * 1.2) {

    const movement = scrollY * 0.04;

    heroImage.style.transform =
      `scale(1.03) translateY(${movement}px)`;

  }

}

window.addEventListener(
  "scroll",
  heroParallax,
  { passive: true }
);


/* =========================================
   SUBTLE HANDWRITING MOVEMENT
========================================= */

const handwritten = document.querySelectorAll(".hand");

window.addEventListener("mousemove", (event) => {

  if (window.innerWidth <= 900) return;

  const mouseX =
    (event.clientX / window.innerWidth - 0.5) * 2;

  const mouseY =
    (event.clientY / window.innerHeight - 0.5) * 2;

  handwritten.forEach((element, index) => {

    const amount =
      0.35 + ((index % 3) * 0.25);

    element.style.translate =
      `${mouseX * amount}px ${mouseY * amount}px`;

  });

});


/* =========================================
   SMOOTH INTERNAL LINKS
========================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });
