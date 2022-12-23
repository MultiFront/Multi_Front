import React from 'react';
import Footer from './footer';
import Header from './header';
import "./layout.css"

const Layout = () => {

  return (
    <div className='layout'>
        <Header />
        <main className='main'>
          <h1>레이아웃이다.</h1>
        </main>
        <Footer />
    </div>
  )

}

export default Layout;