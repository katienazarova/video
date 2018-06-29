const data = new Map();

data.set('user', { name: 'Test' });

data.set(1, 1);
data.set(null, 2);
data.set(undefined, 3);
data.set(NaN, 4);

const obj = { test: 1 };
data.set(obj, 5);

const func = function() {};
data.set(func, 6);

data.set(1, 'a')
   .set(2, 'b')
   .set(3, 'c');

const user = new Map([
   ['login', 'neo'],
   ['name', 'Thomas Anderson']
]);

console.log(user);

console.log(data.get(func));
console.log(data.get(null));

console.log(data.has('user'));
data.delete('user');
data.clear();

console.log(data.size);
console.log(user.size);


for (let [key, value] of user) {
   console.log(`${key}: ${value}`);
}

const [login, name] = user;
console.log(login, name);

console.log(Array.from(user));