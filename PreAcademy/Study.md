# 241210 (화)

# MVP (Minimum Viable Product)

: 프로그램이 제공하고자 하는 서비스에서 최소한의, 필수적인 기능만을 구현한 제품.
(다른 방법론들도 많다. ex.PoC)

아래 일기장 리스트에서 최소한의 기능만 선택하면 다음과 같다.

- [x] 일기 쓰기
- 일기 수정하기
- 일기 삭제하기
- [x] 일기 보기
- [x] 달력 UI 제공
- 오늘 보기
- 월 변경
- 년 변경
- 날짜 변경
- 오늘로 이동

## 컴포넌트

: 재활용 가능한 구성요소!

## 컴포넌트, 엘리먼트...!

: 흠 아리까리한데? React template으로 프로젝트를 만들었고, 그에 대한 설명을 들었는데 잘 모르겠다.

# 241211 (수)

### 리액트의 컴포넌트

- 크롬 웹 스토어에서 React Developer Tools 다운받으면 F12 개발자도구에서 리액트의 컴포넌트 단위로 내용 확인이 가능하다.

```
// 컴포넌트는 param으로 객체를 받는다.
function Test(props) {
  // style은 객체로 설정되어야 하기 때문에 미리 style 객체를 만들어줌.
  const style = {
    color: props.color,
  };

  return (
    <div>
      <h1>안녕 이건 테스트야</h1>
      // 변수를 사용하려면 대괄호로 묶어주어야 함.
      <h2 style={style}>
        {props.title} + {props.eundy}
      </h2>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      // React 컴포넌트는 대문자로 시작한다. html tag와 구분.
      // param은 이렇게 하나씩 넘겨준다. 객체로 넘기는 것도 가능할듯? -> 스프레드 연산자를 사용하여 넘겨주어야 함. {...object}
      <Test title="2nd Test" eundy="custom" color="green" />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
```

# 241213 (금)

## Part3 - 04. 아키텍처 정하기

- UI보면서 CodePen 켜서 어떤 식으로 작업하면 좋을지 구조 직접 만들어보는 연습하기
- jsx는 className 으로 class 이름을 지정한다!
- react에서 style을 지정하는 방법 : 외부 css파일 만들기 / style객체 지정하기
- tailwindcss : 미리 지정된 style class 라이브러리를 사용할 수 있음.
- styled-components : Style을 react의 컴포넌트로 지정하여 tag로 감싸줘서 적용할 수 있구나. 신기하당!
