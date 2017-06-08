$(".submenu").click(function(){

	$(this).children("a").slideTogge();

} )

$("a").click(function(p){

	p.stopPropagation()

} )