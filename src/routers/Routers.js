import { Routes, Route, Navigate } from 'react-router-dom';


import Home from '../pages/Home'
import Matching from '../pages/Matching'
import Facility from '../pages/Facility'
import FacilityDetails from '../pages/FacilityDetails';
import Lesson from '../pages/Lesson'
import LessonDetails from '../pages/LessonDetails';
import MatchingDetails from '../pages/MatchingDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import SignUp from '../pages/Signup'

const Routers = () => {


  return  (
  <Routes>
    <Route path="/" element={<Navigate to="home" />} />
    <Route path='home' element={<Home/>} />
    <Route path='matching' element={<Matching/>} />
    <Route path='matching/:id' element={<MatchingDetails/>} />
    <Route path='facility' element={<Facility/>} />
    <Route path='facility/:id' element={<FacilityDetails/>} />
    <Route path='lesson' element={<Lesson />} />
    <Route path='lesson/:id' element={<LessonDetails />} />    
    <Route path='checkout' element={<Checkout/>} />
    <Route path='login' element={<Login/>} />
    <Route path='signup' element={<SignUp/>} />
  </Routes>
  );

}

export default Routers;