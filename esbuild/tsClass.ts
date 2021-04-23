// 在TypeScript里，成员都默认为 public ，表示可以该字面量可以被自由访问。当然你也可以明确的将每一个成员标识为public。
// 当成员被标记成 private时，它就不能在声明它的类的外部访问 。
class Animal {
    private subject = '猫科';
    name = 'string';
    constructor() {
        // this.name = '123'
        // this.subject = '猫科'
    }
    add() {
        this.name += this.subject + '123'
    }
}
let dog = new Animal()
dog.add()
console.log(dog.name);
// console.log(Animal.subject);




// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问 。


// readOnly 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

interface Fn<T> {
    (x: T) : T;
}
let a : Fn<string> = function (params:string) {
    return params
}


class addWay {
    initValue: number;
    constructor(parameters: number) {
        this.initValue = parameters
    }
    add() {
        return this.initValue
    }
}

let way = new addWay(0)
let way2 = new addWay('123')
console.log(way.initValue);
console.log(way2.initValue);
