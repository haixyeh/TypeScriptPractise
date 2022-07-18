/**
 * unknown （少見需要使用）
 * 未知 -> 用來表達不知道輸入會是什麼
 * unknown 比使用 any來得更明確，但如果能夠定義更明確的會有可能的type會更好 ex: userName: string | number
 */

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// 此處會被明確指出 類型不同，但是設定由unknown 改成any 會可以正常被使用
// userName = userInput;

/**
 * 如果要讓這段可以被運作，要給一段判斷式
 * */ 
if (typeof userInput === 'string') {
  userName = userInput;
}

let a = 123;
/**
 * never Type（基本上沒有任何function需要使用到）
 * 在函數上使用，明確表達不回傳任何值，並從根本上的你的代碼會被crash(無法被正確執行)，讓你的function意圖更佳清楚
 * 
 * throw => 丟出錯誤，並不會繼續執行 function函數內容，除非是使用try catch
 */
function generateError(message: string, code: number): never {
  if (code !== 200) {
    throw { message: message, errorCode: code };
  } else {
    throw { }
  }
}