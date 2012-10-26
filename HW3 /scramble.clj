(defn scramble [str] 
  (clojure.string/join (shuffle (clojure.string/split str #""))))