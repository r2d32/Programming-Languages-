#Method that interleaves two arrays 
def interleave (arr1,arr2)
	c = []
	if arr1.length < arr2.lenght 
		b=arr1
		a=arr2
	else
  		a=arr1
		b=arr2
	end
	a.each_with_index { |x,i| c << x << b[i]}
	c.delete nil
end



