import './footer.css'
import './common.css'

const Footer = () => {

    return(
      <footer className='footer'>
        <div className='footer-bottom inner'>
          <div className='footer-logo'>
            2022 LET'SPLAY.
          </div>
          <div className='footer-service'>
            <ul>
                <li>고객센터</li>
                <li>공지사항</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>위치기반서비스 이용약관</li>
            </ul>
          </div>
          </div>
          <div className='footer-info'>
            <div class='inner'>
            <h2 className='letpl'>랫플</h2>
            <div className='footer-last'>
                <ul>
                    <li>주소: 서울특별시 대치동 선릉역 2호선</li>
                    <li>이메일: qwerss7@gmail.com</li>
                    <li>사업자정보 : 00101101-10101000-11101</li>
                </ul>
            </div>
            </div>
          </div>
      </footer>
    )
}


export default Footer