/* eslint-disable */ //lint 끄는 기능
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'Things to do in Barcelona';
  //  post 에 잠깐 보관하는 방식
  // post를 h4에 삽입

   let [a,b] = useState('activities');
   let [logo, setLogo] = useState(['Blog', 'food spot' , 'restaurant']); 
   //변수와 state 차이점?? 일반 변수는 갑자기 변경되면, html에 자동으로 변경안됨
   // state는 갑자기 변경되면 html은 자동 재렌더링됨 변경가능

   let [like, n] = useState(0);
   function 함수() {
    console.log(1);

   }
   // function 긴 자바스크립트를 짧게

   //자료를 보관할때 쓰는 state
   // [a, b] 중 b는 state 변경을 도와주는 함수

  
  //let num = [1,2,3]; //Destructuring 문법
  //let a = num[0];
  //let c = num[1]; // array 로 안에 있는 자료 뽑아씀

  //let [a,c] = [1, 2]; // array있던 자료들을 빼주는 문법
  
  return ( //return 안에는 태그 2개이상 기입금지
    <div className="App">
      <div className="black-nav">
        <h3>{ post }  </h3> 
      </div>
      <div className="list">
      <h4>Food spot <span onClick={function}> Like </span> { like }</h4>
      // state 변경은 등호사용 안됨 html 에서 변경안됨
      <p>20.08.23</p>
      <div className="list">
        <h5> { a[0]}</h5>
        <p>23.08.23</p>
        <div className="list">
          <h6>{ a[1] }</h6>
         

        
        </div>
      </div>
      </div>
      </div>
  );
}

export default App;
// 자주 변경될거같은 html 부분은 state로 만들어놓기
// 24.08 learned
// 1. onClick = {function}
// 2. change state with state change function
