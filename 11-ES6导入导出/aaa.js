//导出方式一：多个一起导出
let name = '小明';
function sum(num1, num2) {
  return num1 + num2;
}
export {
  name, sum
}

//导出方式二：单个导出
export let name1 = '小红';

//导出方法
export function sum1(num1, num2) {
  return num1 + num2;
}

//导出类
export class Person {
  run() {
    console.log('在奔跑');
  }
}

//export default======>在导入时可以自定义属性或方法的名字，但是default只能写一个
export default function (a) {
  console.log(a);
}