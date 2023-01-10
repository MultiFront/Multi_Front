import './css/header.css'
import './css/common.css'
import {Link} from 'react-router-dom';
const Header = () => {

  return(
      <header className='header'>
        <div className='inner'>
          <div className='nav-top'>
            <ul>
              <Link to={'/'}><li>공지사항</li></Link>
              <Link to={'/'}><li>고객센터</li></Link>
              <Link to={'/login'}><li>로그인</li></Link>
              <Link to={'/signUp'}><li>회원가입</li></Link>
            </ul>
          
          </div>
          <div className='nav-main'>
            <h1>로고</h1>
          
            <ul className='nav-main-list-left'>
              <Link to={'/'}><li>홈</li></Link>
              <Link to={'/boardlist'}><li>매칭하기</li></Link>
              <Link to={'/'}><li>시설예약</li></Link>
              <Link to={'/lesson_detail_lay'}><li>레슨예약</li></Link>
            </ul>

            <ul className='nav-main-list-right'>
              <Link to={'/match_detail_lay'}><li><p>매칭만들기</p></li></Link>
              <li><p className='bell'><a href='/'><span className="material-symbols-outlined">notifications</span></a></p><span className='count-num'>10</span></li>
            </ul>

          </div>
        </div>
      </header>
  )

}

export default Header