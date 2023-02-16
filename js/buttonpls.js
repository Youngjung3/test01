function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    const resultElement1 = document.getElementById('result2');

    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    let number2 = resultElement1.innerText;
    
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 2+','+200+"원";
    }else if(type === 'minus')  {
      number = parseInt(number) - 2+','+200+"원";
    }
    if(type === 'plus') {
      number2 = parseInt(number2) + 1;
    }else if(type === 'minus')  {
      number2 = parseInt(number2) - 1;
    }

    
    // 결과 출력
    resultElement.innerText = number;
    resultElement1.innerText = number2;

}