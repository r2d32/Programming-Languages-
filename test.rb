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
    # TODO - lots more tests
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
    # TODO
  end

  def test_interleave()
    assert_equal(interleave([1, 2], [nil, 5, 7, 10]), [1, nil, 2, 5, 7, 10])
    # TODO - lots more tests
  end

  def test_stutter()
    assert_equal([1, 1].stutter, [1, 1, 1, 1]);
    # TODO - lots more tests
  end

end