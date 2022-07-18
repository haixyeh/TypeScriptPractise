function add(number1: number, number2:number) {
  return number1 + number2;
}

// function printResult2(num: number): void 
// 若沒有返回任何東西只是執行 宣告的返回參數可以設定 void
// 但更好的做法就是不設定，讓typeScript自行預設設定
function printResult2(num: number) {
  console.log('result:' + num);
}

// printResult2(add(20, 40));


// undefined 若設定了 :undefined
// 但卻沒任何返回，會造成錯誤
// function printResult3(num: number): undefined {
//   console.log('result:' + num);
// }
// printResult3(add(21, 40));

// undefined 也是TypeScript 中定義的項目
// 若返回沒有任何東西時可以這樣設定，即便通常很少會這樣做
// void 在這裡也可北正常執行
function printResult4(num: number): undefined {
  console.log('result:' + num);
  return;
}

// printResult4(add(22, 40));

/**
 * combineValues 另外定義的參數 若未宣告則會變成any 但這樣就失去, 原先在add設定 type的定義
 */
let combineValues;
combineValues = add;

console.log(combineValues(1,2));
// 因為 combineValues 被設為 any, 變成字串也可以被接受
console.log(combineValues('aa','bb'));

// 甚至要重新定義為字串也可以被接受
combineValues = '1234';
// 或是其他function
combineValues = printResult4;



/**
 * combineValues2 可以被定義為 Function,
 * 問題同上 但字串定義就不會被接受了
 */

let combineValues2: Function;
combineValues2 = add;

console.log(combineValues2(1,2));
// 因為 combineValues2 被設為 any, 變成字串也可以被接受
console.log(combineValues2('aa','bb'));

// 因 combineValues2 被定義為 Function String 字串就不會被接受了
// combineValues2 = '1234';
// 或是其他function (這裡一樣有問題)
combineValues = printResult2;


/**
 * combineValues3
 * 正確定義方式 (a: number, b: number) => number
 */

let combineValues3: (a: number, b: number) => number;
combineValues3 = add;

console.log(combineValues3(1,2));
 // 這裡傳入string就會噴錯了
//  console.log(combineValues3('aa','bb'));

 // 因 combineValues3 被定義為 Function String 字串就不會被接受了
 // combineValues3 = '1234';

 // 因 (num: number): undefined 定義結果不同所以會噴錯
// combineValues3 = printResult2;


/** ======================= */

/**
 * 回調函數使用方式(call back TypeScript)
 */
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

/**
 * 回調函數可正常被使用
 */
addAndHandle(10, 20, (result) => {
  console.log(result);

  // 因使用void 是否回傳結果都沒關係
  // return result;
})


/**
 * 回調函數可正常被使用，
 * 若這邊再多傳一個參數，則會明確提示錯誤
 */
// addAndHandle(10, 20, (result, set) => {
//   console.log(result);
//   console.log(set);
// })