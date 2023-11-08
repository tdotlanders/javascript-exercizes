var _a, _b;
var firstName = (_a = prompt("Primeiro Nome")) !== null && _a !== void 0 ? _a : "";
var lastName = (_b = prompt("Último Nome")) !== null && _b !== void 0 ? _b : "";
function formatWord(word) {
    var firstLetterBig = word.charAt(0).toUpperCase();
    var restOfTheWord = word.slice(1).toLowerCase();
    return "".concat(firstLetterBig).concat(restOfTheWord);
}
var finalWord = "".concat(formatWord(firstName), " ").concat(formatWord(lastName));
alert(finalWord);
