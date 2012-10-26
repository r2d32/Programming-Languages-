

;Problem 1

(defn change [x]
  (with-local-vars [amount x, numOfCoins 0, result []]
    (doseq [coinValue [25 10 5 1]]
      (var-set numOfCoins (quot  @amount coinValue))
      (var-set amount (rem @amount coinValue))
      (var-set result (conj @result @numOfCoins))
      )  @result  ))

;Problem 2

(defn stripVowels [str] 
  (clojure.string/replace str #"[aeiouAEIOU]" ""))

;Problem 3

(defn scramble [str] 
  (clojure.string/join 
    (shuffle 
      (clojure.string/split str #""))))






;Problem 4

(defn powersOfTwo  [ limit f ] 
  (with-local-vars [ currentValue 0, base 2]
  	(if ( > limit 0)
  	  (while (> limit @currentValue) 
  	    (do 
  	      (if ( < @currentValue 1)
  	        (var-set currentValue  1) 
  	        (var-set currentValue (* @base @currentValue))))
  	    (if ( >= limit @currentValue)(f @currentValue))))))


;Problem 5

;For value base = 1 I assumed that an infinite number of 1s would be correct as a result

(defn powers [ base limit f ] 
  (with-local-vars [ currentValue 0 ]
  	(if (> limit 0)
  	  (while (> limit @currentValue) 
  	    (do 
  	      (if (< @currentValue 1)
  	        (var-set currentValue  1) 
  	        (var-set currentValue (* base @currentValue))))
  	    (if (>= limit @currentValue) (f @currentValue))))))  	
  	      
;Problem 6

(defn interleavehw [l1 l2]
  (let[x (vec l1), y (vec l2)]
    (if (< (count x) (count y)) 
      (concat (interleave x y) (subvec y (count x)))
      (concat (interleave x y) (subvec x (count y))))))

;Problem 7

(defn stutter[l1]
  (interleavehw l1 l1))