import React from 'react'
import Comment from './matching_detail/comment'
import Main_banner from './matching_detail/main-banner'
import Sport_type from './matching_detail/sport-type'
import Hr from './matching_detail/hr'
import Match_category from './matching_detail/match_category'
import Info from './matching_detail/info'
import Cost from './matching_detail/cost'
import Favourite from './matching_detail/favourite'

import './common.css'
import '../layout/lesson_detail_lay.css'

function Lesson_detail_lay() {
  return (
    <div>
      <div className='match_detail_lay'>

<main className="main inner">
    <div className='main-content'>

    <Sport_type/>

    <h2>제목이 나오는 영역</h2>
    <h5 style={{marginBottom: '30px'}}>작성자(닉네임)</h5>

    <div className='carouselLesson'>
      Carousel
    </div>

    <Match_category/>

    <h4 style={{marginBottom: '7px'}}>시설예약 비용</h4>
    <Cost/>
    <Hr/>
    <Info/>
    <Hr/>
    <Info/>
    <Hr/>

    <h4 style={{margin: '40px auto'}}>댓글(20)</h4>

        <div className="comment">
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
</div>

<div className="main-banner">
<Favourite/>
<Main_banner/>
<Main_banner/>
</div>

</main>

</div>
    </div>
  )
}

export default Lesson_detail_lay
