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

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("nav-menu");
    const toggleBtn = document.getElementById("menu-toggle");

    // Cerrar el menú si el mouse sale del área del menú
    menu.addEventListener("mouseleave", () => {
        menu.classList.add("hidden");
    });

    // Cerrar el menú si se hace clic fuera del menú y del botón de hamburguesa
    document.addEventListener("click", (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggle = toggleBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
            menu.classList.add("hidden");
        }
    });
});
