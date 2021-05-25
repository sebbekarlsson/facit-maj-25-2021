// Del 1


// 1
function add(x, y) {
    return x + y;
}

const result = add(10, 20);

console.log(result);

// 2
function arrayLooper(myArray) {
    myArray.forEach(item => console.log(item));
}

arrayLooper(["apple", "pear", "banana", "strawberry"]);


// 3
function isDivisibleByTwo(value) {
    return value % 2 === 0;
}

const result1 = isDivisibleByTwo(10);
const result2 = isDivisibleByTwo(3);

console.log(result1);
console.log(result2);

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

const randomNumbers = [0, 0, 0, 0, 0, 0].map(v => getRandomNumber(1000));
randomNumbers.forEach(number => console.log(number, isDivisibleByTwo(number)));


// Del 2

// 1
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const myPerson = new Person("john", "doe");

console.log(myPerson);


// 2

class Cat {
    constructor(breeds, id, url, width, height) {
        this.breeds = breeds;
        this.id = id;
        this.url = url;
        this.width = width;
        this.height = height;
    }
}


fetch("https://api.thecatapi.com/v1/images/search")
.then(response => response.json().then(data => {
    const firstItemInArray = data[0];

    const myCat = new Cat(
        firstItemInArray.breeds,
        firstItemInArray.id,
        firstItemInArray.url,
        firstItemInArray.width,
        firstItemInArray.height
    );

    console.log(myCat);
}));