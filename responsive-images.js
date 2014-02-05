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

        console.log(windowSize);
        console.log(screenSize);
    }

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

    // Bind event listener
    $(window).resize(checkWidth, setImage);

    if (window.DeviceOrientationEvent) {

		window.addEventListener('orientationchange', checkWidth, setImage, false);

	}
});