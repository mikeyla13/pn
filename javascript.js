
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    const menuIcon = document.querySelector('.menu-icon');
    nav.classList.toggle('active'); // Muestra o esconde el menú
    menuIcon.classList.toggle('open'); // Cambia el ícono de hamburguesa a "X"
}
