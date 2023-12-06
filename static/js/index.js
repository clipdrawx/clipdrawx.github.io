window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

	window.onload = function() {
		document.querySelector('.copy-button').addEventListener('click', function() {
		  var copyText = document.querySelector("#bibtex");
		  navigator.clipboard.writeText(copyText.innerText).then(function() {
			console.log('Copying to clipboard was successful!');
		  }, function(err) {
			console.error('Could not copy text: ', err);
		  });
		});
	  };
	  

})