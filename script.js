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


/* subtle hero parallax */

const heroImage = document.querySelector(".hero-img");

window.addEventListener("scroll", () => {
  if (!heroImage) return;

  const scroll = window.scrollY;

  if (scroll <= window.innerHeight) {
    heroImage.style.transform =
      `scale(1.025) translateY(${scroll * 0.045}px)`;
  }
});


/* tiny movement for handwritten elements */

const scribbles = document.querySelectorAll(".scribble");

window.addEventListener("mousemove", (event) => {

  if (window.innerWidth < 900) return;

  const x =
    (event.clientX / window.innerWidth - 0.5) * 2;

  const y =
    (event.clientY / window.innerHeight - 0.5) * 2;

  scribbles.forEach((item, index) => {

    const strength =
      (index % 3 + 1) * 0.7;

    item.style.translate =
      `${x * strength}px ${y * strength}px`;

  });

});
