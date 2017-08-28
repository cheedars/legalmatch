$(document).ready(function(){			
	$('#catselector').change(function(){
		$('.cat-select').hide();
		$('#' + $(this).val()).show();
	});
	$('.form-click span').click(function(){
		$('#categorieslist').show();
	});
	$('.popupclose').click(function(){
		$('.popup').hide();
	});		
	$('.r-view').click(function(){
		var link = $(this);
		link.next().show();
	});
});