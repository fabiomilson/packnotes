
$title_newCard = "Anotações";
$.event.special.tap.tapholdThreshold = 200;

$(document).on("click",".action-edit",function(){
	var $title = $(this).parent().parent().find(".card-content").find(".card-title");
	var $content = $(this).parent().parent().find(".card-content").find("p");
	if($(this).text() == "Editar"){
		$($title).attr("contenteditable","true").focus();
		$($content).attr("contenteditable","true");
		$(this).html("Salvar");
	}else{
		var localCard = localStorage.getItem($(this).parent().parent().parent().attr("data-index"));
		localCard = JSON.parse(localCard);
		localCard.title = $title.text();
		localCard.content = $content.text();
		localCard = JSON.stringify(localCard);
		localStorage.setItem($(this).parent().parent().parent().attr("data-index"),localCard);	
		$($title).attr("contenteditable","false");
		$($content).attr("contenteditable","false");
		$(this).html("Editar");
	}
});

$(document).on("click",".action-delete",function(){
	localStorage.removeItem($(this).parent().parent().parent().attr("data-index"));
	$(this).parent().parent().parent().remove();
});

$(document).on("taphold",".card",function(){
	if( screen.width <= 480 ){
		$(this).find(".wrap-card-options").toggle(200);
		navigator.vibrate(80);
}
});
$(document).on("click",".share-link",function(){
	window.plugins.socialsharing.share($(this).parent().parent().find(".card-content").find("p").text());
});

$(".header-newCard").on("click",".action-save",function(){
	if ($(".new-card-text").val() != "") {
		var index = localStorage.length++;
		var $val = $(".new-card-text").val();
		$(".new-card-text").val("");
		var $newCard = $(".card-model").clone().css("display","block").removeClass("card-model").attr("data-index",index.toString());
		$($newCard).find(".card-content").find(".card-title").html($title_newCard);
		$($newCard).find(".card-content").find("p").html($val);
		$(".cards").prepend($newCard);	
		var newCard = {
			index: index,
			title: "Anotações",
			content : $val,
			color : "default"
	};
		localStorage.setItem(localStorage.length++,JSON.stringify(newCard));
		Materialize.toast('Card salvo com sucesso', 4000);
	}else{
		Materialize.toast('Preencha o campo acima antes de salvar um novo card', 4000);
	};
	//location.reload();
	//console.log();
});