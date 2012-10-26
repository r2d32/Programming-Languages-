

(defn change [x]
  (with-local-vars [amount x, numOfCoins 0, result []]
    (doseq [coinValue [25 10 5 1]]
      (var-set numOfCoins (quot  @amount coinValue))
      (var-set amount (rem @amount coinValue))
      (var-set result (conj @result @numOfCoins))
      )  @result  ))


(defn stripVowels [str] 
  (clojure.string/replace str #"[aeiouAEIOU]" ""))


(defn scramble [str] 
  (clojure.string/join 
    (shuffle 
      (clojure.string/split str #""))))


(defn powersOfTwo  [ limit f ] 
  (with-local-vars [ currentValue 0, base 2]
  	(if ( > limit 0)
  	  (while (> limit @currentValue) 
  	    (do 
  	      (if ( < @currentValue 1)
  	        (var-set currentValue  1) 
  	        (var-set currentValue (* @base @currentValue))))
  	    (if ( >= limit @currentValue)(f @currentValue))))))


(defn powers [ base limit f ] 
  (with-local-vars [ currentValue 0 ]
  	(if (> limit 0)
  	  (while (> limit @currentValue) 
  	    (do 
  	      (if (< @currentValue 1)
  	        (var-set currentValue  1) 
  	        (var-set currentValue (* base @currentValue))))
  	    (if (>= limit @currentValue) (f @currentValue))))))  	
  	      

(defn interleavehw [l1 l2]
  (let[x (vec l1), y (vec l2)]
    (if (< (count x) (count y)) 
      (concat (interleave y x) (subvec y (count x)))
      (concat (interleave y x) (subvec x (count y))))))


(defn stutter[l1]
  (interleavehw l1 l1))