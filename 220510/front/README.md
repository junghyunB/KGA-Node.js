React : 라이브러리
페북이 만든 라이브러리
  - react
  - react.dom

CRA : 프레임워크 - 코드를 합쳐주는 용도
  - react
  - react.dom
  + babel
    jsx => js영역에서 HTML을 사용할 수 있게 해줌 (객체로 반환함) - 페이스북이 차용해옴

  + webpack
    ㄴ 브라우저와 통신하는 여러개의 복잡한 js파일을 단 하나의 js파일처럼 번역해주는 번들
    ㄴ 싱글 페이지 어플리케이션을 여러인원이 개발하며 변수명 등이 충돌하는 것을 방지
    ㄴ 웹팩 대용으로 Vite가 나왔다

리액트(자체)는 사실 서버가 없다!
  webpack dev를 통해 서버처럼 보여지는 것
  배포할때는 사용이 불가능하다
  

목적) 리액트 프로젝트 생성 - 폴더구조
0510
- front : 3000
  리액트 (브라우저에서 요청을 날린다)

- back : 3500
  npm -y
  npm install express
  server.js
  GET / helloworld
  npm install cors // 미들웨어 함수 반환

procsess끼리 데이터 공유가 안됨
- 통신을 통해 가능하게 됨 (HTTP로!)
- 요청은 브라우저가 하니 리액트에서 브라우저를 만들어준다.

이벤트는 보통 온클릭,
온클릭 시 요청을 서버로 던지도록 만들어주면 된다!!
-axios!!!!!!!
    axios.get('/', 헤더정보)
    axios.post('/', 바디, 헤더정보)