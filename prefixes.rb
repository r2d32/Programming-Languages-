#Script that writes successive prefixes of its first input argument
ARGV.each do |a|
	result = ""
	a.each_char{|c| result += c; puts result}
end
