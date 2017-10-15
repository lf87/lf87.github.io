/*jshint strict: false */

(function() {
  'use strict';

  // Loadash Debounce Script
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
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

  // Menu - Variables
  const menu = document.getElementById('menu');
  let listItems = Array.from(menu.getElementsByTagName('li'));

  // Menu - Add and remove classes upon click
  const handleClick = (e) => {
    e.preventDefault();
    listItems.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };

  // Menu - Add event listener to each '#menu li'
  listItems.forEach(node => {
    node.addEventListener('click', handleClick);
  });

  // Add loaded class on page load
  window.onload = function() {
    document.body.classList.add('loaded');
  };

  // Add focus class upon tab key press
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('show-focus-outlines');
    }
  });

  // Remove focus class on click
  document.addEventListener('click', function() {
    document.body.classList.remove('show-focus-outlines');
  });

  // Back to top - Variables
  let scrollY;
  let scrollPos;
  const backToTop = document.getElementById('back-to-top');

  // Back to Top - Add class to '#home' when window scrolled beyond 10px
  let addClassOnScroll = debounce(function() {
    scrollY = 10;
    scrollPos = window.pageYOffset;
    if (scrollPos >= scrollY) {
      backToTop.classList.add('scrolled');
    } else {
      backToTop.classList.remove('scrolled');
    }
  }, 250);

  // Back to Top - Create Event Listener
  window.addEventListener('scroll', function() {
    addClassOnScroll();
  });

}());
