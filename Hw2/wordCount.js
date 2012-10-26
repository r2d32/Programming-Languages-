function wordCount( str ) {
	var countArr = str.toLowerCase().split(/[^a-z|'']/);
	
	var countO = new Object();
	
	if (countArr.length > 0 ){
	
		for (var i = 0; i< countArr.length; i++){

			if ( countArr[i] != 0 ) {	
				if (countO[countArr[i]] == null) {
					
					countO[countArr[i]] = 1;
				
				} else { 
				
					countO[countArr[i]]++; 
				
				}
			}
		}
	
	} 	
	
	return countO;
}
	