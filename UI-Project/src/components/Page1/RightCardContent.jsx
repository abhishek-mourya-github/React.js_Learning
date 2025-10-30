import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-medium">
          1
        </h2>
        <div>
          <p className="text-lg leading-normal text-white mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            voluptates eum nisi!
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-lg ">
              {props.tag}
            </button>
            <i className="ri-arrow-right-line bg-blue-600 text-white font-medium px-4 py-2 rounded-full text-lg"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent