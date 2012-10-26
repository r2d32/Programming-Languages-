;Prefixes problem  

(let [ s (first *command-line-args*)]
  (doseq [ x (range 0 (inc (count s))) ]
    (println ( subs s 0 x ))))








