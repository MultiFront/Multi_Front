import React from 'react';
import './App.css';
import './reset.css';
import Layout from './components/layout/layout';
import Match_detail_lay from './components/layout/match_detail_lay';
import Lesson_detail_lay from './components/layout/lesson_detail_lay';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/match_detail_lay' element={<Match_detail_lay/>}/>
          <Route path='/lesson_detail_lay' element={<Lesson_detail_lay/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}
export default App;
