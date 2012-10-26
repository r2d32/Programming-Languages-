function powersOfTwo( max, f ) {

	var i = 0;
    
    var  value = 0;
	
	while ( max > 0 && value < max ) { 
			
		value = Math.pow(2,i);
		
		i++;
		
		if ( value < max+1) { f ( value ); }
		
	}

}