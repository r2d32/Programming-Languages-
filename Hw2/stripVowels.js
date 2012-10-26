function stripVowels (str) {
	
	var vowArr = ["a","e","i","o","u","A","E","I","O","U"];
	
	for(var i = 0; i < vowArr.length; i++ ){
	
		while( str.indexOf( vowArr[i] ) != -1 ) { 
			str = str.replace( vowArr[i],"" ); 
		}
	}
	return str;
}