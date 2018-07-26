const fruits = new Set();

fruits.add('apple');
fruits.add('orange');
fruits.add('pear');
fruits.add('orange');

fruits.add(NaN);
fruits.add(NaN);

console.log(fruits.size);

console.log(fruits.has('apple'));
console.log(fruits.has(NaN));

fruits.delete('apple');
console.log(fruits.has('apple'));

fruits.clear();

const vegetables = new Set([
    'tomato',
    'potato',
    'broccoli'
]);

vegetables.add('cucumber')
    .add('zucchini');

for (let vegetable of vegetables) {
    console.log(vegetable);
}

const [veg1, veg2] = vegetables;
console.log(veg1, veg2);

console.log([...vegetables]);
console.log(Array.from(vegetables));



const a = new Set([1, 2, 3]);
const b = new Set([4, 3, 2]);

const union = new Set([...a, ...b]);
console.log(union);

const intersection = new Set([...a].filter(
    x => b.has(x)
));
console.log(intersection);

const difference = new Set([...a].filter(
    x => !b.has(x)
));
console.log(difference);
