import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='cards' className='h-full flex flex-nowrap overflow-x-auto gap-6 p-4 w-2/3'>
    {
      props.users.map((elem) => {
          return <RightCard img={elem.img} tag={elem.tag}/>
      })
    }
    </div>
  )
}

export default RightContent
