function interleave( first, second ) {
	
	var inter = [];
	var bigger;
	first.length > second.length? bigger = first : bigger = second; 

	for (var i = 0; i < bigger.length; i++) {
	
		if ( first.length > i ) { 
			
			inter.push( first[ i ] );
		
		}
		
		if ( second.length > i ) { 
			
			inter.push( second[ i ] );
		
		}	
	}
	
	return inter;
}