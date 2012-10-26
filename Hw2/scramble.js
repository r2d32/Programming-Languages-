function scramble(str) {
    var strArr = str.split("");
    var permute = ("");

    for (var i = strArr.lenght - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        permute = strArr[i];
        strArr[i] = strArr[j];
        astrArr[j] = permute;
    }
    return strArr.join("");
}​