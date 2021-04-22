'use strict';

{
	$('.thumb').on('click', function(event) {
		const newImg = $(event.currentTarget).data('image');
		$('#bigimg').attr('src', newImg);
	});
}
