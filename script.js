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
