import React from 'react'
import MatchingCard from './MatchingCard'

const MatchingList = ({data}) => {

 

  return (
    <>
    {
      data.map((item)=>(     
        <MatchingCard item={item}/>
      ))
    }
    </>
  )
}

export default MatchingList
