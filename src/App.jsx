import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Service } from './pages/Service';
import { About } from './pages/About';

function App() {
  return( 
        <div className='wrapper'>
          <header className='header'>
            <h1>Main heading</h1>
          </header>
          <article className='main'>
            <p>Google's mission has always been to organize the world's information and make it universally accessible and  that</p>
          </article>

          <aside className="aside aside1">
            <h1>Aside 1</h1>
          </aside>
          <aside className="aside aside2">
            <h1>Aside 2</h1>
          </aside>

          <footer className="footer">
            <h1>hey i am footer</h1>
          </footer>


        </div>
    
  )
}

export default App

