
// 可以另外自行定義 Type 避免重複的 type宣告
type combineAble = number | string;
type combineAbleResultType = 'isString' | 'isNumber';

function combine(
  input1: combineAble,
  input2: combineAble,
  resultType: combineAbleResultType
) {
  let result;
  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultType === 'isNumber') {
    result = +(input1) + +(input2);
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAges = combine(10, 20, 'isNumber');
console.log(combineAges, "combineAges");
const combineAgesString = combine('10', '20', 'isNumber');
console.log(combineAgesString, "combineAgesString");

const combineNames = combine('Ryan', 'Yeh', 'isString');
console.log(combineNames, "combineNames");