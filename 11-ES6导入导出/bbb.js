//对应导出方式一：多个一起导出
import {name, sum} from './aaa.js'

console.log(name);
console.log(sum(20, 30));

//对应导出方式二：单个导出
import {name1} from './aaa.js'

console.log(name1);

//对应导出方法
import {sum1} from './aaa.js'

console.log(sum1(30, 40));

//对应导出类
import {Person} from "./aaa.js";

const person = new Person();
person.run();

//对应export default
import myFun from './aaa.js'

myFun('export default');