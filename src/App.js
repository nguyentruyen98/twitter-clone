import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Feed from './component/Feed';
import Widgets from './component/Widgets';

function App() {
  return (
    <div className='app'>
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Widgets></Widgets>
    </div>
  );
}

export default App;
