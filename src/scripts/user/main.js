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

    //////////
    // Menu //
    //////////

    function menu() {

        // Add and remove classes upon click
        const handleClick = (e) => {
            e.preventDefault();
            elMenuLi.forEach(node => {
                node.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
        };

        //  Add event listener to each '#menu li'
        elMenuLi.forEach(node => {
            node.addEventListener('click', handleClick);
        });
    }

    ////////////////////////
    // Back to top button //
    ////////////////////////
    // Variables
    let scrollY;
    let scrollPos;
    const backToTop = document.getElementById('back-to-top');

    // Add class to '#home' when window scrolled beyond 10px
    let addClassOnScroll = debounce(function () {
        scrollY = 10;
        scrollPos = window.pageYOffset;
        if (scrollPos >= scrollY) {
            backToTop.classList.add('scrolled');
        } else {
            backToTop.classList.remove('scrolled');
        }
    }, 100);



    /////////////////////////////////////////////////////
    // Add class to menu items when section is visible //
    /////////////////////////////////////////////////////
    let section = document.querySelectorAll(".content");
    let sections = {};
    let i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });
    let addClassToSectionOnScroll = debounce(function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').classList.remove('active');
                document.querySelector('a[href*=' + i + ']').parentNode.classList.add('active');
            }
        }
    }, 50);


    /////////////////////
    // Event Listeners //
    /////////////////////
    // Scroll
    window.addEventListener('scroll', function () {
        addClassOnScroll();
        addClassToSectionOnScroll();
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
    menu();

}());