var prefixes = function ( input ) {

	var i = 0;
	var timer = setInterval(function() { 
		
		if( i >= input.length ) {
	
			clearInterval( timer );
			timer = null;
		}
		
		$("body").append("<div>" + input.slice(0,i) + "</div>");
		i+=1;
	
	},1000);

};
