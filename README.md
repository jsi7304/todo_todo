<img width='100%' src='https://user-images.githubusercontent.com/98303004/194334684-7ee7e923-9abd-4260-b3a6-256ee2c65682.png' alt='img1'/>
<br />

<h1>고등학생들을 위한 투두리스트📑, <img width='150px' src='https://user-images.githubusercontent.com/98303004/194283462-7d70182b-d4d9-4291-b050-5983b0177374.png' alt='logo'/> 를 소개 합니다!! 🏫</h1>
<p>'투두투두'는 자신이 원하는 카테고리를 생성하고 공부해야할 To-do List를 자유롭게 작성하는 서비스입니다!🎒</p>
<p>투두리스트 뿐만 아니라, 자신이 공부한 통계 데이터, 랭킹순위, 소셜 기능 등이 더해진 서비스입니다! 📚</p>
<br />

<h3>📝 서비스 개요 </h3>
<p>'투두투두'는 고등학생들이 스스로 매일 카테고리를 생성하고 이에 따른 투두리스트를 작성할 수 있습니다.</p>
<p>주간/월별 달성률 데이터 및 다양한 차트 :막대_차트: 를 통해 자신의 공부 이력 분석이 가능합니다.</p>
<p>공부 과정/결과나 수험생활에 대한 사진 :플래시가_깜박이는_카메라: 을 업로드하여 공유 가능합니다.</p>
<p>팔로워, 팔로잉, 타인의 투두리스트 보기 등 소셜 기능  :손을_잡은_사람들: 도 제공합니다.</p>
<br />

<h3>🔎 서비스 핵심기능 </h3>
<ol>
<li>이번달 투두 달성률, 현재까지 누적된 총 투두 달성률</li>
<li>주간/월간 랭킹 조회</li>
<li>주간 투두 달성 점수 추이 및 공부 통계데이터 조회</li>
<li>카테고리 생성 및 투두 작성</li>
<li>프로필 사진, 상태메세지, 자랑이미지로 마이페이지 관리</li>
<li>학생들간 팔로잉, 팔로워 기능</li>
</ol>

<h3>트러블 슈팅 </h3>
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
