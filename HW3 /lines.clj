(ns lines
  (:import (java.io BufferedReader FileReader)))

(let [file-name (first *command-line-args*)]
  (with-local-vars [properLines 0]
    (with-open [rdr (BufferedReader. (FileReader. file-name))]
      (doseq [line (line-seq rdr)]
        (if (not (re-matches #"(^#.*)|(^\s*)" line))
          (var-set properLines (+ @properLines  1)))))
    (println @properLines)))

