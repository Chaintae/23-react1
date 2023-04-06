# 201930331 차인태
# 23-React1
# 6주자 04/06
* 컴포넌트 추출
-  복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있습니다.
-  큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것입니다.
-  1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.
*
# 5주차 03/30
엘리먼트의 정의
엘리먼트는 리액트 앱을 구성하는 요소를 의미한다
엘리먼트는 리액트 앱의 가장 작은 빌딩 블록득
웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미한다

엘리먼트의 생김새
리액트 엘리먼트는 자바스크립트 객체의 형태로 존재한다
컴포넌트, 속성, 및 내부의 모든 children을 포함하는 일반js객체이다
이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있다

엘리먼트의 특징
리액트 엘리먼트의 가장 큰 특징은 불변성입니다.
즉, 한 번 생성된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없습니다.
만일 내용이 바뀌면 어떻게 해야 할까요?  
• 이 때는 컴포넌트를 동해 새로운 엘리먼트를 생성하면 됩니다.  
• 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는   것입니다.

이렇게 교체하는 작업을 하기위해 Virtual DOM을 사용합니다.

리액트는 컴포넌트 기반의 구조를 같습니다  
컴포넌트 재사용이 가능하기 때문에 코드의 양을 줄일 수 있어 개발   시간과 유지 보수 비용도 줄일 수 있습니다    
컴포너트는 자바스크립트 함수와 입력과 출력이 있다는 면에서는  유사합니다.
엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷합니다.

* Props의 개념
컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.
props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
에어비엔비도 마찬가지 입니다.
* Props의 특징
읽기 전용입니다. 변경할 수 없다는 의미 입니다.
속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

* Pure 함수 vs Impure 함수
Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수입니다.
Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수입니다.

* Props 사용법
JSX에서는 key-value쌍으로 props를 구성합니다.

* 컴포넌트의 종류
리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용
이후 hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다
예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에
클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 함
* 컴포넌트 이름 짓기
이름은 항상 대문자로 시작
리액트는 소문자로 시작하는컴포넌트를 DOM 태그로 인식하기 때문
컴포넌트 파일 이름과 컴포넌트 이름은 같게 한다

* 컴포넌트 추출
복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있다
큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋다.









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
  h1 className="greeting">
    Hello, world!
  /h1
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);


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


자바스크립트의 자료형, 연산자, h태그 등을 배웠다
# 3주차 3/16 질병으로 인한 결석
# 2주차

리엑트 장점과 단점
장점: 빠른 업데이트와 렌더링 속도
(동기식 비동기식)


