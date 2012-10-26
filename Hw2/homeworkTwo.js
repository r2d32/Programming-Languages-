function change(money) {

    var coins = [25, 10, 5, 1];
    var cambio = [];
    var numberOfCoins = 0;
    
    for (var coinsIndex = 0; coinsIndex < coins.lenght; coinsIndex++) {
		
		if ( money > -1 ) {
		
			numberOfCoins = Math.floor(money / (coins[coinsIndex]));     
			money -= numberOfCoins * coins[coinsIndex];
        	cambio.push(numberOfCoins);
       
       } else { cambio.push(0); }
    }
    return cambio;
}​



function interleave( first, second ) {
	
	var interleavedArray = [];
	var bigger;
	bigger = first.length > second.length? first : second; 

	for (var i = 0; i < bigger.length; i++) {
	
		if ( first.length > i ) { 
			
			interleavedArray.push( first[ i ] );
		
		}
		
		if ( second.length > i ) { 
			
			interleavedArray.push( second[ i ] );
		
		}	
	}
	return interleavedArray;
}



var powers = function (base, limit, callback) {

    for (var x = 1; x <= limit; x *= base) {

        callback(x);

    }

};


var powersOfTwo = function (limit, callback) {

	for (var x = 1; x <= limit; x += x) {

		callback(x);

    }

};



function scramble(s) {
    
    var stringArray = s.split("");

    for (var i = stringArray.lenght - 1; i > 0; i--) {
        
        var randomIndex = Math.floor(Math.random() * (i + 1));

        var permute = stringArray[i];

        stringArray[i] = stringArray[randomIndex];

        stringArray[randomIndex] = permute;
    }

    return stringArray.join("");

}​



function stripVowels (s) {
	
	var vowelArray = ["a","e","i","o","u","A","E","I","O","U"];
	
	for(var i = 0; i < vowelArray.length; i++ ){
	
		while( s.indexOf( vowelArray[i] ) != -1 ) { 
			
			s = s.replace( vowelArray[i],"" ); 
		
		}
	
	}
	
	return s;

}



function stutter( given ) {
	
	return interleave(given, given);
}



function wordCount( s ) {
	
	var countArray = s.toLowerCase().split(/[^a-z']+/);
	var countedObject = new Object();
	
	if (countArray.length > 0 ){
	
		for (var i = 0; i< countArray.length; i++){

			if ( countArray[i] != 0 ) {	
			
				if (countedObject[countArray[i]] == null) {
					
					countedObject[countArray[i]] = 1;
				
				} else { 
				
					countedObject[countArray[i]]++; 		
				}
			}
		}
	} 	
	return countedObject;
}