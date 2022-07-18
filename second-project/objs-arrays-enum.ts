
enum Role2 { ADMIN, READ_ONLY, AUTHOR };

const person 
: {
  name: string,
  age: number,
  hobbies: string[],
  // Array 可以以元祖(Tuple)方式被定義
  role: [number, string]
  // 枚舉 enum
  role2: Role2
} 
= {
  name: "Ryan",
  age: 27,
  hobbies: ['Sport', 'Cooking'],
  // 若不定義type會自動定義成 -> (string | number)[]
  role: [10, 'author'],
  role2: Role2.ADMIN
};

// 例外： 雖然說Tuple有告知了, 只有兩個元素, 但push是唯一不會被 TypeScript 補抓到的錯誤
// person.role.push('admin');
// 但如果是明確定要被更改, 此元祖的設定會被明確告知，只能設定兩個元素
// person.role = [5, 'Ryan', 'Root'];


// 因為定義了 Tuple [1] 為string 所以會噴錯
// person.role[1] = 100;


for (const hobby of person.hobbies) {
  // 因為 hobby 被TypeScript 被認為是String 所以 無法被map 也會被 補抓到此錯誤
  // hobby.map
  
  // 其它可以被string使用的method 則可以正常運作
  console.log(hobby.toLocaleUpperCase(), "hobby.toLocaleLowerCase()");
}


if (person.role2 === Role2.ADMIN) {
  //會得到 Ryan is 0 （枚舉enum 會從 0 開始定義）
  console.log(person.name + ' is ' + person.role2)
  // 0 
  console.log(Role2.ADMIN);
  // ADMIN
  console.log(Role2[0]);
  /**
   * 查看Enum 會得到以下 Object
   * {
   *   "0": "ADMIN",
   *   "1": "READ_ONLY",
   *   "2": "AUTHOR",
   *   "ADMIN": 0,
   *   "READ_ONLY": 1,
   *   "AUTHOR": 2
   * }
   */
  console.log(Role2);
}