"use strict";
let username = "sachin";
let random;
const sum = (a, b) => {
    return a && b;
};
let er = /\w+/g;
let bands = [
    'john',
    'james',
    'jenny'
];
let evh = {
    name: 'blah',
    active: false,
    albums: [1984, 5150, 'OU812']
};
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
// literal types
let myName;
let a = 'hello';
let b = a; // less specific assignment
let c = a; // more specific assignment
let d = 'world';
let e = 'helio'; // cant do this syntax in react
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
10; // force casting
// you know better than ts
// DOM 
const img = document.querySelector('img');
const myImg = document.getElementById('#myimg');
const nextImg = document.getElementById("#myimg");
img.src;
myImg.src;
// Classes
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
}
class singer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(ele => typeof ele === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('prama is not array of strings');
    }
}
const today = {
    'Pizza': -10,
    'Books': -5,
    'Job': 50
};
console.log(today['Pizza']);
const student = {
    name: "juni",
    GPA: 8.3,
    classes: [100, 200]
};
for (let x in student) {
    console.log(student[x]);
    // union of all key types is keyof
}
// Generics
const echo = (arg) => arg;
