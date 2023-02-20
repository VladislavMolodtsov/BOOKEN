'use strict';

window.addEventListener('DOMContentLoaded', () => {


        // Add event on elements
        const addEventOnElem = function(elem, type, callback) {
                
                if (elem.length > 1) {

                        for (let i = 0; i < elem.length; i++) {
                                elem[i].addEventListener(type, callback);
                        }

                }
                elem.addEventListener(type, callback);

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

        
        // action header & back top btn when window scroll down to 100px

        const header = document.querySelector('[data-header]');
        // const backTopBtn = document.querySelector('[data-back-top-btn]');

        const activeElemOnScroll = function() {

                if (window.scrollY > 100) {

                        header.classList.add('active');
                        // backTopBtn.classList.add('active');

                }
                header.classList.remove('active');
                // backTopBtn.classList.remove('active');
        }

        addEventOnElem(window, 'scroll', activeElemOnScroll);

});