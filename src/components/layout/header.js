import './header.css'
import './common.css'

const Header = () => {

  return(
      <header className='header'>
        <div>
          <div className='nav-top'>
            <ul>
              <li><a href='/'>공지사항</a></li>
              <li><a href='/'>고객센터</a></li>
              <li><a href='/'>로그인</a></li>
              <li><a href='/'>회원가입</a></li>
            </ul>
          </div>
          <div className='nav-main'>
            <h1>로고</h1>

            <ul className='nav-main-list-right'>
              <li><a href='/'>홈</a></li>
              <li><a href='/'>매칭하기</a></li>
              <li><a href='/'>시설예약</a></li>
              <li><a href='/'>레슨예약</a></li>
            </ul>

            <ul className='nav-main-list-left'>
              <li><p><a href='/'>매칭만들기</a></p></li>
              <li><p><a href='/'><span class="material-symbols-outlined">notifications</span></a></p></li>
              <li><p><span>0</span></p></li>
            </ul>

          </div>
        </div>
      </header>
  )

}

export default Header