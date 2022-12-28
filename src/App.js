import React from 'react';
import './App.css';
import './reset.css';
import Layout from './components/layout/layout';
import Match_detail_lay from './components/layout/match_detail_lay';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/match_detail_lay' element={<Match_detail_lay/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
