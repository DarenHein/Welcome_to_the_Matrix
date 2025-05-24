let lastScrollTop = 0;

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("hidden");

    // Evento para cerrar el menú si se hace clic en un enlace
    if (!menu.classList.contains("hidden")) {
        const links = menu.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.add("hidden");
            });
        });
    }
}

// Cerrar el menú si el mouse sale del área del menú
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("nav-menu");

    menu.addEventListener("mouseleave", () => {
        menu.classList.add("hidden");
    });
});

window.addEventListener("scroll", () => {
    const toggleBtn = document.getElementById("menu-toggle");
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo -> ocultar el botón
        toggleBtn.style.opacity = "0";
        toggleBtn.style.pointerEvents = "none";
    } else {
        // Scroll hacia arriba -> mostrar el botón
        toggleBtn.style.opacity = "1";
        toggleBtn.style.pointerEvents = "auto";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar scroll negativo
});
