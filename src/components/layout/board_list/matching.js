import "../layout.css"

const Matching = () => {

  return(
    
      <div className="match-list">
        <p>
          <span className="deadline">마감 10일 전</span>
          <span className="sports-category">테니스</span>
          <span className="num-people">4명</span>
        </p>
          <p className="match-title">매칭 타이틀영역이 노출되는 구간입니다.</p>
          <p className="match-location">장소가 나오는 구간</p>
          <div className="match-date">
            <span className="date">날짜</span>
            <span className="time">시간</span>
          </div>
          <p className="favorite">
            <span className="material-symbols-outlined">favorite</span>
            <span className="material-symbols-outlined fill">favorite</span>
          </p>
          <div className="favorite">
            <span class="material-symbols-outlined">favorite</span>
          </div>
      </div>
  )

}

export default Matching