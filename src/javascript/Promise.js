/*Promise가 뭔가요?
프로미스는 자바스크립트 비동기 처리에 사용되는 객체입니다.
여기서 자바스크립트의 비동기 처리란 ‘특정 코드의 실행이 완료될 때까지
기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성’을 의미합니다.
비동기 처리에 대한 이해가 없으시다면 이전 글 ‘자바스크립트 비동기 처리와 콜백
함수’를 읽어보시길 추천드립니다 :)
위 API가 실행되면 서버에다가 ‘데이터 하나 보내주세요’ 라는 요청을 보내죠.
그런데 여기서 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에
데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 뜹니다.
이와 같은 문제점을 해결하기 위한 방법 중 하나가 프로미스입니다.
처리 순서를 확실히 정하는 것
*/

/* Promise 예제 */
function getData(callback) {
  // new Promise() 추가
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function(tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});

/* Promise 의 3가지 상태(states)
Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태 */


/* 예제 */
function getData() {
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      if (response) {
        resolve(response);
      }
      reject(new Error("Request is failed"));
    });
  });
}

// 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
getData().then(function(data) {
  console.log(data); // response 값 출력
}).catch(function(err) {
  console.error(err); // Error 출력
});


/* 에러 처리 방법 */

// 1.then()의 두 번째 인자로 에러를 처리하는 방법

getData().then(
  handleSuccess,
  handleError
);

// 2.catch()를 이용하는 방법

getData().then().catch();