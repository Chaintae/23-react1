# 201930331 차인태
# 23-React1

자바스크립트의 자료형, 연산자, h태그 등을 배웠다
# 3주차 3/16 질병으로 인한 결석
리엑트 장점과 단점
장점: 빠른 업데이트와 렌더링 속도
(동기식 비동기식)
# 4주차 3/23
README.md 백업
local에 있는 저장소 이름 바꾸기/삭제
READE.me
GitHub 저장소 삭제
로컬에서 23-React1 푸시
깃허브 저장소 확인

JSX 소개
자바스크립트와 크게 다르지 않다.
a href 태그는 html과 같다.
JSX에 사용자 입력을 삽입하는 것은 안전하다.

Babel은 JSX를 React.createElement() 호출로 컴파일한다.
(Babel은 필요 할 수 있으니 기억해 놓으면 좋다.)

아래 두 예시는 동일하다.
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
---------------------------------------------
JSX의 역할
내부적으로 xml/html 코드를 자바스크립트로 변환한다
react가 createElement함수를 사용하여 자동으로 자바스크립토로 변환
만일 JS작업할 경우 직접 createElement함수를 사용해야 한다.
결국 JSX는 가독성을 높여 주는 역할을 한다.

JSX의 장점
코드가 간결
가독성이 향상
Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강하다.

JSX 사용법
모든 자바스크립트 문법을 지원한다
자바스크립트 문법에 xml과 html을 섞어서 사용한다
만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면{}괄호를    사용한다.





참조 https://ko.reactjs.org/docs/introducing-jsx.html
