import React from 'react'

function Main_banner() {
  return (
    <div className="facil-confirm">
        <button className="check-ed">시설확정</button>
        <h3 style="margin-bottom: 10px;">시설명 영역</h3>
        <div style="margin-bottom: 3px;">경기도 부천시 어쩌구 주소</div>
        <div style="margin-bottom: 30px;"><a href="#">길찾기 &gt;</a></div>
        <div style="font-size: small; margin-bottom: 7px;">날짜</div>
        <h3 style="margin-bottom: 30px;">2022.12.30(수)</h3>
        <div style="font-size: small; margin-bottom: 7px;">시간</div>
        <button style="border-radius: 10%; border-style:none; background-color: gold; margin-bottom: 30px;">11:30</button>
        <div><button className="join-btn">참여하기</button></div>
    </div>
  )
}

export default Main_banner
