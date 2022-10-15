import 'reflect-metadata';

////////////////////////////////////////////////////////
// クラスデコレーター
const BaseEntity = (ctr: Function) => {
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date().toLocaleString('es-ES');
};

@BaseEntity
class Course {
  constructor(public name: string) {}
}

@BaseEntity
class Subject {
  constructor(public name: string) {}
}

@BaseEntity
class Student {
  constructor(public name: string) {}
}
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// メソッドデコレーター
function checkCalculate(num: number) {
  return (
    _target: Object,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const addFunc = descriptor.value;
    descriptor.value = function (...args: number[]) {
      // apply() メソッドを使って、デコレータを設置する元メソッドを呼び出す
      const result = addFunc.apply(this, args);
      // 元メソッドの返却値が10未満のときは、掛け算を実行する
      return result < 10 ? result * num : result;
    };
  };
}

class Calculate {
  @checkCalculate(10)
  sum(a: number, b: number): number {
    return a + b;
  }

}

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// propデコレーター

const KEY = Symbol('test key');
function hoge(target: any, propKey: string, desc: PropertyDescriptor) {
  console.log("propKey",propKey)
  const sample = Reflect.getMetadata(KEY, target, propKey);
  console.log(`値は ${sample} です`);
}

function fuga(sample: string) {
  return (target: any, propKey: string, idx: number) => {
  console.log("propKey2",propKey)
    Reflect.defineMetadata(KEY, sample, target, propKey);
  };
}

class SomeClass {
  @hoge
  someMethod(@fuga('テスト') name: string) {
  }
}
// @ts-ignore
// line.end = {}

// Fails at runtime with:
// > Invalid type, got object not Point

// 型エラーが出るため、@ts-ignoreしている

const main = () => {
  const mathCourse = new Course('English');

  // @ts-ignore
  console.log('id: ' + mathCourse.id);
  // @ts-ignore
  console.log('created: ' + mathCourse.created);

  const john = new Student('John Doe');

  // 50 -> 1 + 4 = 5を実行した後に、5 < 10だったため更に5 x 10 = 50を返す
  console.log(new Calculate().sum(1, 4));
  // 21 -> 20 + 1 = 21を実行した後に、21 > 10だったため、掛け算は実行せずそのまま21を返す
  console.log(new Calculate().sum(20, 1));
  const bug = new SomeClass()
  console.log(bug.someMethod("yuki"))

};
// ...
main();
