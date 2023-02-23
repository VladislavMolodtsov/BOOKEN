'use strict';

window.addEventListener('DOMContentLoaded', () => {


        /* 
                ADD EVENT ON ELEMENTS 
        */

        const addEventOnElem = function(elem, type, callback) {
                
                if (elem.length > 1) {

                        for (let i = 0; i < elem.length; i++) {
                                elem[i].addEventListener(type, callback);
                        }

                } else {

                        elem.addEventListener(type, callback);

                }

        };


        /*
                NAVBAR TOGGLE
        */

        const navbar = document.querySelector('[data-navbar]');
        const navTogglers = document.querySelectorAll('[data-nav-toggler]');
        const overlay = document.querySelector('[data-overlay]');

        const togglerNavbar = function() {

                navbar.classList.toggle('active');
                overlay.classList.toggle('active');

        }

        addEventOnElem(navTogglers, 'click', togglerNavbar);

        
        /*
                ACTION HEADER & BACK TOP BTN WHEN WINDOW SCROLL DOWN TO 100PX
        */

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


        /*
                FILTER FUNCTIONALITY
        */

        const filterBtn = document.querySelectorAll("[data-filter-btn]"); // filterBtn
        const filterItems = document.querySelectorAll("[data-filter]"); // filter

        function hideTab() {
                filterBtn.forEach(item => {
                        item.classList.remove('active');
                });
        }
        showTab();
        function showTab(i = 0) {

                if (filterBtn[i].dataset.filterBtn === 'all') {

                        filterItems.forEach(item => {

                                item.style.display = 'block';
                                filterBtn[i].classList.add('active');
                
                        });
                        
                } else {
                        filterItems.forEach(item => {

                                if (filterBtn[i].dataset.filterBtn === item.dataset.filter) {
                                        item.style.display = 'block';
                                        filterBtn[i].classList.add("active");
                                } else {
                                        item.style.display = 'none';
                                        filterBtn[i].classList.remove('active');
                                }
                
                        }); 
                }

        }

        filterBtn.forEach((item, i) => {
                item.addEventListener('click', () => {
                        hideTab();
                        showTab(i);
                });
        });
});