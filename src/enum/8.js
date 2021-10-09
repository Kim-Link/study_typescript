"use strict";
exports.__esModule = true;
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(function (key) { return isNaN(Number(key)); })
        .some(function (key) { return enumObject[key] === value; });
}
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
    Language["Japanese"] = "jp";
})(Language || (Language = {}));
console.log('0 in Fruit : ', getIsValidEnumValue(Fruit, 0));
console.log('1 in Fruit : ', getIsValidEnumValue(Fruit, 1));
console.log('2 in Fruit : ', getIsValidEnumValue(Fruit, 2));
console.log('5 in Fruit : ', getIsValidEnumValue(Fruit, 5));
console.log('Orange in Fruit : ', getIsValidEnumValue(Fruit, 'Orange'));
console.log('ko in Language : ', getIsValidEnumValue(Language, 'ko'));
console.log('Korean in Language : ', getIsValidEnumValue(Language, 'Korean'));
