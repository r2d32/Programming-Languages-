(def triple (fn [amount] 
		(def cuarters ( / amount 25) )
		(def nickles ( / (- amount ( * cuarters 25 ) ) 10 ) )
		(def dimes (/ (- amount ( + ( * cuarters 25 ) ( * nickles 10 ) ) )  5 ) )
		(def pennies (/ (- amount ( + ( * cuarters 25 ) ( * nickles 10 ) (* dimes 5) ) ) 1 ) )
		(def change ( int-array 4 ))
		(aset-int change 0 cuarters)
		(aset-int change 0 nickles)
		(aset-int change 0 dimes)
		(aset-int change 0 pennies)
		(println ( vec change)
))


