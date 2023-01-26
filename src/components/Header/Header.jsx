import React,{ useRef, useEffect } from 'react'

import { NavLink, Link } from 'react-router-dom';
import './header.css'


import { Container, Row } from "reactstrap"
import { motion } from 'framer-motion'

const nav__links = [
  {
    path:'home',
    display:'홈'
  },
  {
    path:'matching',
    display:'매칭하기'
  },
  {
    path:'facility',
    display:'시설예약'
  },
  {
    path:'lesson',
    display:'레슨예약'
  },
]


const Header = () => {


  const headerRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", ()=> {
      if(
        document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }


  useEffect(()=>{
      stickyHeaderFunc();
      return () => window.removeEventListener('scroll', stickyHeaderFunc);
  });


  return (<header className='header' ref={headerRef}>

      <Container>    
          <Row>
              <div className='nav__wrapper'>

                <div className="logo">
                    <div>
                      <h1>Let's Play</h1>
                    </div>
                </div>

                <div className="navigation">
                  <ul className="menu">
                    {
                    nav__links.map((item, index)=>(
                      <li className="nav__item" key={index}>
                        <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'nav__active' : ''}>
                          {item.display}
                        </NavLink>
                      </li>
                    ))
                    }
                  </ul>
                </div>

                <div className="nav__icons">
                  
                  <span>
                    <Link to=''>매칭만들기</Link>
                  </span>
                  <span className="fav__icon">
                    <i className='ri-notification-line'></i>
                    <span className="badge">1</span>
                  </span>
                  <Link to={'/login'}>
                    <motion.span whileTap= {{ scale: 1.2 }}>
                    <i className='ri-login-box-line'></i> Sign up
                  </motion.span>
                  </Link>
                </div>

              </div>
          </Row>
      </Container>
  </header>
    
  
)
}

export default Header
