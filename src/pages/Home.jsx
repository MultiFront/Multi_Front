import React, { useState, useEffect }from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css"
import '../styles/layout.css'

import { Container, Row, Col } from "reactstrap"

import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import SportsData from '../assets/data/SportsData'


import Services from "../services/Services";



import MatchingList from "../components/UI/MatchingList";
import LessonList from "../components/UI/LessonList";
import FacilityList from "../components/UI/FacilityList";
import ListMatchList from "../components/UI/ListMatchList";


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  // const [bestSalesProducts, setBestSalesProducts] = useState([]);
  // const [mobileProducts, setMobileProducts] = useState([])
  // const [wirelessProducts, setWirelessProducts] = useState([])



  useEffect(()=>{
    const filteredTrendingProducts = SportsData.filter(
      (item) => item.category
    );
    
    // const filteredBestProducts = products.filter(
    //   (item) => item.category === 'sofa'
    // );

    // const filteredMobileProducts = products.filter(
    //   (item) => item.category === 'mobile'
    // );

    // const filteredWirelessProducts = products.filter(
    //   (item) => item.category === 'wireless'
    // );


    setTrendingProducts(filteredTrendingProducts);
    // setBestSalesProducts(filteredBestProducts);
    // setMobileProducts(filteredMobileProducts);
    // setWirelessProducts(filteredWirelessProducts);
  },[]);

  return (<Helmet title={"Home"}>
      <section className="hero__section">
          <Container>
              <Row>
                  <Col lg='6' md='6'>
                      <div className="hero__content">
                          <p className="hero__subtitle">위치기반 실시간 운동매칭 서비스</p>
                          <h2>Let's Play with US!</h2>
                          <p>
                          렛플레이는 위치기반·실시간 운동매칭 서비스로 <br />
                          사용자들끼리 매칭을 통해 
                          운동 메이트와 함께 운동을 할 수 있습니다
                          </p>

                          <motion.button whileTap={{scale:1.2}}className="buy__btn"><Link to='/matching'>MATCHING NOW</Link></motion.button>
                          </div>
                  </Col>

                  <Col lg='6' md='6'>
                        <div className="hero__img">
                        </div>
                  </Col>
              </Row>
          </Container>
      </section>
      
      <Services />

      <section className="rending__products">
        <Container>
            <Row>
              <Col lg='12' className="text-center">
                <p className='match-b-title'>랫플 매칭이 총 000건 성사 되었습니다!</p>
              </Col>
                <MatchingList data={trendingProducts}/>
              <motion.p whileHover={{scale:1.2}} className='match-btn'></motion.p>
            </Row>
        </Container>
      </section>

      <section className="best__sales bg">
          <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section__title">평점 좋은 시설</h2>
            </Col>

            <FacilityList data={trendingProducts}/>
          </Row>
          </Container>
      </section>

      <section className="new__arrivals">
        <Container>
        <Row>
            <Col lg='12' className="text-center mb-5">
              <h2 className="section__title">평점 좋은 레슨</h2>
            </Col>

            <LessonList data={trendingProducts}/>
        </Row>
        </Container>
      </section>


      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='6'>

              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Event</h4>
                <h3 className="text-white fs-5 mb-3">렛플이벤트 들어가는 공간</h3>
              </div>

              <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='6' className="text-end">
                
            </Col>

          </Row>
        </Container>
      </section>



      <section className="new__arrivals">
        <Container>
        <Row>
            <Col lg='12' className="text-center mb-5">
              <h2 className="section__title">신규 매칭</h2>
            </Col>
        </Row>

          <ListMatchList data={trendingProducts} />
        </Container>
      </section>

    </Helmet>
  );
};

export default Home;