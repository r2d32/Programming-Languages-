#DONE
# Method to remove vowels from a string
def strip_vowels(str)
  str.delete "aeiouAEIOU"
end

#Method to randomly permute a string
def scramble(string)
	string.split("").shuffle.join
end

#Method that yields powers of two up to limit 
def powers_of_two(s)
	yield 1
	i = 2
	while i < s
		yield i
		i = i * 2 
	end
end

#Method that yields powers of a given number up to limit 
def powers(pow,limit)
	yield 1
	value = 1
	value = pow
	while value < limit
		yield value
		value = value * pow 
	end
end

#Method that interleaves two arrays 
def interleave ( arr1 , arr2 )
	c = []
	if arr1.length > arr2.length 
		a=arr1
		b=arr2
	else
  		a=arr2
  		b=arr1
	end
	c = a.slice(b.length..a.length-1)
	return b.zip(a).flatten(1).slice!(0..b.length*2 -1) + c
end


#Method that doubles all the elements in the array
class Array
	def stutter
		return self.zip(self).flatten(1)
	end
end



