// Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context.
// This strict context prevents certain actions from being taken and throws more exceptions.
// And:

// Strict mode helps out in a couple ways:

// It catches some common coding bloopers, throwing exceptions.
// It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
// It disables features that are confusing or poorly thought out.

// When the below is set to true, the comment below enables use strict globally

/*jshint strict: false */

(function() {
    'use strict';
    // Menu

    var menu = document.getElementById('menu');
    let listItems = Array.from(menu.getElementsByTagName('li'));

    const handleClick = (e) => {
        e.preventDefault();
        listItems.forEach(node => {
            node.classList.remove('active');
        });
        e.currentTarget.classList.add('active');

    };

    listItems.forEach(node => {
        node.addEventListener('click', handleClick);
    });

    // Skill Switch
    const switchWrap = document.getElementById('skill-switch');
    let skillEl = document.querySelectorAll('#skills li');
    let switchDelay = 1.5;
    let switchArray = [];

    [].forEach.call(skillEl, function(el) {
        switchArray.push(el.innerHTML); // Each iteration is pushed to an array
    });

    const tlSwitch = new TimelineMax({ onComplete: function() { this.restart(); } });

    tlSwitch.to(switchWrap, 0.75, { text: switchArray[0], delay: switchDelay, ease: Linear.easeNone })
        .to(switchWrap, 0.5, { text: switchArray[1], delay: switchDelay, ease: Linear.easeNone })
        .to(switchWrap, 1, { text: switchArray[2], delay: switchDelay, ease: Linear.easeNone })
        .to(switchWrap, 1.5, { text: switchArray[3], delay: switchDelay, ease: Linear.easeNone })
        .to(switchWrap, 1, { text: switchArray[4], delay: switchDelay, ease: Linear.easeNone })
        .to(switchWrap, 1, { text: switchArray[5], delay: switchDelay, ease: Linear.easeNone });

    // Add loaded class on page load
    window.onload = function() {
        document.body.classList.add("loaded");
    };

    // Add/Remove focus if tab pressed/Mouse clicked
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 9) {
            document.body.classList.add("show-focus-outlines");
        }
    });

    document.addEventListener('click', function(e) {
        document.body.classList.remove("show-focus-outlines");
    });

    // Scroll to specific anchor
    var $this;

    function scrollTo(index) {
        $this = $(this);
        $this.on('click', function(event) {
        console.log("index", index);
            event.preventDefault();
            TweenLite.to(window, 1, { scrollTo: { y: '#section-' + index, offsetY: 10 }, force3D: true });
        });
    }
    $('#menu > li > a').each(scrollTo);


    // Page transitions
    // Page flip
    // let i = 0;
    // let tlPageFlip = [];
    // let content = [];
    // let elContent = document.querySelectorAll('.content');
    // let elContentArr = [];
    // let elNav = [];
    // let prevClick;
    // // Loops through all menu items (equal to amount of sections/pages)
    // for (let item of listItems) {
    //     i++;
    //     // Set-up tweens
    //     elContentArr[i] = document.getElementById('content' + i);
    //     tlPageFlip[i] = new TimelineLite({ paused: true });
    //     tlPageFlip[i].to(elContentArr[i], 0.3, { x: '0' /*, onComplete: resetContent */ });
    //     tlPageFlip[i].progress(1).progress(0);

    //     // Self calling closure to (prevent overide of event listeners)
    //     (function(i) {
    //         document.getElementById('nav' + i).addEventListener('click', (event) => {
    //             tlPageFlip[i].play();
    //             console.log("tlPageFlip[i]", tlPageFlip[i]);
    //         });
    //     }(i));
    // }

}());

(function() {
    // this anonymous function is sloppy...
}());