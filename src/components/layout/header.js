import './header.css'
import './common.css'
import {Link} from 'react-router-dom';
const Header = () => {

  return(
      <header className='header'>
        <div className='inner'>
          <div className='nav-top'>
            <ul>
              <Link to={'/'}><li>공지사항</li></Link>
              <Link to={'/'}><li>고객센터</li></Link>
              <Link to={'/'}><li>로그인</li></Link>
              <Link to={'/'}><li>회원가입</li></Link>
            </ul>
          
          </div>
          <div className='nav-main'>
            <h1>로고</h1>
          
            <ul className='nav-main-list-left'>
              <li><a href='/'>홈</a></li>
              <li><a>매칭하기</a></li>
              <li><a href='/'>시설예약</a></li>
              <li><a href='/'>레슨예약</a></li>
            </ul>

            <ul className='nav-main-list-right'>
              <Link to={'/match_detail_lay'}><li><p>매칭만들기</p></li></Link>
              <li><p><a href='/'><span class="material-symbols-outlined">notifications</span></a></p><span className='count-num'>0</span></li>
            </ul>

          </div>
        </div>
      </header>
  )

}

export default Header