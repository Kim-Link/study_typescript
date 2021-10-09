export{};

enum Fruit {
    Apple,
    Banana,
    Orange,
}

// const FRUIT_PRICE = {
//     [Fruit.Apple] : 1000,
//     [Fruit.Banana] : 1500,
//     [Fruit.Orange] : 2000,
// }

const FRUIT_PRICE : { [keyof in Fruit] : number} = { 
    [Fruit.Apple] : 1000,
    [Fruit.Banana] : 1500,
    [Fruit.Orange] : 2000,
}