(function() {
    'use strict';
    //////////////////////
    // GSAP Text Plugin //
    //////////////////////

    function gsapTextPlugin() {

        // Variables
        const elSkillSwitch = document.getElementById('skill-switch');
        let elSkillSwitchListLi = document.querySelectorAll('#skill-switch-list li');
        let switchDelay = 1.5;
        let switchArray = [];
        let text;
        let textLength;
        let duration;

        // Create timeline
        const tlSwitch = new TimelineMax({
            onComplete: function() {
                this.restart();
            }
        });

        // Loop through skill switch list and push each iteration to array
        [].forEach.call(elSkillSwitchListLi, function(el) {
            switchArray.push(el.innerHTML);

            // Get inner text length and divide by 10 to use as tween duration
            text = el.innerText;
            textLength = parseInt(text.trim().length);
            duration = textLength / 10;

            // Set Minmum duration of 1
            if (duration < 1) {
                duration = 1;
            }

            // Set-up tweens
            tlSwitch.to(elSkillSwitch, duration, {
                text: text,
                delay: switchDelay,
                ease: Linear.easeNone
            });
        });
    }

    //////////////////////////
    // Gsap ScrollTo Plugin //
    //////////////////////////

    function gsapScrollToPlugin() {

        // Variables
        let scrollToggle = document.querySelectorAll('.scroll-to');
        let topY;
        let dataID;
        let dataTarget;

        // Smooth Scroll to location of href
        function scrollTo(anchor) {
            event.preventDefault();

            // Get offset from top of anchor point
            topY = anchor.offsetTop;

            // Tween to anchor point
            TweenLite.to(window, 1, {
                scrollTo: {
                    y: topY,
                    offsetY: 10
                },
                force3D: true
            });
        }

        // Pass anchor value in to scrollTo function, for each '.scroll-to' link
        [].forEach.call(scrollToggle, function(toggle) {

            // Add click event listener
            toggle.addEventListener('click', function(e) {
                e.preventDefault();

                // Get href attribute
                dataID = toggle.getAttribute('href');
                console.log("dataID", dataID);

                // Store each element for later usage
                dataTarget = document.querySelector(dataID);
                console.log("dataTarget", dataTarget);

                // If it exists then pass value in to the scrollTo function
                if (dataTarget) {
                    scrollTo(dataTarget);
                }
            }, false);
        });
    }

    ///////////////////
    // Run Functions //
    ///////////////////
    gsapTextPlugin();
    gsapScrollToPlugin();

}());