for (var i = 0; i <= localStorage.length; i++) {
		var card = JSON.parse(localStorage.getItem(i));
		if(card != null){
			$localCard = $(".card-model").clone().css("display","block").removeClass("card-model");
			$($localCard).find(".card-content").find(".card-title").html(card.title);
			$($localCard).find(".card-content").find("p").html(card.content);
			$($localCard).attr("data-index",card.index);
			$($localCard).find(".card").attr("data-color",card.color);
			$(".cards").prepend($localCard);
			console.log($localCard);
		}
}

