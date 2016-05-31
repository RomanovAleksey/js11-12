
$(document).ready(function(){

	var $carouselArrowLeft = $('.carousel-arrow-left');
	var $carouselArrowRight = $('.carousel-arrow-right');

	var $elemList = $('.carousel-list');
	var $pixelOffset = 125;
	var $leftValue = 0;

  	var elementsCount = $elemList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * $pixelOffset);
    var maximumOffset = 0;

	$carouselArrowLeft.click(function(){
		if($leftValue != maximumOffset){
			$leftValue += 125;
			$elemList.animate({left : $leftValue + 'px'}, 300);
		}
	});

	$carouselArrowRight.click(function(){
		if($leftValue != minimumOffset){
			$leftValue -= 125;
			$elemList.animate({left : $leftValue + 'px'}, 300);
		}
	});

});