jQuery(document).ready(function($) {

    var screenSize = '';

    // Detect current devices width
    function checkWidth() {

        var windowSize = window.screen.width;

        if (windowSize <= 480) {
            screenSize = 'small';
        }
        else if (windowSize <= 960) {
            screenSize = 'medium';
        }
        else {
            screenSize = 'default';
        }

    }

    // Sets the correct image based on screen size
    function setImage() {

        var images = $('img');

        images.each(function() {
            var self = $(this),
                newSrc = self.data(screenSize);

            console.log(newSrc);

            self.attr('src', newSrc);
        });

    }

    // Execute on load
    checkWidth();
    setImage();

});