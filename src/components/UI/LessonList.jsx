import React from 'react'
import LessonCard from './LessonCard'

const LessonList = ({data}) => {
  return (
    <>
    {
      data.map((item)=>(
        <LessonCard item={item}/>
      ))
    }
    </>
  )
}

export default LessonList
