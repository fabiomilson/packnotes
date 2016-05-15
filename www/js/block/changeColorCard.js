$(document).on("click",".wrap-card-options a",function(){
	if($(this).attr("data-color") != null){
		$color = $(this).data("color");
		$card = $(this).parent().parent().parent();
		$card.find(".card").attr("data-color",$color);
		localCard = localStorage.getItem($($card).attr("data-index"));
		localCard = JSON.parse(localCard);
		localCard.color = $color;
		localCard = JSON.stringify(localCard);
		localStorage.setItem($($card).attr("data-index"),localCard);
	}
});