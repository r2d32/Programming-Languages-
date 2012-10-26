function powers( base, max  , f ) {

	var i = 0;
    
    var  value = 0;
	if( base != 0 ){
		while ( max > 0 && value < max ) { 
			
			value = Math.pow(base,i);
		
			i++;
		
			if ( value < max+1) { f ( value ); }
		}
		
	}

}