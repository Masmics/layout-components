import React from 'react';
import logo from '../assets/github-icon.png';

export default function Header() {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    height: '2em'
  };

  return (
    <header style={styles}>
      <img src={logo} style={{ height: '150%' }} />
      <h1 style={{ margin: 0,  }}>My Dogs</h1>
    </header>
  );
}
