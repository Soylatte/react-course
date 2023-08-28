import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props){
  console.log('props', props.title);
  return <header>
  <h1><a href="/" onClick={function(event){
    event.preventDefault();
    props.onChangeMode();
    // function 호출

  }}>{props.title}</a></h1> 
</header>
}
function Nav(props){
  const lis = [
    <li><a href="/read/1">HTML</a></li>,
    <li><a href="/read/2">CSS</a></li>,
    <li><a href="/read/3">js</a></li>
  ]
  for(let i=0; i<props.topics.length;i++){
    //topics.length 만큼 반복
    let t = props.topics.[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
        // event를 유발시킨 tag 호출
        // 내부 function 호출
      })}>{t.title}</a></li>)
      // parameter 가 한개인 경우 괄호 생략가능
    // link 생성

  }

  
  return <nav>
  <ol>
    {lis}
   
  </ol>
</nav>

}

function Article(props){
  return <article>
    <h2>{props.title}</h2>
  </article>
 
}

function App() {
  //const mode = useState('WELCOME');
  // useState로 상태를 만듬
  // useState는 상태의 값을 읽을때
  //const mode = _mode[0];
  // [0] 번쨰 값으로 읽음
  //const setMode = _mode[1];
  // [1]번째 값으로 변경
  const [mode,setMode] = useState('WELCOME');
  // setMode로 mode의값을 바꿀수있다
  console.log('_mode',_mode);

  const topics = [
    {id:1, title: 'html', body:'html is...'},
    {id:2, title: 'css', body:'css is...'},
    {id:3, title: 'javascript', body:'javascript is...'}



  ]  
  let content = null;
  if(mode==='WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>

  } else if(mode === 'READ'){
    content = <Article title="Read" body="Hello, WEB"></Article>

  }
  return (
    <div>
      <Header title="WEB" onChangeMode={function(){
      setModemode = 'WELCOME';
    }}></Header>
    <Nav topics={topics} onChangeMode={(id)=>{
       setModeode = 'READ';
       // mode 의 값을 바꿔도 변하지 않음 
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );


    

}

export default App;

