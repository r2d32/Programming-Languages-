var functioned = function ( arrayOfValues, f ) {
	result = [];
    currentValue = 0;
    
    for (var i = 0; i < arraOfValues.length; i++) {
    	currentValue = arrayOfValues[i];
    	
    	for(var e = 0; e < i; e++){
    	 	currentValue = f(currentValue);
    	}
    	
    	result.push(currentValue);
    }
    return result;
};
 
 II

def functioned( arrayOfValues, f)
  result = []
  arrayOfValues.each{ |currentValue| 
    fValue = currentValue;
  	(0...currentValue).each {|i| fValue = f(fValue) }//fix
  	result << fValue
  }
  yield fValue
  
end


V
var vowelCount = function (s) {
    var noVowelsArray = s.toLowerCase().split(/[aeiou]/);
    return vowelCount.length;
};

VI

def vowelCount(s)
  s.split(/[aeiouAEIOU]/).length
end


III
class splecial
  def name
    @value
  end
end


