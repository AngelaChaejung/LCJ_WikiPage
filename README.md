# LeeChaeJung_WikiPage


### 안녕하세요! 과제물을 테스트해보기 위해선 
### 먼저, `$ yarn start`명령어를 이용해 리액트를 실행해주시고,
### `$ node server`명령어를 이용해 JSON 서버에 연결해주시면 테스트가 가능합니다.

---
### Design Draft 

https://www.figma.com/file/Vt0Jc4kWNcRDqjj4q15yGf/Untitled?node-id=0-1&t=FR37468Kdpbao6Oe-0


### 💥Trouble Shooting

#### 뒤죽박죽으로 게시글이 올라가는 현상 & 링크 오류
- `원인` : JSON 서버로 id값을 할당하지 않고 POST시에 자동으로 생성되지만 이는 항상 오름차순의 숫자가 아닌 랜덤값이므로,
          현재까지 테스트하여 생성된 DB는 케이스가 크지 않아 오름차순의 숫자형태로 아이디가 생성되었으나 추가적인 테스트 POST시에는 아이디가 랜덤한 문자열 (예: czHlIMy)로 생성되어 
          정렬과 링크를 거는 기능이 정상작동하지 않았음.
- `해결방법` : JSON서버로 새 글을 작성하여 POST 할 때 아이디값을 매번 기존 데이터의 마지막 아이디+1로 생성하여 아이디가 오름차순으로 유지되게 수정. 
            아이디값을 수동으로 할당함으로써 게시글의 정렬과 링크 동작문제점을 모두 해결
            
            const newId = posts.length > 0 ? posts[posts.length - 1].id * 1 + 1 : 1 
            const newPost = { title, content, date, id: newId }


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
- 09-APR : 게시글에 마크다운 적용 (react-markdown라이브러리 이용)✨
- 09-APR : 게시글 내용에 다른 게시글의 제목이 포함되면 자동으로 링크를 생성하는 기능 구현 ✨
- 09-APR : 과제물 최종 제출


---

### 기술 아키텍처 

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white"/> <img src="https://img.shields.io/badge/eslint-4B32C3?style=flat&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/prettier-F7B93E?style=flat&logo=prettier&logoColor=white"/>

<img width="600" alt="architecture" src="https://user-images.githubusercontent.com/120077192/230770374-f9ad16be-0692-48a8-af48-8c27dce9b01a.jpg">


### 기술적 의사결정

1. **redux를 이용하지 않은 추가, 수정기능**
  : redux의 이용을 고려하였으나, 프로젝트 규모가 크지 않고 상태 변경 로직이 복잡하지 않아 useState를 주로 이용해 기능을 간단하게 구현하였습니다. 
  
2. **useState를 이용한 최신순 정렬기능**
  : useReducer로 먼저 기능을 완성했으나, useReducer의 특성상 코드가 길고 가독성이 떨어져 최적화된 코드를 위해 useState로 변경하였습니다. 



### 프로젝트 회고
- 06-APR : 프로젝트를 혼자서 시작하려니 조금 막막해 draft부터 그리고 파일구조를 정리했다. 디자이너님과 작업할 때 배웠던 Figma기능들을 이용해 편하게 draft를 그릴 수 있었고 아이콘을 export해서 사용할 수 있었다. 디자인을 어떻게 그릴지 고민하다가 global knowledge의 홈페이지를 모티브로 로고와 디자인을 활용해 적용해보았다. 

- 07-APR : pagination을 처음 구현해보았다. react-js-pagination라이브러리를 이용하려다가 디자인때문에 MUI를 이용해 pagination을 간편하게 구현할 수 있었다. Json server를 heroku로 배포하려다가 계정 오류(결제수단을 등록해야 배포가되는데 카드번호입력이후 주소입력에서 자꾸 오류가 생김)때문에 하지 못했고 내일은 heroku말고 글리치를 찾아볼 생각이다.

- 08-APR : 게시글 추가, 수정부분에서 redux를 사용할까 고민해보다가 이번 프로젝트는 앱의 규모가 크지 않고 상태도 단순하기 때문에 useState나 기본 리액트 훅만을 활용해서 가볍고 간단하게 구현하는것이 낫다고 생각했다. 게시글 순서를 최신순으로 구현하기 위해 여러가지 시도를 해보았다. sort()메서드를 가장 먼저 고려해보았고, 쿼리스트링과 함께 사용해서 확실하게 최신순으로 리스트를 정렬할 수 있었다. 갑자기 useReducer훅에 욕심이 생겨 useState대신 useReducer로 대체해볼까 하는 생각에 시도해보았지만, 최신순 정렬기능의 로직이 복잡하지 않고 다양한 액션을 필요로하지도 않을 것이기 때문에 효율성을 위하여 과감히 코드를 버리고 원래의 코드로 돌아왔다. 

- 09-APR : 글리치 또한 배포가 어려웠다. 서버를 배포하지 못한 점에서 많이 아쉬워 평소에 많은 조언을 받고있는 전 직장 상사분께 여쭤보았는데, 기업에서 요구하는 것이 서버 배포까진 아닐 것이라 해주셔서readme에 JSON 서버 연동에 대해 안내를 드리는 방법으로 제출하기로 했다. 가장 어려웠던 기능을 오늘 구현했다. 현 게시글의 내용에 다른 게시글의 제목이 포함되어있으면 자동으로 링크가 걸리게 하기 위해서 react-markdown라이브러리를 이용해 게시글을 마크다운형식으로 보여지게 하였고, DetailComponent에서 다른 게시글의 제목이 내용에 포함되어있다면 [링크] + (/주소) 의 구조로 변환시키게하는 함수를 만들어 마크다운으로인해 링크가 생성되게 했다. 거의 하드코딩을 한거라, 다른 분들은 이 기능을 어떻게 구현하는지 궁금했다. 

- **최종 회고** : 혼자 처음부터 끝까지 진행하는 프로젝트는 처음이라 의미가 컸던 것 같다. 서버 없이 작업을 하려니 많이 답답한 점이 많아 이번 과제가 끝나면 node.js를 공부해 서버를 배포해봐야겠다는 생각을 했다. Pagination과 Markdown을 적용시키는 기능은 처음해보는거라 시간을 많이 들였다. 더 고민을 해보았으면 더욱 간결하고 효율적인 방법이 있었을 것 같은데, 무작정 branch를 새로 파서 코드를 마음대로 짜보고 버리고를 반복해서 시간을 낭비한 것 같기도 하다. 특별히 어려운 기술이 들어가진 않았지만, 여러모로 의미가 컸던 프로젝트였다. 
