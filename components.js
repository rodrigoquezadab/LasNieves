document.addEventListener("DOMContentLoaded", function () {
    // Cargar Menú
    const basePath = window.location.pathname.includes('/paginas/') ? './' : 'paginas/';
    fetch(basePath + 'menu.html')
        .then(response => response.text())
        .then(data => {
            const menuContainer = document.getElementById('menu-container');
            if(menuContainer) {
                menuContainer.innerHTML = data;
    
                // Lógica del menú móvil con icono interactivo y accesibilidad
                const menuToggle = document.getElementById('menu-toggle');
                const mobileMenu = document.getElementById('mobile-menu');
                if (menuToggle && mobileMenu) {
                    menuToggle.addEventListener('click', () => {
                        const isHidden = mobileMenu.classList.toggle('hidden');
                        menuToggle.setAttribute('aria-expanded', !isHidden);
                        const icon = menuToggle.querySelector('i');
                        if (icon) {
                            if (isHidden) {
                                icon.classList.remove('fa-times');
                                icon.classList.add('fa-bars');
                            } else {
                                icon.classList.remove('fa-bars');
                                icon.classList.add('fa-times');
                            }
                        }
                    });
                }
    
                // Arreglar enlaces del menú dinámicamente según dónde estemos
                const inPaginas = window.location.pathname.includes('/paginas/') || window.location.pathname.includes('\\paginas\\');
                const links = menuContainer.querySelectorAll('a');
                links.forEach(link => {
                    let href = link.getAttribute('href');
                    if (!href || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) return;
                    
                    const fileName = href.split('/').pop().split('\\').pop();
                    
                    if (inPaginas) {
                        if (fileName === 'index.html') link.setAttribute('href', '../index.html');
                        else link.setAttribute('href', fileName);
                    } else {
                        if (fileName === 'index.html') link.setAttribute('href', 'index.html');
                        else link.setAttribute('href', 'paginas/' + fileName);
                    }
                });

                // Arreglar logos/imágenes del menú dinámicamente
                if (inPaginas) {
                    menuContainer.querySelectorAll('img').forEach(img => {
                        let src = img.getAttribute('src');
                        if (src && src.startsWith('assets/')) img.setAttribute('src', '../' + src);
                    });
                }

                // Marcar enlace activo únicamente en los ítems de navegación (.nav-link)
                const pathInfo = window.location.pathname.split('/');
                const currentPage = pathInfo[pathInfo.length - 1] || 'index.html';
                const navLinks = menuContainer.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    const finalHref = link.getAttribute('href');
                    const linkFile = finalHref ? finalHref.split('/').pop().split('\\').pop() : '';
                    if (linkFile === currentPage || (currentPage === '' && linkFile === 'index.html')) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        })
        .catch(error => console.error('Error al cargar el menú:', error));

    // Cargar Footer (incluye botones flotantes)
    fetch(basePath + 'footer.html')
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.getElementById('footer-container');
            if(footerContainer) {
                footerContainer.innerHTML = data;
                
                const inPaginas = window.location.pathname.includes('/paginas/') || window.location.pathname.includes('\\paginas\\');
                const links = footerContainer.querySelectorAll('a');
                links.forEach(link => {
                    let href = link.getAttribute('href');
                    if (!href || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) return;
                    
                    const fileName = href.split('/').pop().split('\\').pop();
                    if (inPaginas) {
                        if (fileName === 'index.html') link.setAttribute('href', '../index.html');
                        else link.setAttribute('href', fileName);
                    } else {
                        if (fileName === 'index.html') link.setAttribute('href', 'index.html');
                        else link.setAttribute('href', 'paginas/' + fileName);
                    }
                });
    
                // Lógica botón subir
                window.addEventListener('scroll', () => {
                    const btnSubirDiv = document.getElementById('btnSubir');
                    if (btnSubirDiv) {
                        if (window.scrollY > 300) btnSubirDiv.classList.remove('hidden');
                        else btnSubirDiv.classList.add('hidden');
                    }
                });
            }
        })
        .catch(error => console.error('Error al cargar el footer:', error));
});
