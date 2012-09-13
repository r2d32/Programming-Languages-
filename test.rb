require 'test/unit'
require 'misc.rb'

class String
  def is_permutation_of(other)
    self.split(//).sort == other.split(//).sort
  end
end

class TestUtil < Test::Unit::TestCase

  def test_strip_vowels()
    assert_equal(strip_vowels(""), "");
    assert_equal(strip_vowels("ouT"), "T");
    assert_equal(strip_vowels("And now"), "nd nw");
    assert_equal(strip_vowels("for something"), "fr smthng");
    assert_equal(strip_vowels("Completely different"), "Cmpltly dffrnt");
    assert_equal(strip_vowels("123 catdog"), "123 ctdg");
  end

  def test_scramble()
    ["", "a", "aaaa", "aaba", "abfswegwtewr"].each do |s|
      assert(s.is_permutation_of(scramble(s)))
    end
    assert(!"abc".is_permutation_of(scramble("aab")))
  end

  def test_powers_of_two()
    # TODO
  end

  def test_powers()
	#TODO
  end

  def test_interleave()
    assert_equal(interleave([1, 2], [nil, 5, 7, 10]), [1, nil, 2, 5, 7, 10])
	assert_equal(interleave([1, 3, 5], [2, 4, 6, 8]), [1, 2, 3, 4, 5, 6, 8])
	assert_equal(interleave([0,0], ["c", "e", "r", "a"]), [0, "c", 0,"e","r", "a"])
	assert_equal(interleave([0,12,11,2,90], [ 7, 10]), [7, 0, 10, 12, 11, 2, 90])
	assert_equal(interleave([], [1]), [1])
	assert_equal(interleave([], []), [])
  	assert_equal(interleave([], [nil, 5, 7, 10]), [nil, 5, 7, 10])
  end

  def test_stutter()
    assert_equal([1, 1].stutter, [1, 1, 1, 1]);
    assert_equal([].stutter, []);
    assert_equal([nil].stutter, [nil,nil]);
    assert_equal(["c","r","e","a"].stutter, ["c","c","r","r","e","e","a","a"]);
    assert_equal([-1,"real"].stutter, [-1,-1,"real","real"]);
  end

end