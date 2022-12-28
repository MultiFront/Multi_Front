import React from 'react'
import Footer from './footer'
import Header from './header'
import Comment from './matching_detail/comment'
import Main_banner from './matching_detail/main-banner'
import Sport_type from './matching_detail/sport-type'
import Hr from './matching_detail/hr'
import Match_category from './matching_detail/match_category'
import Info from './matching_detail/info'

import './common.css'
import '../layout/match_detail_lay.css'



const Match_detail_lay = () => {
  return (
    <div className='match_detail_lay'>

    <Header/>

    <main className="main">

        <Hr/>

        <Sport_type/>
        <h3 style="margin-bottom: 5px;">제목이 나오는 영역</h3>
        <h5 style="margin-bottom: 30px;">작성자(닉네임)</h5>

        <Match_category/>

        <h4 style="margin-bottom: 7px;">시설예약 비용</h4>
        <div style="font-size: x-large; color:rgb(232, 13, 13);">30,000 &#9원/시간</div>
        
        <Hr/>

        <Info/>

        <Hr/>

        <Info/>

        <Hr/>

        <h4 style="margin: 40px auto;">댓글(20)</h4>

        <div className="comment">
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>

    <div className="main-banner">
        <span className="material-symbols-outlined">
            favorite
         </span>
        
        <Main_banner/>

        <Main_banner/>

    </div>

    </main>

    <Footer/>

    </div>

  );
}

export default Match_detail_lay;
