import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//  when i have to use State?
// 변수는 갑자기 변경되면 HTML 도 변경해야함 자동으로 반영이 안됨
// state는 갑자기 변경되면 state쓰던 HTML 은 자동 재렌더링됨

function App() {
  let post ='강남 우동 맛집';
  // '' 안에 있는 걸 post 안에 잠깐 맡겨두는 것
  let[글제목,b] = useState('남자 코트 추천');

  // let num=[1,2,3]; array에 저장 [] 안에있던 걸 변수로 빼고싶을때 destructuring 문법
  // let a = num[0] 그럼 a 는 1
  // let c= num[2] c 는 3
  // let [a,c] = [1,2]; 오른쪽 왼쪽 형태를 맞추게 해 a에는 1 c에는 2가 들어가게됨



  return ( // 하나의 태그로 시작해서 끝나야됨
    <div className="App">
      <div className="black-nav">
        <h4 style={ { color: 'red' , fontSize: '16px'} }>블로그임</h4>
        <div className="list">
          <h5>글제목</h5>
          <p>9월8일 발행</p>
          </div>
      </div>
      <h6 id={ post }></h6>
    </div> 
  )
  // HTML 이 아닌 JSX .js 파일에서 쓰는 html 대용품
}

    



export default App;

