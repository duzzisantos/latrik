// THE SCRIPT BEHIND THE FADE-IN PROPERTY ON LATRIK SOLUTIONS//

(function () {
    var elements;
    var windowHeight;
    function init() {
        elements = document.querySelectorAll(".hidden");
        windowHeight = window.innerHeight;
    }

        function checkPosition() {
            for (i = 0; i < elements.length; i++) {
                var element = elements[i];
                var positionFromTop = elements[i].getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                    element.classList.add('fade-in-element');
                    element.classList.remove('hidden');
                }
            }
        }
        window.addEventListener("scroll", checkPosition);
        window.addEventListener("resize", init);


        init();
        checkPosition();

    }) ();

    

