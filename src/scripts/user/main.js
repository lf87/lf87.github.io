(function () {
    'use strict';
    ////////////////////////
    // "Global" Variables //
    ////////////////////////
    const elMenu = document.getElementById('menu');
    let elMenuLi = Array.from(elMenu.getElementsByTagName('li'));

    /////////////////////////////
    // Loadash Debounce Script //
    /////////////////////////////

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    }

    ////////////////////////
    // Add active classes //
    ////////////////////////

    function addRemoveActiveClasses() {

        // Add and remove classes to each '#menu li'
        const handleClickMenu = (e) => {
            e.preventDefault();
            elMenuLi.forEach(node => {
                node.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
        };

        //  Add event listener to each '#menu li'
        elMenuLi.forEach(node => {
            node.addEventListener('click', handleClickMenu);
        });

        // Add and remove classes to each next sibling of '.content-screenshot'
        const handleClickScreenshot = (e) => {
            e.preventDefault();
            elContentScreenshot.forEach(node => {
                node.classList.remove('active');
            });
            // e.addEventListener('transitionend', function (event) {
                e.currentTarget.classList.add('active');
            // });
        };

        //  Add event listener to each '.content-screenshot'
        let elContentScreenshot = Array.from(document.querySelectorAll('.content-screenshot'));

        elContentScreenshot.forEach(node => {
            node.addEventListener('click', handleClickScreenshot);
        });

        // Add and remove classes for parent of each '.content-overlay-close'
        const handleClickCloseScreenshot = (e) => {
            e.preventDefault();
            e.currentTarget.parentNode.classList.remove('active');
        };

        //  Add event listener to each '.content-overlay-close'
        let elContentOverlayClose = Array.from(document.querySelectorAll('.content-overlay-close'));

        elContentOverlayClose.forEach(node => {
            node.addEventListener('click', handleClickCloseScreenshot);
        });
    }

    ////////////////////////
    // Back to top button //
    ////////////////////////
    // Variables
    const backToTop = document.getElementById('back-to-top');
    let scrollY;
    let scrollPos;
    const section = document.querySelectorAll(".content, .home");
    let sections = {};
    let i = 0;

    //  Get offset from top of each '.content' section
    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop - 44;
    });

    // Run scroll function every x milliseconds
    let addClassOnScroll = debounce(function () {
        scrollY = 10;
        scrollPos = window.pageYOffset;
        // Add class to '#home' when window scrolled beyond 10px
        if (scrollPos >= scrollY) {
            backToTop.classList.add('scrolled');
        } else {
            backToTop.classList.remove('scrolled');
        }
        // Add class to each section's menu item, when visible
        for (i in sections) {
            if (sections[i] <= scrollPos) {
                document.querySelector('#menu > li.active').classList.remove('active');
                document.querySelector('.scroll-to[href*=' + i + ']').parentNode.classList.add('active');
            }
        }
    }, 200);

    /////////////////////
    // Event Listeners //
    /////////////////////

    // Scroll
    window.addEventListener('scroll', function () {
        addClassOnScroll();
    });

    // Add focus class upon tab key press
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 9) {
            document.body.classList.add('show-focus-outlines');
        }
    });

    // Remove focus class on click
    document.addEventListener('click', function () {
        document.body.classList.remove('show-focus-outlines');
    });

    //////////
    // Misc //
    //////////
    function misc() {
        // Add loaded class on page load
        window.onload = function () {
            document.body.classList.add('loaded');
        };
    }

    ///////////////////
    // Run Functions //
    ///////////////////
    misc();
    addRemoveActiveClasses();

}());