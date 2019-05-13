import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render (
  <App />,
  
  document.getElementById('root')
);

// const styles = '../src/index.css';

// const root = document.getElementById('root');
// const ul = document.createElement('ul');
// ul.className = styles.dogs;
// root.appendChild(ul);

// ['spot', 'rover', 'bingo', 'joe']
//   .forEach(name => {
//     const li = document.createElement('li');
//     li.textContent = name;
//     ul.appendChild(li);
//   });
