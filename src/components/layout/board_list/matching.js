import "../layout.css"

const Matching = () => {

  return(
    
      <div>
        <p>
          <span className="deadline">마감일</span>
          <span className="sports-category">종목</span>
          <span className="num-people">인원수</span>
        </p>
          <p className="match-title">매칭 타이틀영역이 노출되는 구간입니다.</p>
          <p className="match-location">장소가 나오는 구간</p>
          <p>
            <span className="date">날짜</span>
            <span className="time">시간</span>
          </p>
          <p className="favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span class="material-symbols-outlined fill">favorite</span>
          </p>
      </div>
  )

}

export default Matching