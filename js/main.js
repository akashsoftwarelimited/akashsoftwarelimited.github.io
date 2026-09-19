(() => {
    "use strict";

    const body = document.body;
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelectorAll(".site-nav a");
    const revealElements = document.querySelectorAll(".reveal");

    // Mobile navigation.
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            const isOpen = body.classList.toggle("menu-open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            body.classList.remove("menu-open");

            if (menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation");
            }
        });
    });

    // Reveal content when it enters the viewport.
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach((element) => observer.observe(element));
    } else {
        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });
    }
})();
