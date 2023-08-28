import logo from './logo.svg';
import './App.css';
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
  const mode = 'WELCOME';
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
      mode = 'WELCOME';
    }}></Header>
    <Nav topics={topics} onChangeMode={(id)=>{
       mode = 'READ';
       // mode 의 값을 바꿔도 변하지 않음 
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );


    

}

export default App;

