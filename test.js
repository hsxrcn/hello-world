// 获取字符串的长度
// console.log(strLength('hello world', false));
function strLength(s, bUnicode255For1) {
	let len = s.length;
	if (bUnicode255For1) {
		return len;
	} else {
		for (let i in s) {
			if (s.charCodeAt(i) > 255) {
				len++;
			}
		}
		return len;
	}
}
// 返回函数(函数柯里化)
// console.log(functionFunction('Hello')('world'));
function functionFunction(s1) {
	return function (s2) {
		return s1 + ', ' + s2;
	};
}
// 使用 apply 调用函数
function callIt(fn) {
	var args = [];
	for (var i = 1; i < arguments.length; i++) {
		args.push(arguments[i]);
	}
	return fn.apply(null, args);
}

// call、apply、bind 使用
// var obj={
//   myFun: function(m,t) {
//     console.log(m+t);
//   }
// }
// obj.myFun.call(db,'a','b')
// obj.myFun.apply(db,['c','d'])
// obj.myFun.bind(db,'e','f')()
// var db = {
// }

// 二次封装函数
// function partialUsingArguments(fn) {
//   let arr = [];
//   let arr2 = [];
//   arr = [...arguments].slice(1)
//   let result = function () {
//     arr2 = [].slice.call(arguments) // [...arguments]
//     return fn.apply(null,arr.concat(arr2))
//   }
//   return result
// }
// function partialUsingArguments(fn) {
//   let arr = [];
//   let arr2 = [];
//   arr = [...arguments].slice(1)
//   let result = function () {
//     arr2 = [...arguments]
//     return fn(...arr,...arr2)
//   }
//   return result
// }

// 二进制转换1
// function valueAtBit(num, bit) {
//   let twoBit = num.toString(2).split('').reverse();
//   return twoBit[bit-1]
// }
// let a = parseInt(10000000, 2);
// console.log(a);

// 二进制转换
// convertToBinary(1024)
// convertToBinary(2)
function convertToBinary(num) {
	let twoBit = num.toString(2).split('').reverse();
	let res = [];
	if (twoBit.length < 8) {
		for (let i = 0; i < 8; i++) {
			twoBit[i] ? res.push(twoBit[i]) : res.push('0');
		}
		console.log(res.reverse().join(''));
	} else {
		console.log(twoBit.reverse().join(''));
	}
}
// 属性遍历
function iterate(obj) {
	const keyArr = Object.keys(obj);
	const temp = [];
	for (let i in keyArr) {
		temp[i] = keyArr[i].concat(': ', obj[keyArr[i]]);
	}
	return temp;
}

// 检查重复字符串
// containsRepeatingLetter('bookkeeping')
function containsRepeatingLetter(str) {
	let strArr = str.split('');
	console.log(strArr);
	let regex = /[a-z]/i;
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] === strArr[+i + 1] && regex.test(strArr[i])) {
			return true;
		}
	}
	return false;
}

// JS74 获取指定字符串
// captureThreeNumbers('abcdef123')
//正则匹配出三个连续数字，然后再判断是否连续
function captureThreeNumbers(str) {
	const arr = str.match(/\d{3}/);
	console.log(arr);
	if (arr && arr.length) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][0] - 0 + (arr[i][2] - 0) === (arr[i][1] - 0) * 2) {
				return arr[i].toString();
			}
		}
	}
	return false;
}
// input.replace(/[\n]/g,'').split('');
// JS75 判断是否符合指定格式
// matchesPattern('444-333-4442')
function matchesPattern(str) {
	let a = str.split('-');
	return (
		a[0].length === 3 &&
		!isNaN(a[0]) &&
		a[1].length === 3 &&
		!isNaN(a[1]) &&
		a[2].length === 4 &&
		!isNaN(a[2])
	);
}

// JS46 斐波那契数列
// function fibonacci(n) {
//     if(n<=2) {
//       return 1
//     } else {
//       return fibonacci(n-1)+fibonacci(n-2)
//     }
// }

// JS62 柯里化
function curryIt(fn) {}

// JS65 二进制转换
// base10(11000000)
// function base10(str) {
//     return parseInt(str,2)
// }

// JS67 乘法
// multiply(3, 0.0001)
// function multiply(a, b) {
//   console.log(b.toString().split('.')[1].length);
// }

// 数组去重
// const a = [1,2,3,4,4,4,5,5,6,6,7];
// const b = [1,2,3,4];
// const c = [4,5,6];

// const d = [1,2,3,4,5];
// const e = [4,5,6];
// sameRemova()
// function sameRemova(){
//   for(let i= 0;i < a.length; i++) {
//     for(let j=i+1; j < a.length; j++) {
//       if(a[i] === a[j]) {
//         a.splice(i,1);
//         i--;
//         console.log(object);
//         a.splice(j,1);
//         j--;
//       }
//     }
//   }
//   console.log(a);
// }
// 1. 两数之和
// 暴力破解
// var twoSum = function(nums, target) {
//   for(let i=0;i<nums.length;i++) {
//       for(let j=i+1;j<nums.length;j++) {
//           if(nums[i]+nums[j] === target) {
//             return [i,j]
//           }
//       }
//   }
// };
// 哈希表
// var twoSum = function (nums, target) {
//   let hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[target - nums[i]] !== undefined) {
//       if(i>hash[target - nums[i]]) {
//         return [hash[target - nums[i]],i]
//       }
//       return [i, hash[target - nums[i]]];
//     }
//     hash[nums[i]] = i;
//   }
//   return [];
// };
// console.log(twoSum([1,2,3,4,5,6,7],13));

// 原型
// function Foo() {}
// let f1 = new Foo()
// console.log(f1);
// console.log('f1.__proto__',f1.__proto__);
// console.log('Foo.prototype',Foo.prototype);
// console.log('f1.constructor',f1.constructor);
// console.log('Foo.prototype.constructor',Foo.prototype.constructor);
// console.log('Foo.constructor',Foo.constructor);

// 2631. 分组

// Array.prototype.groupBy = function(fn) {
//   let result = {};
//   for(let i = 0;i<this.length;i++) {
//      let key = fn(this[i])
//      console.log('key',key);
//      console.log('this[i]',this[i]);
//      if(result[key]) {
//        result[key].push(this[i])
//      } else {
//        result[key] = [this[i]]
//      }
//   }
//   console.log('result',result);
//   return result
// };
// Array.prototype.groupBy = function(fn) {
//   return this.reduce((init,item)=>{
//     let key = fn(item);
//     init[key] = init[key] || [];
//     init[key].push(item);
//     return init;
//   },{})
// }

// 测试用例1
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ],
// fn = function(item) {
//   return item.id;
// };
// 测试用例2
// array = [[1,2,3],[1,3,5],[1,5,9]]
// fn = function (list) { return String(list[0]); }
// 测试用例3
// array = [1,2,3,4,5,6,7,8,9,10]
// fn = function (n) { return String(n > 5); }
// 测试用例4
// array = [[1,2,3,4,5,6,7,8,9]]
// fn = function (list) { return String(list.length); }
// array.groupBy(fn);

// 分组（应用于将两个列表上的数据合并）
// const persons = [
//   { name: 'Alice', birthYear: 1990 },
//   { name: 'Bob', birthYear: 1972 },
//   { name: 'Jose', birthYear: 1999 },
//   { name: 'Claudia', birthYear: 1974 },
//   { name: 'Marcos', birthYear: 1995 }
// ];

// const decades = [
//   { start: 1970, theme: 'Disco' },
//   { start: 1980, theme: 'Arcades' },
//   { start: 1990, theme: 'Beanie Babies' }
// ];

// const groupedByDecade = persons.groupBy((person) =>  {
//   const decade = Math.floor(person.birthYear / 10) * 10;
//   return String(decade);
// });

// const decadesWithPeople = decades.map((decade) => {
//   return {
//     ...decade,
//     people: groupedByDecade[decade.start] || [],
//   };
// });
// console.log('decadesWithPeople',decadesWithPeople);

// URL参数拼接
// let QUERY = 'isWkWeb=1&enableAjaxHook=0';
// let addQuery = (v) => {
// 	const _url = new URL(v);
// 	const _params = new URLSearchParams(_url.search);
// 	for (const item of QUERY.split('&')) {
//     console.log('item',item);
// 		if (item) {
// 			const itemChild = item.split('=');
// 			_params.append(itemChild[0], itemChild[1]);
// 		}
// 	}
// 	_url.search = _params;
// 	console.log(_url.href);
// 	return _url.href;
// };
// let u = addQuery('http://www.baidu.com');
// console.log('URl',typeof u);

// call的基本使用
const person = {
  name: 'tom',
  say: function(message) {
    console.log(`${this.name} say ${message}`);
  }
}
const student = {
  name: 'jerry'
}
person.say.call(student,'hello');

// apply的基本使用
const person2 = {
  name: 'tom',
  say: function(message1, message2) {
    console.log(`${this.name} say ${message1} ${message2}`);
  }
}
const student2 = {
  name: 'jerry'
}
person2.say.apply(student2,['hello', 'world']);

// bind的基本使用
const person3 = {
  name: 'tom',
  say: function(message) {
    console.log(`${message} ${this.name} say hello`);
  }
}
const student3 = {
  name: 'jerry'
}
const say = person3.say.bind(student3, '2s');
setTimeout(say, 2000);

// 手写call
Function.prototype.myCall = function(context) {
  if (typeof context === undefined || context === null) {
    context = window;
  }
  const symbol = Symbol();
  context[symbol] = this;
  const arg = [...arguments].slice(1);
  const result = context[symbol](...arg);
  delete context[symbol];
  return result;
}
// 手写apply
Function.prototype.myApply = function(context) {
  if (typeof context === undefined || context === null) {
    context = window;
  }
  const symbol = Symbol();
  context[symbol] = this;
  let result;
  if(arguments[1]) {
    result = context[symbol](...arguments[1]);
  } else {
    result = context[symbol]();
  }
  delete context[symbol];
  return result;
}
// 手写bind
Function.prototype.myBind = function (context) {
  // 处理 context 为 undefined 或 null 的情况
  if (typeof context === undefined || context === null) {
    context = window; // 默认绑定到全局对象
  }
  const that = this;
  const args = [...arguments].slice(1);
  return function F() {
    // 处理构造函数情况
    if(this instanceof F) {
      return new that(...args, ...arguments);
    }
    // 处理普通函数调用
    return that.apply(context, args.concat(...arguments));
  }
}