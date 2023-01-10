import React from 'react';
import './App.css';
import './reset.css';
import Layout from './components/layout/layout';
import Match_detail_lay from './components/layout/match_detail_lay';
import Lesson_detail_lay from './components/layout/lesson_detail_lay';
import SignUp from './components/layout/signUp';
import BoardList from './components/layout/boardlist';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Login from './components/layout/login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/match_detail_lay' element={<Match_detail_lay/>}/>
          <Route path='/lesson_detail_lay' element={<Lesson_detail_lay/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/logIn' element={<Login/>}/>
          <Route path='/boardlist' element={<BoardList/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}
export default App;
