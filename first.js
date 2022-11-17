let f1 = function (num) {
    return num * 2;
}

console.log(f1(3));

let f2 = num => num * 2;
console.log(f2(4));

let f3 = [1, 2, 3, 4];

f3.forEach(x => {
    console.log(x * 2);
});

let f4 = [{ "name": "avi", "age": 20 },
{ "name": "avi", "age": 20 },
{ "name": "avi", "age": 20 }];

f4.forEach(y => {console.log(y.age)});
f4.forEach(function(x){console.log(x.name)})
f4.filter(x=> console.log(x.age > 10))

let f5 = f3.filter(x => x<2)
console.log(f5)

let f6 = f3.map(x=>x*2)
console.log(f6)