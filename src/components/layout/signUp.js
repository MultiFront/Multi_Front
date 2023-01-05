import React from 'react'
import './common.css'
import './signUp.css'
import '..\\src\\reset.css'

import InputForm from './signForm/inputForm'
import PwForm from './signForm/pwForm'
import EmailForm from './signForm/emailForm'


function SignUp() {
  return (
    <div className='SigningMain inner'>
    <div className='Signing'>
        <div><h1>회원가입</h1></div>
        <span>*필수입력사항</span>
        <hr/>
        <div className='formBoxTop'>
        <div className='formBox'>
        <InputForm title='아이디*' place='아이디를 입력해주세요'/>
        <PwForm title='비밀번호*' place='영문,숫자,특수문자포함 8자 이상 15자 이하'/>
        <PwForm title='비밀번호확인*' place='비밀번호를 한번 더 입력해주세요'/>
        <InputForm title='이름*' place='이름을 입력해주세요'/>
        <InputForm title='닉네임*' place='닉네임을 입력해주세요'/>
        <EmailForm title='이메일*' place='ex) multi_7@campus.com'/>
        <InputForm title='휴대폰*' place='숫자만 입력해주세요'/>
        </div>
        <div className='formBtn'>
          <button>남자</button>
        <button>여자</button>
        </div>
        <div className='formDate'>
          <span>생년월일</span>
        <input type={'date'}></input>
        </div>
        <hr/>
        <div>
          <span>이용약관동의*</span>
          <input type={'checkbox'}></input>
        </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp
