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
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
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
      <Header title="WEB" onChangeMode={function()
      alert('Header')}></Header>
      <Nav topics={topics}></Nav>
      {content}
    </div>
  );


    

}

export default App;

