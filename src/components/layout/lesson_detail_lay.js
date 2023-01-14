import React from 'react'
import Comment from './matching_detail/comment'
import Main_banner from './lesson_detail/main-banner'
import Sport_type from './matching_detail/sport-type'
import Match_category from './matching_detail/match_category'
import Info from './matching_detail/info'
import Cost from './matching_detail/cost'
import Favourite from './matching_detail/favourite'

import './css/common.css'
import './css/lesson_detail_lay.css'



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

    <Match_category category='참가비'/>
    <Match_category category='상세정보'/>
    <Match_category category='주의사항'/>
    <Match_category category='추천시설'/>

    <h4 style={{marginBottom: '7px', fontWeight: 'bold'}}>레슨비/시설비</h4>
    <Cost/>
    <hr/>
    <Info title='상세정보'/>
    <hr/>
    <Info title='주의사항'/>
    <hr/>

    <h4 style={{margin: '40px auto'}}>후기(20)</h4>

        <div className="comment">
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
</div>

<div className="main-banner">
<Favourite/>
<Main_banner addr='경기도 부천시 어쩌구' date='2022.12.30(수)'/>
</div>

</main>

</div>
    </div>
  )
}

export default Lesson_detail_lay
