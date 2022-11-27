<h1>고등학생들을 위한 Todo-List, <img width='150px' src='https://user-images.githubusercontent.com/98303004/194283462-7d70182b-d4d9-4291-b050-5983b0177374.png' alt='logo'/> 를 소개합니다!</h1>
<br />

<img width='100%' src='https://user-images.githubusercontent.com/98303004/194334684-7ee7e923-9abd-4260-b3a6-256ee2c65682.png' alt='img1'/>
<br />

<p>
<img width='240px' src='https://user-images.githubusercontent.com/98323052/204008773-fcd9d116-d106-462d-b92f-aa22d4a59232.png' alt='1'/>
<img width='240px' src='https://user-images.githubusercontent.com/98323052/204008783-602cb24b-f463-4b7f-b034-0f9766e1ffda.png' alt='2'/>
<!-- <img width='235px' src='https://user-images.githubusercontent.com/98323052/204134082-2934405d-ca93-485c-bd50-99c17a8bf0d9.png' alt='3'/> -->
<img width='240px' src='https://user-images.githubusercontent.com/98323052/204008780-079c4fa7-e66d-4703-83fe-707d3338bc09.png' alt='4'/>
<img width='240px' src='https://user-images.githubusercontent.com/98323052/204008778-fe71684f-2d6c-4205-9831-f1d2edeb8587.png' alt='5'/>
</p>
<br/>

## 1. 프로젝트 소개
### [Todo-Todo](https://www.todo2do.com/)
<p>투두투두는 학생들의 계획 수립,이행에 도움을 주기 위해 만들어진 서비스입니다.</p>
<p>1. 주간/월별 달성률에 관한 데이터 및 다양한 차트를 통해 자신의 공부 이력 분석이 가능합니다.</p>
<p>2. 공부 과정/결과나 수험생활에 대한 사진을 업로드하여 타인에게 자랑할 수 있습니다.</p>
<p>3. 팔로워, 팔로잉, 타인의 투두리스트 보기 등 소셜 기능을 통해 계획을 세울 때 참고할 수 있습니다.</p>
<p>4. 랭킹 시스템을 통한 타인과의 경쟁을 통해 계획을 이행하는 것을 고취시킵니다. </p>
<br />

## 2. Team Members

**`Back-end (Spring)`**

- 사공재준, 김태훈, 두성한

**`Front-end (React)`**

- 오영일, 정성일, 추현욱

**`Design`**

- 남현지

<br />

## 3. 서비스 핵심기능 </h3>
<ol>
<li>이번달 투두 달성률, 현재까지 누적된 총 투두 달성률</li>
<li>주간/월간 랭킹 조회</li>
<li>주간 투두 달성 점수 추이 및 공부 통계데이터 조회</li>
<li>카테고리 생성 및 투두 작성</li>
<li>프로필 사진, 상태메세지, 자랑이미지로 마이페이지 관리</li>
<li>학생들간 팔로잉, 팔로워 기능</li>
</ol>
<br/>

## 4. 기술 스택
- React
  - Styled-component
  - redux
  - redux-toolkit
  - react-router-dom
  - browser-image-compression
- axios
- workbox modules
<br/>

## 5. 트러블 슈팅 
<ol>
  <h4><p><li>이미지 업로드시,용량 문제</li></p></h4>
  <p><h5>개요</h5>- 고용량, 고화질 이미지 업로드시, 속도가 저하되는 문제가 발생</p>
  <p><h5>해결과정</h5>- 이미지 용량이 일정값 초과시, 업로드 차단 로직과 이미지 파일 압축 라이브러리 사용을 고민</p>
  <p><h5>해결</h5>-browser-image-compression 라이브러리를 사용하여 최대용량 설정 및 이미지 압축,전송</p>
  
  <h4><p><li>useEffect 렌더링 오류에 관한 문제</li></p></h4>
  <p><h5>개요</h5>- 팔로우 기능을 구현하는 중에 useEffect가 무한루프되는 문제가 발생</p>
  <p><h5>해결과정</h5>- useEffect 함수 내에 setState가 원인인 것을 확인</p>
  <p>1. useEffect로 인해 setState가 실행되어 그것이 다시 useEffect를 작동시킴</p>
  <p>2. 의존성배열이 빈배열일때는 어떤 state든 변경되기만 하면 useEffect가 실행됨</p>
  <p><h5>해결</h5>-이벤트 발생시에만 useEffect가 실행되므로, setState를 useEffect 내부에 넣지 않고, 이벤트 함수에 넣어 해결함</p>
</ol>
