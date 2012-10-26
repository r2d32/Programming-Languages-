/*
 * Unit tests for the Getting Started functions.
 */
$(function () {

    var anagram = function (s, t) {
        if (s.length != t.length) {
            return false;
        }
        var a = s.split(""), b = t.split("");
        a.sort(), b.sort();
        for (var i = 0, n = a.length; i < n; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    };

    test("Change Tests", function () {
        deepEqual(change(97), [3, 2, 0, 2]);
        deepEqual(change(8), [0, 0, 1, 3]);
        deepEqual(change(-250), [0, 0, 0, 0]);
        deepEqual(change(0), [0, 0, 0, 0]);
        deepEqual(change(4), [0, 0, 0, 4]);
        deepEqual(change(2500001), [100000, 0, 0, 1]);
        
    });

    test("Strip Vowels Tests", function () {
        deepEqual(stripVowels("Hello, world"), "Hll, wrld");
        deepEqual(stripVowels("And Now For"), "nd Nw Fr");
        deepEqual(stripVowels("Something completely different"), "Smthng cmpltly dffrnt");
        deepEqual(stripVowels(""), "");
        deepEqual(stripVowels("3454aa3452aa"), "34543452");
    });

    test("Scramble Tests", function () {
        var data = ["a", "rat", "JavaScript testing"]
        data.forEach(function (s) {
            ok(anagram(s, scramble(s)));
        });
    });

    // test powersOfTwo here
     
    test("Powers Of Two Tests", function () { 
    	var a =[];
    	powersOfTwo( 33, function (p) {a.push(p);} )
        deepEqual(a, [1,2,4,8,16,32]);
        a =[];
        powersOfTwo( 0, function (p) {a.push(p);} )
        deepEqual(a, []);
        a =[];
        powersOfTwo( 1, function (p) {a.push(p);} )
        deepEqual(a, [1]);
        a =[];
        powersOfTwo( -23, function (p) {a.push(p);} )
        deepEqual(a, []);
        a =[];
        powersOfTwo( 64, function (p) {a.push(p);} )
        deepEqual(a, [1,2,4,8,16,32,64]);
        
    });
	
    // test powers here
    
    test("Powers Tests", function () { 
    	var a =[];
    	powers(2, 33, function (p) {a.push(p);} )
        deepEqual(a, [1,2,4,8,16,32]);
        a =[];
        powers(3, 33, function (p) {a.push(p);} )
        deepEqual(a, [1,3,9,27]);
        a =[];
        powers(-2, 33, function (p) {a.push(p);} )
        deepEqual(a, [1,-2,4,-8,16,-32]);
         a =[];
        powers(0, 33, function (p) {a.push(p);} )
        deepEqual(a, []);
        a =[];
        powers(33, 1, function (p) {a.push(p);} )
        deepEqual(a, [1]);
    
    });

    // test interleave here
	test("Interleave Test", function () {
        deepEqual(interleave(["a", "b"], [1, 2, true, null]), ["a", 1, "b", 2, true, null]);
        deepEqual(interleave(["a", "b"], []), ["a","b"]);
        deepEqual(interleave([], []), []);
        deepEqual(interleave(["a", "b","a"], [1, 2]), ["a", 1, "b", 2, "a"]);  
    
    });
    // test stutter here
    test("Stutter Test", function () {
        deepEqual( stutter( [ "a", "b" ] ), ["a", "a", "b", "b"]);
        deepEqual( stutter( [ ] ), [ ]);
        deepEqual( stutter( [ "a" ] ), ["a", "a"]);
	});
    // test word count here
     test("Word Count Test", function () {
        deepEqual( wordCount("If you dog a dog, you'll\nbe DOG-TIRED."), {"if":1, "you":1, "dog":3, "a":1, "you'll":1, "be":1, "tired":1});
        deepEqual( wordCount("                ,,  "), {});
        deepEqual( wordCount("     '           ,,  "), {"'":1});
        deepEqual( wordCount("983495867349586790839456'a"), {"'a":1});
        deepEqual( wordCount("This friend is, friend the39 is4053 the second test my friend "), {"test": 1, "this":1, "friend":3, "is":2, "the":2, "second":1, "my":1});
	});
    
    
});