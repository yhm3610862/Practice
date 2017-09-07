	var img = $('#loading_img');
	var speed = 5;
	var deg = 0;
	setInterval(function () {
    	img.css({
        '-ms-transform': 'rotate(' + deg + 'deg)', /* IE 9 */
        '-moz-transform': 'rotate(' + deg + 'deg)', /* Firefox */
        '-webkit-transform': 'rotate(' + deg + 'deg)', /* Safari and Chrome */
        '-o-transform': 'rotate(' + deg + 'deg)', /* Opera */
        'transform': 'rotate(' + deg + 'deg)'
    });
    deg+=1;
    if (deg >= 360) {
        deg = 0;
    }
}, speed);