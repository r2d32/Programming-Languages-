; This script prints all integer Pythagorean triples for values <= 100.

(doseq [c (range 1 101) b (range 1 c) a (range 1 b)]
  (if (= (+ (* b b) (* a a)) (* c c))
    (printf "(%d,%d,%d)\n" a b c)))
