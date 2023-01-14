import React from 'react'
import SportType from './MatchingDetail/SportType'
import Comment from './MatchingDetail/comment'
import MainBanner from './MatchingDetail/MainBanner'
import MatchCategory from './MatchingDetail/MatchCategory'
import Info from './MatchingDetail/info'
import Cost from './MatchingDetail/cost'
import Favourite from './MatchingDetail/favourite'


const MatchingDetails = () => {
  return (
    <div className='match_detail_lay'>

    <main className="main inner">
        <div className='main-content'>

        <SportType/>
        <SportType/>

        <h2>제목이 나오는 영역</h2>
        <h5 style={{marginBottom: '30px'}}>작성자(닉네임)</h5>

        <MatchCategory category='참가비'/>
        <MatchCategory category='상세정보'/>
        <MatchCategory category='주의사항'/>
        <MatchCategory category='추천시설'/>

        <h4 style={{marginBottom: '7px'}}>시설예약 비용</h4>
        <Cost/>
        <hr/>
        <Info/>
        <hr/>
        <Info/>
        <hr/>

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
    <MainBanner/>
    <MainBanner/>
    </div>

    </main>

    </div>
  );
}

export default MatchingDetails
