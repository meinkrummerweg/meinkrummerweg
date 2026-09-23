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
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});


/* very subtle hero movement */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {
  if (!heroImage) return;

  const y = window.scrollY;

  if (y < window.innerHeight) {
    heroImage.style.transform =
      `scale(1.02) translateY(${y * 0.05}px)`;
  }
});
