import React,{useState} from 'react'
import SearchDateTime from './searchdate'
import SearchPeople from './searchppl'
import SearchLocation from './searchlocation'
import SearchOption from './searchoption01'



const Search = () => {
  const [regionToggle, setRegionToggle] = useState(false);
  const [peopleToggle, setPeopleToggle] = useState(false);
  const [dateToggle, setDateToggle] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);
  



  const controlToggle = (currentId) => {
    if(currentId ==='people'){
      setPeopleToggle(prev => !prev);
      setRegionToggle(false);
      setDateToggle(false);
      setFilterToggle(false);
    }else if(currentId === 'region'){
      setRegionToggle(prev => !prev);
      setPeopleToggle(false);
      setDateToggle(false);
      setFilterToggle(false);
    }else if(currentId==='date'){
      setDateToggle(prev => !prev);
      setPeopleToggle(false);
      setRegionToggle(false);
      setFilterToggle(false);
    }else if(currentId === 'fliter'){
      setFilterToggle(prev => !prev);
      setDateToggle(false);
      setPeopleToggle(false);
      setRegionToggle(false);
    }else{
      setFilterToggle(false);
      setDateToggle(false);
      setPeopleToggle(false);
      setRegionToggle(false);
    }
  }



  return (
<div>
  <div>
    <div className='wrap-search'>
        <SearchLocation regionToggle={regionToggle} controlToggle={controlToggle}/> 
        <SearchPeople peopleToggle={peopleToggle}  controlToggle={controlToggle}/>
        <SearchDateTime dateToggle={dateToggle} controlToggle={controlToggle}/>
    </div> 
      <SearchOption filterToggle={filterToggle} controlToggle={controlToggle}/>
      
  </div>   
</div>



  )
}

export default Search