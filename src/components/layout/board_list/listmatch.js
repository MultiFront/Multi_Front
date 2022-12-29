import "../layout.css"

const Match = () => {
  return(
    <ul>
      <li>
        <span className="sports-category">종목</span> 타이틀이 나오는 부분으로 글자는 어디까지 나오게 할 것 인가 ... 
        <span className="">지역시</span>        
        <span className="match-location">장소명</span>
        <span className="deadline">마감일</span>
        <span className="num-people">인원수</span>
        <p className="favorite">
            <span className="material-symbols-outlined fill">favorite</span>
          </p>
      </li>
    </ul>
  )
}

export default Match
