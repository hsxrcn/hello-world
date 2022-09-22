
// 获取字符串的长度
// console.log(strLength('hello world', false));
function strLength(s, bUnicode255For1) {
  let len = s.length
  if (bUnicode255For1) {
    return len
  } else {
    for (let i in s) {
      if (s.charCodeAt(i) > 255) {
        len++
      }
    }
    return len
  };
};
// 返回函数(函数柯里化)
// console.log(functionFunction('Hello')('world'));
function functionFunction(s1) {
  return function(s2) {
    return s1+ ", " + s2;
  };
}
// 使用 apply 调用函数
function callIt(fn) {
  var args = [];
  for(var i=1;i< arguments.length;i++){
    args.push(arguments[i])
  }
  return fn.apply(null,args)
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
  if(twoBit.length < 8){
    for(let i = 0; i<8; i++) {
      twoBit[i]? res.push(twoBit[i]) : res.push('0')
    }
    console.log(res.reverse().join(''));
  } else {
    console.log(twoBit.reverse().join(''));
  }
}
// 属性遍历
function iterate(obj) {
  const keyArr = Object.keys(obj)
  const temp = []
  for(let i in keyArr) {
    temp[i] = keyArr[i].concat(": ",obj[keyArr[i]])
  }
  return temp
}

// 检查重复字符串
// containsRepeatingLetter('bookkeeping')
function containsRepeatingLetter(str) {
  let strArr = str.split("")
  console.log(strArr);
  let regex = /[a-z]/i
  for(let i=0;i<strArr.length;i++) {
    if(strArr[i] === strArr[+i+1] && regex.test(strArr[i])) {
      return true
    }
  
  }
  return false 
}

// JS74 获取指定字符串
captureThreeNumbers('abcdef123')
//正则匹配出三个连续数字，然后再判断是否连续
function captureThreeNumbers(str) {
  const arr = str.match(/\d{3}/)
  console.log(arr);
  if (arr && arr.length) {
      for (let i = 0; i < arr.length; i++) {
          if ((arr[i][0] - 0) + (arr[i][2] - 0) === (arr[i][1] - 0) * 2) {
              return arr[i].toString()
          }
      }
  }
  return false
}










