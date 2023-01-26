import React from 'react'

function TimeType(props) {
  return (
        <input type='button' className='timeTypeBtn'
         style={{backgroundColor : props.color}} value={props.time}
        />
  );
}

export default TimeType
