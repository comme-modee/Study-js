// meetAt 함수를 만든 후 인자를 3개 받는다.
// 첫번째 인자는 년도에 해당하는 숫자, 두번째 인자는 월에 해당하는 숫자, 세번째 인자는 일에 해당하는 숫자이다.
// 년도 인자만 받았을 경우 → "1234년"과 같은 형식의 문자열을 return하기.
// 년도, 월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월"과 같은 형식의 문자열을 return하기.
// 년도, 월, 일 인자를 전부 받았을 경우 → 년도, 월 ,일을 조합해서 "1234/5/6"과 같은 형식의 문자열을 return하기.

// 결과 예시
// meetAt(2022); → 2022년
// meetAt(2022,3); → "2022년 3월"
// meetAt(2022,3,5); → "2022/3/5" 

function meetAt(year,month,date){
  if(date){ // date를 기입했다는 것은 앞에 year과 month를 기입했다는 걸 의미하므로 year와 month를 생략하고 date만 써도 된다.
    return `${year}/${month}/${date}`
  } else if(month){ // 위와 마찬가지 맥락으로 year이 이미 기입되어있다는 걸 예상할 수 있으므로 year생략 후 month만 기입.
    return `${year}년 ${month}월`
  } else if(year){
    return `${year}년`
  } // 위에서부터 인자를 가장 많이 받았을 경우(year,month,date)부터 인자를 가장 적게 받았을 경우(year) 순으로 if문을 작성해준다.
    // 인자를 가장 적게 받았을 경우(year)는 들어올 수 있는 모든 인자 값 경우의 수에 다 해당되기 때문에 if문에 앞쪽에 배치할 경우 조건에 걸러지질 않는다.
}

console.log(meetAt(2000,10))

// String 문자열 안에 동적인 값을 넣어주고 싶을 때 ${동적인값}정적인문장을 넣어주면 된다. 
// 그리고 이 문장을 감싸는것은 ""큰따옴표나 ''작은 따옴표가 아닌 `` 백틱이다




// 인자로 받은 값 중 가장 작은 값을 반환하는 함수

function findSmallestElement(arr){
  if(arr.length == 0){ //arr가 비어있다. 값이 없다.
    return 0
  }
  let result = arr[0] //arr에 입력된 값 중 첫번째 값을 일단 result에 넣어준다.
  for(let i=1; i<arr.length; i++){
    if(result > arr[i]){ //만약 result에 있는 값이 arr[i]값보다 크면
      result = arr[i] //arr[i]값을 result에 넣어준다
    }
  }
  return result
}

console.log(findSmallestElement([100,200,3,0,2,1]))




// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수

let unit = [50000, 10000, 5000, 1000, 500, 100]

function Change(money) {
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]) // Math.floor 버림 함수
    console.log(`${unit[i]} X ${num}`)
    money = money - (unit[i] * num) // for문을 한번 돌고 난 뒤 남은 잔돈을 money에 재할당시켜줌.
  }
}

Change(12300)