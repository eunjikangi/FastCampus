# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Part3. 나의 첫 번째 앱 '일기장' 만들기

### 01. 개발의 시작 - 기획

#### 기획서

S/W 제품 개발을 위한 기획서는 **문제를 정의**하고, 그 문제에 대한 해결책을 개발하기 위한 요구사항이나 기능, 일정, 자원등을 체계적으로 정리한 문서이다.
**문제 정의**가 우선되어야 한다. 어떤 문제를 해결하기 위한 기술인지가 제일 중요함!!

#### 기능 정의서

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

### 달력 UI - 하나의 컴포넌트?

1. 다이어리 제목

- title

2. 월 변경 버튼 (왼쪽, 오른쪽 화살표 / 오늘 버튼)

- button group

3. 요일 및 날짜 표시 창

- calendar
- 요일
- 숫자

4. 명언

Q. 컴포넌트 단위는 '한 페이지'가 되는게 좋으려나? 일단 그렇게 해바
