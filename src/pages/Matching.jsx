import React, { useState, useEffect }from "react";
import { Container, Row } from 'reactstrap'

import Search from './Search/search';
import '../styles/layout.css'
import '../styles/boardlist.css'
import MatchingList from '../components/UI/MatchingList';
import SportsData from '../assets/data/SportsData'

const Matching = ({data}) => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(()=>{
    const filteredTrendingProducts = SportsData.filter(
      (item) => item.category
    );
    setTrendingProducts(filteredTrendingProducts);
  },[]);
    
  return (
    <Container>
      <Row>
        <div className='m40'>
          <Search />
        </div>          
        <MatchingList data={trendingProducts}/>
      </Row>
    </Container>
  );
}

export default Matching
