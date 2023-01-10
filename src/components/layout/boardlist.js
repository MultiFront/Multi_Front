import React from 'react'
import Search from './board_list/search'
import Sports from './board_list/sports'
import Matching from './board_list/matching'
import Facility from './board_list/facility'
import Lesson from './board_list/lesson'

import './css/boardlist.css'
import "./css/common.css"

const BoardList = () => {
  return (
    <div className="mt150 inner">
     <Sports />
     <Search />
       <div className='div-flex'>
        <Matching />
        <Matching />
        <Matching />
        <Matching />
        <Matching />
        <Matching />
        <Matching />
        <Matching />
        {/* <Facility />
        <Facility />
        <Facility />
        <Facility />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson /> */}
      </div>
    </div>
  )
}

export default  BoardList;