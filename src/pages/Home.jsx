import React, { useState, useEffect }from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css"
import '../styles/layout.css'

import { Container, Row, Col } from "reactstrap"

import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import SportsData from '../assets/data/SportsData'
import Services from "../services/Services";
import MatchingData from "../assets/data/MatchingData";
import lessonData from "../assets/data/lessonData";

import MatchingList from "../components/UI/MatchingList";
import LessonList from "../components/UI/LessonList";
import FacilityList from "../components/UI/FacilityList";
import ListMatchList from "../components/UI/ListMatchList";

import sportsButtons from "../assets/data/datacategory";
import { getMatchingData, filterMatchingData, getLessonData, filterLessonData, getSportsData,filterSportsData } from "./Filter/filtertfun";
import FilterHome from "./Filter/filter_home";

const Home = () => {

  const [ matching, setMatching] = useState([]);
  const [ lesson, setLesson] = useState([]);
  const [ facilty, setFacilty] = useState([]);



  useEffect(()=>{
    const filteredMatching = MatchingData.filter(
      (item) => item.category
    );    

    const filteredLesson = lessonData.filter(
      (item) => item.category
    );

    const filteredFacilty = SportsData.filter(
      (item) => item.category
    );


    setMatching(filteredMatching);
    setLesson(filteredLesson);
    setFacilty(filteredFacilty);

  },[]);


  function onMenu(e) {
    let sportsCategory = e.target.value;
    if(sportsCategory !== "all"){
      setMatching(filterMatchingData(sportsCategory)) 
    }else{
      setMatching(getMatchingData())
    }
  }

  function onMenuLesson(e) {
    let sportsCategory = e.target.value;
    if(sportsCategory !== "all"){
      setLesson(filterLessonData(sportsCategory)) 
    }else{
      setLesson(getLessonData())
    }
  }

  function onMenuFacility(e) {
    let sportsCategory = e.target.value;
    if(sportsCategory !== "all"){
      setFacilty(filterSportsData(sportsCategory)) 
    }else{
      setFacilty(getSportsData())
    }
  }



  return (<Helmet title={"Home"}>
      <section className="hero__section">
          <Container>
              <Row>
                  <Col lg='6' md='6'>
                      <div className="hero__content">
                          <p className="hero__subtitle">???????????? ????????? ???????????? ?????????</p>
                          <h2>Let's Play with US!</h2>
                          <p>
                          ??????????????? ??????????????????????? ???????????? ???????????? <br />
                          ?????????????????? ????????? ?????? 
                          ?????? ???????????? ?????? ????????? ??? ??? ????????????
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
                <p className='match-b-title'>?????? ????????? ??? 000??? ?????? ???????????????!</p>
              </Col>
              <FilterHome
                sportsButtons={sportsButtons}          
                onMenu={onMenu}
                />
                <MatchingList data={matching}/>
                <div>
              <motion.p whileHover={{scale:1.2}} className='match-btn'></motion.p>
              </div>
            </Row>
        </Container>
      </section>

      <section className="best__sales bg">
          <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section__title">?????? ?????? ??????</h2>
            </Col>
            <FilterHome
                sportsButtons={sportsButtons}          
                onMenu={onMenuFacility}
                />
            <FacilityList data={facilty}/>
          </Row>
          </Container>
      </section>

      <section className="new__arrivals">
        <Container>
        <Row>
            <Col lg='12' className="text-center mb-5">
              <h2 className="section__title">?????? ?????? ??????</h2>
            </Col>
            <FilterHome
                sportsButtons={sportsButtons}          
                onMenu={onMenuLesson}
                />
            <LessonList data={lesson}/>
        </Row>
        </Container>
      </section>


      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='6'>

              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Event</h4>
                <h3 className="text-white fs-5 mb-3">??????????????? ???????????? ??????</h3>
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
              <h2 className="section__title">?????? ??????</h2>
            </Col>
        </Row>

          <ListMatchList data={matching}/>
        </Container>
      </section>

    </Helmet>
  );
};

export default Home;