#Ruby script that that reports the non-blank, non-commented lines in the file named by the first argument

total= 0
File.open(ARGV[0]).each do|line|
	unless  /(^#)|(^\s*$)/ =~ line 
		total +=1	
	end 
end
puts total
