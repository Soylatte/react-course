import logo from './logo.svg';
import './App.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// passing a variable to render ()
const myList = (
  <ul>
    <ii></ii>
    <li></li>
    <li></li>
  </ul>
);
root.render(myList);    
mport React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>{2 + 3}</h1>);
// {2 +3} = > 5 출력
const math = <h1>2 + 3 = 2 + 3</h1>
root.render(math);



export default App;

