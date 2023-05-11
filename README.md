# 201930331 차인태
# 23-React1
# 10주차 05-11
## 12장
### 12장 코드
```js
import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;
```
```js
const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]}):
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;
```
### Shared State
공유된 state를 의미
```js
function BoilingVerdict(props){
    if (props.celsius >=100){
      return <p> 물 끓음 </p>
    }
    return <p> 안끓음 </p>
  }
```
# 9주차 05-04
## 10장
### 리스트와 키란?
* 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것이다.
* 키는 각 객체나 아이템을 구분할 수 있는 고유한 값이다.
리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있음
### 여러개의 컴포넌트 렌더링
* 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를 map()함수를 이용해 렌더링
### 리스트의 키에 대해
* 리스트에서 키란 ? "리스트에서 아이템을 구별하기 위한 고유한 문자열"
* 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거 되었는지 구분하기 위해 사용
* 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다

## 11장 
### 폼이란 무엇인가?
* 폼은 일반적으류 사용자로부터 입력을 받기 위한 양식에서 많이 사용 (textarea, select,file input, input null value)
### File inpuit 태그
* 값이 읽기 전용이기 때문에 비제어 컴포넌트가 된다.
### Input Null Value 태그 
* 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없음
* 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 된다.
### 제어 컴포넌트
* 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트


# 8주차 04-27
## 이벤트 처리하기
### DOM, React
* 1.둘의 차의점은 이벤트 이름이 onclick에서 onClick으로 변경
* 2.전달하려는 함수는 문자열에서 함수 그대로 전달 
### 이벤트 핸들러 추가하는 방법은?
* 버튼 클릭하면 이벤트 핸들러 함수인 handleClick()함수를 호출
* bind를 사용하지 않으면 this.handleClick은 클로벌 스코프에서 호출되어, undefined으로 사용할 수 없기 때문이다.
* bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있다.
* 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 하기
* 함수형에서는 this를 사용하지 않고, onClick에서 바로 HandleClick을 넘기면 됩니다.
### Arguments 전달하기
* 함수를 정의할 떄는 파라미터(Parameter) 혹은 매개변수, 함수를 사용할 때는 아귀먼트(Argument)
혹은 인자라고 부릅니다
* 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다.
## 조건부 렌더링
* props로 전달 받은 isLoggedln이 true이면 <UserGreeting/>을, false면 <GuestGreeting/>을 retur합니다.
* 이와 같은 렌더링을 조건부 렌더링 이라고 합니다.
## 엘리먼트 변수
* 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수이다
## 인라인 조건
* 필요한 곳에 조건문을 직접 넣어 사용하는 방법
### 인라인 if
* if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용합니다.
* &&는 and연자로 모든 조건이 참일때만 참이 됩니다.
* 첫번째 조건이 거짓이면 두번째 조건은 판단할 필요가 없습니다. 단축평가
### 인라인 if-else
* 삼항 연산자를 사용
* 문자열이나 엘리먼트를 넣어서 사용할 수도 있다.



# 7주차 04/13
## 훅이란?
* 클래스횽 컴포넌트에선느 생성자(constructor)에서 state를 정의하고, setState()함수를 통해 state를 업데이트합니다.
* 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었다.
* 훅의 이름은 모두'use'로 시작
* 사용자 정의 훅(custom hook)을 만들 수 이쓰며, 이 경우에 이름은 자유롭게 할 수 있으나'use'로 시작할 것을 권장(무조건)
## useEffect
* useState와 함께 가장 많이 사용하는 hook
* 이 함수는 사이드 이펙트를 수행하기 위한 것입니다.
* 영어로 side effect는 부직용을 의미합니다. 일반적으로 프로그래밍에서 사이트 이펙트는'개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'
* 하지만 리액트에서는 효과 혹은 영향을 뜻하는 effect의 의미에 가깝다.
* 예를 들면 서버에서 데이터를 받아오거나 수동으로 dom을 변경하는 등의 작업을 의미한다.
* 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공.
* useEffect()함수는 다음과 같이 사용합니다
* 첫 번째 파라미터는 이팩트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어갑니다.
* 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됩니다.
* 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 랜더링 이후에 실행
* 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됩니다. 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 때문에 여러번 실행되지 않는다.
* 의존성 배열을 생략하는 경우는 업데이트될 때마다 호출됨
## useMemo
* useMemo() 훅은 Memoizde value를 리턴하는 훅
* 이전 계산값을 갖고 있기 때문에 연산량이 높은 작업의 반복을 피할 수 있다.
* 이 훅은 렌더링이 일어나는 동안 실행
* 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됩니다.
* 예를 들면 useEffect에서 실행디어야 할 사이드 이팩트 같은 것

## useCallback
* useCallback() 혹은 useMemo()와 유사한 역할
* 차이점은 값이 아닌 함수를 반환한다는 점
* 의존성 배열을 파라미터로 받는 것은 useMemo와 동일
* 파라미터로 받은 함수를 콜백이라고 부름
* useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환

## useRef
* useRef()훅은 래퍼런스를 사용하기 위한 훅입니다.
* 래퍼선스란 특정 컴포넌트에 접근할 수 있는 객체를 의미
* useRef() 훅은 바로 이 래퍼런스 객체를 반환
* 래퍼넌스 객체에는 .current라는 속성이 있는데, 이것을 현재 참조하고 있는 엘리먼트를 의미합니다.
* 이렇게 반환된 래퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지
* 즉, 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미
  
## 훅의 규칙
* 첫 번째 규칙은 무조건 최상의 레벨에서만 호출해야 한다는 것
* 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨
* 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야함
* 두 번째 규칙은 리액트 함수 컴포넌트에서만 휵을 호출
* 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됨
* 훅은 리액트 함수 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다.
### 커스텀 훅 추출하기
* 두 개의 자바스크립트 함수에서 하나의 로직을 공유하도록 하고 싶을 때 새로운 함수를 하나 만드는 방법을 사용
* 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한 방법을 사용할 수 있습니다.
* 이름을 use로 시작하고, 내부에서 다른 훅을 호출하는 자바스크립트 함수를 만들면 됩니다.
* 아래 코드는 중복되는 로직을 useUserStatus()라는 커스텀 훅으로 추출

# 6주차 04/06
## 컴포넌트 추출
* 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있습니다.
* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것입니다.
* 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.
* 처음에 비해 가독성이 높아짐
### chapter_05
* 별도의 객체로 받아 컴포넌트에서는 이것을 분리하여 출력
하도록 해야 한다.(map)함수 사용
## state와 생명주기
### state란?
* state는 리액트 컴포넌트의 상태를 의미
* 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미
* 컴포넌트의 변경가능한 데이터를 의미
* State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함
### state의 특징
* 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐
* 함수형에서는 useState()라는 함수를 사용 




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


