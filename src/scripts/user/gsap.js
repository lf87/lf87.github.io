/*jshint strict: false */

(function() {
  'use strict';

  // GSAP Text Plugin - Variables
  const switchWrap = document.getElementById('skill-switch');
  let skillEl = document.querySelectorAll('#skill-switch-list li');
  let switchDelay = 1.5;
  let switchArray = [];

  // GSAP Text Plugin - Push each iteration to array
  [].forEach.call(skillEl, function(el) {
    switchArray.push(el.innerHTML);
  });

  // GSAP Text Plugin - Create timeline
  const tlSwitch = new TimelineMax({
    onComplete: function() {
      this.restart();
    }
  });

  // GSAP Text Plugin - Tweens
  tlSwitch.to(switchWrap, 0.75, {
      text: switchArray[0],
      delay: switchDelay,
      ease: Linear.easeNone
    })
    .to(switchWrap, 0.5, {
      text: switchArray[1],
      delay: switchDelay,
      ease: Linear.easeNone
    })
    .to(switchWrap, 1, {
      text: switchArray[2],
      delay: switchDelay,
      ease: Linear.easeNone
    })
    .to(switchWrap, 1.5, {
      text: switchArray[3],
      delay: switchDelay,
      ease: Linear.easeNone
    })
    .to(switchWrap, 1, {
      text: switchArray[4],
      delay: switchDelay,
      ease: Linear.easeNone
    })
    .to(switchWrap, 1, {
      text: switchArray[5],
      delay: switchDelay,
      ease: Linear.easeNone
    });

  // Gsap ScrollTo Plugin - Smooth Scroll to location of href
  function scrollTo(anchor) {
    let topY = anchor.offsetTop;
    event.preventDefault();
    TweenLite.to(window, 1, {
      scrollTo: {
        y: topY,
        offsetY: 10
      },
      force3D: true
    });
  }

  // Gsap ScrollTo - Pass anchor value in to scrollTo function, for each '.scroll-to' link
  let scrollToggle = document.querySelectorAll('.scroll-to');
  [].forEach.call(scrollToggle, function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      let dataID = toggle.getAttribute('href');
      let dataTarget = document.querySelector(dataID);
      if (dataTarget) {
        scrollTo(dataTarget);
      }
    }, false);
  });

}());
