/* ==================================================
   MEIN KRUMMER WEG
   A. MOURAD
================================================== */


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");


                    revealObserver
                        .unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ==================================================
   HERO PARALLAX
================================================== */

const heroImage =
    document.querySelector(".hero-img");


function updateHeroParallax() {

    if (!heroImage) {
        return;
    }


    const scrollY =
        window.scrollY;


    const windowHeight =
        window.innerHeight;


    if (scrollY < windowHeight * 1.25) {

        const movement =
            scrollY * 0.12;


        heroImage.style.transform =
            `translateY(${movement}px) scale(1.02)`;

    }

}


window.addEventListener(
    "scroll",
    updateHeroParallax,
    {
        passive: true
    }
);


/* ==================================================
   HANDWRITING MOVEMENT
================================================== */

const handElements =
    document.querySelectorAll(".hand");


document.addEventListener(
    "mousemove",
    (event) => {

        if (window.innerWidth < 900) {
            return;
        }


        const mouseX =
            event.clientX /
            window.innerWidth -
            0.5;


        const mouseY =
            event.clientY /
            window.innerHeight -
            0.5;


        handElements.forEach(

            (element, index) => {

                const strength =
                    index % 2 === 0
                        ? 3
                        : -3;


                const moveX =
                    mouseX *
                    strength;


                const moveY =
                    mouseY *
                    strength;


                element.style.translate =
                    `${moveX}px ${moveY}px`;

            }

        );

    }
);


/* ==================================================
   SMOOTH INTERNAL LINKS
================================================== */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const href =
                link.getAttribute("href");


            if (!href || href === "#") {
                return;
            }


            const target =
                document.querySelector(href);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    );

});


/* ==================================================
   SUBTLE IMAGE PARALLAX
================================================== */

const movementImage =
    document.querySelector(
        ".movement > img"
    );


const problemImage =
    document.querySelector(
        ".problem > img"
    );


function imageParallax() {

    const viewportHeight =
        window.innerHeight;


    if (movementImage) {

        const movementRect =
            movementImage
                .parentElement
                .getBoundingClientRect();


        if (
            movementRect.bottom > 0 &&
            movementRect.top < viewportHeight
        ) {

            const progress =
                (
                    viewportHeight -
                    movementRect.top
                ) /
                (
                    viewportHeight +
                    movementRect.height
                );


            const offset =
                (progress - 0.5) * 40;


            movementImage.style.transform =
                `scale(1.06) translateY(${offset}px)`;

        }

    }


    if (problemImage) {

        const problemRect =
            problemImage
                .parentElement
                .getBoundingClientRect();


        if (
            problemRect.bottom > 0 &&
            problemRect.top < viewportHeight
        ) {

            const progress =
                (
                    viewportHeight -
                    problemRect.top
                ) /
                (
                    viewportHeight +
                    problemRect.height
                );


            const offset =
                (progress - 0.5) * 35;


            problemImage.style.transform =
                `scale(1.06) translateY(${offset}px)`;

        }

    }

}


window.addEventListener(
    "scroll",
    imageParallax,
    {
        passive: true
    }
);


/* ==================================================
   INITIAL LOAD
================================================== */

window.addEventListener(
    "load",
    () => {

        updateHeroParallax();

        imageParallax();

    }
);
