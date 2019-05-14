import React from 'react';

export default function Header() {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    height: '8em'
  };

  return (
    <header style={styles}>
      <img src="https://i.chzbgr.com/full/9085354496/h178D0F76/" style={{ height: '100%' }}></img>
      <h1 style={{ margin: 0 }}>My Dogs</h1>
    </header>
  );
}
