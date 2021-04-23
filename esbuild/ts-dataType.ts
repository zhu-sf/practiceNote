let list: Array<number> = [1, 2, 3]

let myAdd = function (x: number, y: number): number { console.log(x + y); return x + y; }

myAdd(1, 2)

function fn(params: number): number {
    console.log(params);

    return params
}

fn(1)
// 在typescript里的函数，只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确

let fn2: (x: number) => number = function (a) {
    return a
}

// 在typescript里的函数，实参和形参的数量必须一致（在没有使用可选参数、默认参数或者剩余参数的情况下）

function fn3(a: number, b: string) {
    console.log(a, b);

}

fn3(1, 'fafdsa')

// 在typescript里的函数，使用?实现可选参数的功能，可选参数必须跟在必须参数之后

function fn4(a: number, b: string, c?: string) {
    console.log(a, b, c);

}

fn4(1, 'fafdsa', 'adf')

// 在typescript里的函数，可以为参数设置默认值，在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略 。注意：默认值和可选参数不能作用在同一个参数上

function fn5(b: string, c: string, a: number = 1,) {
    console.log(a, b, c);

}

fn5('dasa', 'adf')

// 在typescript里的函数，可以设置剩余参数来接收0个或者多个参数，用法为'...'加上参数数组

function fn6(a: number = 1, ...other: string[]) {
    console.log(a, other);

}

fn6(0, 'adf', 'fasd') // 0 adf undefined


// object
// 直接使用object来声明，object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
let obj1: object = {}
// obj1 = 'asfda' 报错：不能将类型“string”分配给类型“object”


// 使用{}对象结构
let obj2: { a: string, b: number } = {
    a: '12321',
    b: 2
}

// 使用interface接口来定义，在后面的高级用法会进行具体的讲解

interface objType {
    a: string;
    b?: number;
    readonly c: number; // interface中可以对一些属性设置只读属性，只能在对象刚创建的时候修改其值
}

let obj3: objType = {
    a: '1',
    c: 1
}


// enum（枚举）
// （1）数字枚举 如果不使用初始化器，枚举的第一个值为0，其余成员如果没有赋值，它的值为上一个枚举成员的值加1
enum Direction {
    Up = 1,
    Down,
    Left = 10,
    Right
}

console.log(Direction.Down, Direction.Right, Direction, Direction[1])



// interface

// 可以用来声明函数
interface FnType {
    (x: number): void
}



let fn7: FnType = function (x) {
    //  return x
}
let fn8: (x: number) => number = function (x) {
    return x
}

function fn9(x: number): number {
    return x
}

function fn10(): FnType {
    let fnType
    return fnType
}


console.log(fn7(1));


// 混合类型？
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter() {
    let counter = <Counter>function (start) {  // <Counter> 混合类型里匹配函数类型？
        return ''
    };
    counter.interval = 1
    counter.reset = () => {

    }
  
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

console.log(c);

