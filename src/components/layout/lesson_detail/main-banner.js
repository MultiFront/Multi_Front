import React from 'react'
import TimeType from './timeType'
import '../css/lesson_detail_lay.css'

function Main_banner(props) {
  return (
    <div>
        <div style={{margin: '10px 0 3px 0'}}>{props.addr}</div>
        <div style={{marginBottom: '15px'}}><a href="#">길찾기 &gt;</a></div>
        <div style={{fontSize: 'small'}}>날짜</div>
        <h3 style={{marginBottom: '15px'}}>{props.date}</h3>
        <div style={{fontSize: 'small', marginBottom: '7px'}}>시간</div>
        <TimeType time='09:00' color='gold'/>
        <TimeType time='10:00' color='aquamarine'/>
        <TimeType time='11:00' color='grey'/>
        <br/>
        <TimeType time='12:00' color='grey'/>
        <TimeType time='13:00' color='grey'/>
        <div><input className="join-btn" value='예약하기'/></div>
    </div>
  )
}

export default Main_banner
