//? 엘리먼트를 생성하는 함수 
// @param {string} tagName
// @param {string} props
// @returns {string}
//* 첫번째 매개변수 tagName은 문자열이어야 한다.
//* 두번째 매개변수 props는 객체여야 한다.
//* 리턴값은 문자열이다.

//* 아래의 함수의 안정성을 위해서 타입스크립트로 작성하시오.

// function createElementone( tagName : string ,props : object ){
  function createElementone(tagName: string, props: { [key: string]: string }): string {
  let propsString = "";
  for (let key in props) {
    propsString += ` ${key}="${props[key]}"`;
  }
  return `<${tagName}${propsString}></${tagName}>`;
}
console.log(createElementone('div', {class: 'training', id: 'typescript'}));
// props 매개변수는 { [key: string]: string } 타입으로 정의.
// 이는 props 객체가 string 값을 가진 모든 key와 함께 사용되어야 함을 의미
// key 변수는 for...in 루프에서 props 객체의 모든 속성을 반복하며 string 타입이다.
// 반환값은 string 타입

function createElementTwo(tagName: string, props: {[key:string]: string}): string {
  let propsString="";
  for (let key in props) { 
    propsString += ` ${key}="${props[key]}"`;
  }
  return `<${tagName}${propsString}></${tagName}>`;
}
console.log(createElementTwo('li',{class: '연습하기', id: 'ts'}));



