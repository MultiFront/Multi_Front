import "../layout.css"

const Facility = () => {

  return (
    <div className="facility">
      <p className="img"><span className="fac-review">4.5/5</span></p>
      <div>
        <p className="fac-title">시설 이름을 두줄 까지 나타내는 걸로 구현하고 싶습니다.</p>
        <p className="review-count">이용자 리뷰 10개</p>
        <p><span className="match-location">지역시</span></p> 
        <p className="favorite">
          <span class="material-symbols-outlined">favorite</span>
        </p>
      </div>
    </div>
  )
}

export default Facility