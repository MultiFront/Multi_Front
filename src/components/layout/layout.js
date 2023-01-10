import React from 'react';
import Footer from './footer';
import Header from './header';
import Matching from './board_list/matching';
import Facility from './board_list/facility';
import Category from './board_list/category';
import Lesson from './board_list/lesson';
import Match from './board_list/listmatch';

import "./css/layout.css"
import './css/common.css'



const Layout = () => {

  return (
    <div className='layout'>
        <main className='main'>
          <div className='inner'>
              {/* 메인카루셀 영역 */}
              <div className='main-visual'>
                메인 카루셀 영역
              </div>

              {/* 메인버튼 영역 */}
              <ul className='main-btn'>
                <li>매칭하기</li>
                <li>시설예약</li>
                <li>레슨예약</li>
              </ul>
          </div>

          {/* 메인 매칭 리스트 영역 */}
          <div className='matching'>
            <p className='match-b-title'>랫플 매칭이 총 000건 성사 되었습니다!</p>
              <Category />
              <div className='match-list-div'>
                <Matching />
                <Matching />
                <Matching />
                <Matching />
                <Matching />
                <Matching />
                <Matching />
              </div>
            
            <p className='match-btn'>매칭하러가기 +</p>
          </div>
         
          {/* 메인 시설 리스트 영역 */}
          <div className='bg'>
            <div className='inner'>
              <h3>평점 좋은 시설</h3>
                <Category />
                <div className='match-list-div'>
                  <Facility />
                  <Facility />
                  <Facility />
                  <Facility />
                  <Facility />
                  <Facility />
                </div>
            </div>
          </div>
          {/* 메인 레슨 리스트 영역 */}
          <div className='inner'>
            <h3>마감 직전 레슨</h3>
              <Category />
              <div className='match-list-div'>
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
              </div>
          </div>


           {/* 메인 신규매칭 리스트 영역 */}
           <div className='bg'>
            <div className='inner'>
              <h3>신규 매칭</h3>
              <ul className="listmatch">
                <Match />
                <Match />
                <Match />
                <Match />
                <Match />
                <Match />
                <Match />
              </ul>
            </div>
          </div>
        </main>
    </div>
  )

}

export default Layout;