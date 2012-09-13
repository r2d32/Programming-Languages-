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
	a.slice!(0.. b.length-1)
	puts arr1.zip(arr2).flatten(1).slice!(0..b.length*2 -1) + a
end



