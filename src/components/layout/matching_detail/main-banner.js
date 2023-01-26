import React from 'react'

function Main_banner(props) {
  return (
    <div>
        <div className="check-display">{props.checked}</div>
        <h3 style={{marginBottom: '10px'}}>{props.facilName}</h3>
        <div style={{marginBottom: '3px'}}>{props.facilAddr}</div>
        <div style={{marginBottom: '15px'}}><a href="#">길찾기 &gt;</a></div>
        <div style={{fontSize: 'small'}}>날짜</div>
        <h3 style={{marginBottom: '15px'}}>{props.date}</h3>
        <div style={{fontSize: 'small', marginBottom: '7px'}}>시간</div>
        <input type='button' value={props.time} style={{borderRadius: '10%', borderStyle:'none', backgroundColor: 'gold', marginBottom: '17px'}}/>
        <div><button className="join-btn">참여하기</button></div>
    </div>
  )
}

export default Main_banner
