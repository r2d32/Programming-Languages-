function change(money) {

    var coins = [25, 10, 5, 1];
    var cambio = [];
    var nOfCoins = 0;
    
    for (var cIndex = 0; cIndex < 4; cIndex++) {
		
		if ( money > -1 ) {
			nOfCoins = Math.floor(money / (coins[cIndex]));     
			money -= nOfCoins * coins[cIndex];
        	cambio.push(nOfCoins);
       
       } else { cambio.push(0); }

    }
    return cambio;
}​