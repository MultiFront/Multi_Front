import React from 'react';
import './css/common.css';
import '..\\src\\reset.css';
import './css/login.css';
import InputBox from './loginForm/InputBox';
import LoginBtn from './loginForm/loginBtn';
import NaverLogin from './loginForm/NaverLogin';
import KakaoLogin from './loginForm/KakaoLogin';
import Googlebutton from './loginForm/Googlebutton';

function Login() {
  return (
    <div className='mainContent inner'>
      <div style={{fontSize:'xx-large', marginBottom:'10px'}}>로그인</div>
        <InputBox content='아이디를 입력해주세요' />
        <InputBox content='비밀번호를 입력해주세요' />
      <div className='mainBtn'>
        {/* <LoginBtn content='로그인' /> */}
        <button className='loginBtn' type='submit'>로그인</button>
        <LoginBtn content='회원가입' />
      </div>
      <div className='findAccount'>
      <ul>
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
      </ul>
      </div>
      <hr style={{width:'400px', height:'0.5px', color:'grey'}}/>
      <NaverLogin/>
      {/* <KakaoLogin/> */}
      <Googlebutton/>
    </div>
  );
}

export default Login;