export {};

function getIsValidEnumValue(enumObject: any, value: number | string) {
	return Object.keys(enumObject)
		.filter(key => isNaN(Number(key)))
		.some(key => enumObject[key] === value);
}

enum Fruit {
	Apple,
	Banana,
	Orange,
}
enum Language {
	Korean = 'ko' ,
	English = 'en',
	Japanese = 'jp',
}

console.log('0 in Fruit : ', getIsValidEnumValue(Fruit, 0));
console.log('1 in Fruit : ', getIsValidEnumValue(Fruit, 1));
console.log('2 in Fruit : ', getIsValidEnumValue(Fruit, 2));
console.log('5 in Fruit : ', getIsValidEnumValue(Fruit, 5));
console.log('Orange in Fruit : ', getIsValidEnumValue(Fruit, 'Orange'));
console.log('ko in Language : ', getIsValidEnumValue(Language, 'ko'));
console.log('Korean in Language : ', getIsValidEnumValue(Language, 'Korean'));