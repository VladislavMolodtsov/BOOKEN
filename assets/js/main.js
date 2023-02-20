'use strict';

window.addEventListener('DOMContentLoaded', () => {

        // Add event on elements
        const addEventOnElem = function(elem, type, callback) {
                
                if (elem.length > 1) {
                        for (let i = 0; i < elem.length; i++) {
                                elem[i].addEventListener(type, callback);
                        } 
                } else {
                                elem.addEventListener(type, callback);
                }
        };

        // Navbar Toggle
        const navbar = document.querySelector('[data-navbar]');
        const navTogglers = document.querySelectorAll('[data-nav-toggler]');
        const overlay = document.querySelector('[data-overlay]');

        const togglerNavbar = function() {
                navbar.classList.toggle('active');
                overlay.classList.toggle('active');
        }

        addEventOnElem(navTogglers, 'click', togglerNavbar);

});