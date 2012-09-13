#Method that doubles all the elements in the array
class Array
	def stutter
		return self.zip(self).flatten(1)
	end
end