

$(document).ready(function(){
	//votre code
var foo={
	cake:"qq.jpg",
	panda:"panda.png"
}



	var ju = 0;
	
	$(".cake-is-a-lie").click(function(){
		ju++;
		$(".counter").html(ju);
		
		if(ju % 20 === 0){
			$("img").attr(foo.panda);
			alert ("la pause !");

		

	 
		};

	});

});