(ns testForHomework4
  (:use clojure.test))


(defn change [x]
  (with-local-vars [amount x, numOfCoins 0, result []]
    (doseq [coinValue [25 10 5 1]]
      (var-set numOfCoins (quot  @amount coinValue))
      (var-set amount (rem @amount coinValue))
      (var-set result (conj @result @numOfCoins))
      )  @result  ))


(defn interleavehw [l1 l2]
  (let[x (vec l1), y (vec l2)]
    (if (< (count x) (count y)) 
      (concat (interleave x y) (subvec y (count x)))
      (concat (interleave x y) (subvec x (count y))))))


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


(defn stutter[l1]
  (interleavehw l1 l1))
  
  
(defn scramble [str] 
  (clojure.string/join 
    (shuffle 
      (clojure.string/split str #""))))
      
      
(defn stripVowels [str] 
  (clojure.string/replace str #"[aeiouAEIOU]" ""))




;TESTS FOR HOMEWORK 4 
;Problem 8

(deftest stutter-test
  (is (= '(5 5 4 4 (3) (3) 9 9) (stutter '(5 4 (3) 9))))
  (is (= '( ) (stutter '( ))))
  (is (= '(() ()) (stutter '(()))))
  (is (= '($ $) (stutter '($)))))

(deftest interleavehw-test
  (is (= '(() ()) (interleavehw '(()) '(()))))
  (is (= '(  ) (interleavehw '() '())))
  (is (= '([] {}) (interleavehw '([]) '({}))))
  (is (= '(1 0 1 0 1 1) (interleavehw '(1 1 1 1) '(0 0))))
  (is (= '("a" 1 "b" 2 true null) (interleavehw '("a" "b") '(1 2 true null)))))
  
(deftest scramble-test
  (is (= "" (scramble "")))
  (is (not= "wc2,,,qwv,,,qwrv /$%ñçñçñç" (scramble "wc2,,,qwv,,,qwrv /$%ñçñçñç")))
  (is (not= "hello mama" (scramble "hello mama")))
  (is (not= " - -- --- -" (scramble " - -- --- -")))) 
  
(deftest stripVowels-test
  (is (= "" (stripVowels "")))
  (is (= "nd nw fr smthng " (stripVowels "And now for something ")))
  (is (= "" (stripVowels "aeiouAEIOU")))
  (is (= "----- -----" (stripVowels "----- -----")))) 
  
  
(deftest change-test
  (is (= [10 1 1 1] (change 266)))
  (is (= [0 0 0 0] (change 0)))
  (is (= [0 0 1 3] (change 8)))
  (is (= [3 2 0 1] (change 96))))


(defn getArrayForPowersOfTwo [limit]
  (with-local-vars [arr []] 
    (powersOfTwo limit (fn [p] (var-set arr (concat @arr [p] ))))
  @arr)
)
  
  
(deftest powersOfTwo-test
  (is (= [1 2 4 8 16 32 64 128]  (getArrayForPowersOfTwo 128)))
  (is (= []  (getArrayForPowersOfTwo 0)))
  (is (= []  (getArrayForPowersOfTwo -1)))
  (is (= [1]  (getArrayForPowersOfTwo 1))))


(defn getArrayForPowers [base limit]
  (with-local-vars [arr []] 
    (powers base limit (fn [p] (var-set arr (concat @arr [p] ))))
  @arr)
)

;Failed sixth test on powers 

(deftest powers-test
  (is (= [1]  (getArrayForPowers 9 1)))
  (is (= [1]  (getArrayForPowers 1 1)))
  (is (= [1 3 9 27 81 243]  (getArrayForPowers 3 400)))
  (is (= [1 2 4 8 16 32]  (getArrayForPowers 2 34)))
  (is (= []  (getArrayForPowers 2 -1)))
  (is (not= []  (getArrayForPowers -2 1)))
  (is (= []  (getArrayForPowers 0 0))))

(run-tests)
