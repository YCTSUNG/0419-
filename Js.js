function test(n) {
    for (let k = 2; k < n; k++) {
      if (n % k === 0) {
        return false;
      }
    }
    return true;
  }
  
  let input = document.querySelector("input");
  let num;
  let resultElement = document.querySelector(".數列");
  
  addEventListener("click", function (i) {
    num = input.value;
  
    function primeNumber(num) {
      let result = [];
  
      for (let i = 2; i <= num; i++) {
        if (test(i)) {
          result.push(i);
        }
      }
      return result;
    }
  
    // 計算結果
    let result = primeNumber(num);
    console.log(result);
    
    // 顯示結果
    resultElement.innerHTML = result.map(function (x) {
      return `<li>${x}</li>`;
    }).join(",");
  
    // 清空輸入欄位
    input.value = "";
  });
  