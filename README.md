# LeeChaeJung_WikiPage

프론트엔드 개발자 실무 과제

### Design Draft

https://www.figma.com/file/Vt0Jc4kWNcRDqjj4q15yGf/Untitled?node-id=0-1&t=FR37468Kdpbao6Oe-0

### 진행 과정

- 06-APR : initial commit! :tada:
- 06-APR : 디자인 초안작업 w/ Figma 🎨
- 06-APR : create react app!, 파일구조 setup 🔧
- 06-APR : Header & Footer CSS 작업 완료 🎨
- 07-APR : 메인페이지 CSS🎨, 데이터바인딩(w/ Json server), pagination(w/MUI Pagination library) ✨
- 07-APR : 상세보기페이지 CSS🎨 , 데이터바인딩 complete✨
- 08-APR : 게시글 추가 기능구현. 에러처리 및 등록 성공시 modal띄우기 작업 ✨
- 08-APR : 게시글 수정 기능구현. 에러처리 및 수정 완료 modal띄우기 작업 ✨
- 08-APR : sorting 최신순으로 구현 완료


### 기술 스택 & 라이브러리

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white"/> <img src="https://img.shields.io/badge/eslint-4B32C3?style=flat&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat&logo=prettier&logoColor=white"/> 

### 짧은 회고
- 06-APR : 프로젝트를 혼자서 시작하려니 조금 막막해 draft부터 그리고 파일구조를 정리했다. 디자이너님과 작업할 때 배웠던 Figma기능들을 이용해 편하게 draft를 그릴 수 있었고 아이콘을 export해서 사용할 수 있었다. 디자인을 어떻게 그릴지 고민하다가 global knowledge의 홈페이지를 모티브로 로고와 디자인을 활용해 적용해보았다. 

- 07-APR : pagination을 처음 구현해보았다. react-js-pagination라이브러리를 이용하려다가 디자인때문에 MUI를 이용해 pagination을 간편하게 구현할 수 있었다. Json server를 heroku로 배포하려다가 계정 오류(결제수단을 등록해야 배포가되는데 카드번호입력이후 주소입력에서 자꾸 오류가 생김)때문에 하지 못했고 내일은 heroku말고 글리치를 찾아볼 생각이다.

- 08-APR : 게시글 추가, 수정부분에서 redux를 사용할까 고민해보다가 이번 프로젝트는 앱의 규모가 크지 않고 상태도 단순하기 때문에 useState나 기본 리액트 훅만을 활용해서 가볍고 간단하게 구현하는것이 낫다고 생각했다. 게시글 순서를 최신순으로 구현하기 위해 여러가지 시도를 해보았다. sort()메서드를 가장 먼저 고려해보았고, 쿼리스트링과 함께 사용해서 확실하게 최신순으로 리스트를 정렬할 수 있었다. 갑자기 useReducer훅에 욕심이 생겨 useState대신 useReducer로 대체해볼까 하는 생각에 시도해보았지만, 최신순 정렬기능의 로직이 복잡하지 않고 다양한 액션을 필요로하지도 않을 것이기 때문에 효율성을 위하여 과감히 코드를 버리고 원래의 코드로 돌아왔다. 
