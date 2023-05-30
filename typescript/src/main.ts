let username: string = "sachin"

let random: string | number;

const sum = (a: number, b: boolean): boolean | number | void => {
    return a && b
}

let er: RegExp = /\w+/g

let bands: string[] = [
    'john',
    'james',
    'jenny'
]

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}


interface interface_guitarist  {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name : 'blah',
    active: false,
    albums: [1984, 5150, 'OU812']
}

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

// Type Aliases 
type stringOrNumber = string | number

// can't do this with interfaces
type nesting = {
    name?: string,
    nested: stringOrNumber
}

// literal types
let myName: 'Dave'

// type aliases used for basic functions
// interfaces used for classes and more complex structures
type mathFunction =  (a: number, b: number) => number
interface mathFunction2 {
    (a: number, b: number): number
}


// type guard -> x? - if (typeof x !== undefined) {return x} else return null

// never type -> infinite loop or one that throws error


// type assertion / type casting

type one = string
type two = string | number 
type Three = 'hello'

let a: one = 'hello'
let b = a as two // less specific assignment
let c = a as Three // more specific assignment

let d = <one>'world'
let e = <string> 'helio' // cant do this syntax in react

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b 
}

let myVal: string = addOrConcat(2, 2, 'concat') as string


(10 as unknown) as string // force casting
// you know better than ts


// DOM 

const img = document.querySelector('img')!
const myImg = document.getElementById('#myimg') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById("#myimg")

img.src
myImg.src



// Classes

class Coder {
    constructor(public name: string, readonly music: string, protected readonly age: number, private lang: string){
        this.name = name
        this.age = age
        this.music = music 
        this.lang = lang 
    }
}

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class singer implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name 
        this.instrument = instrument
    }

    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id:number

    constructor(public name: string){
        this.name = name 
        this.id = ++Peeps.count
    }
}

class Bands {
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }

    public set data(value: string[]){
        if (Array.isArray(value) && value.every(ele => typeof ele === 'string'))
        {
            this.dataState = value
        }else throw new Error('prama is not array of strings')

    }
}

// Index Signatures

// When creating objects when dk object keys, know structure of objects
// declare type of keys and values 
// accessing object property dynamically 

interface TransactionObj {
    [index: string]: number 
}

const today: TransactionObj = {
    'Pizza': -10,
    'Books': -5,
    'Job': 50
}

console.log(today['Pizza'])

interface Student {
    name: string,
    GPA: number,
    classes? : number[]
}

const student: Student = {
    name: "juni",
    GPA: 8.3,
    classes: [100, 200]
}

for (let x in student){
    console.log(student[x as keyof Student]);
    // union of all key types is keyof
}


// Generics
const echo = <T>(arg: T): T => arg
