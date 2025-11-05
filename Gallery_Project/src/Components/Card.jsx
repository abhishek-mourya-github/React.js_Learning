import React from 'react'

const Card = (props) => {
  return (
    <div>
       <a href={props.elem.url} target="_blank">
            <div className="h-48 w-52">
              <img
                className="h-full w-full object-cover rounded-xl"
                src={props.elem.download_url}
                alt=""
              />
            </div>
            <h2>{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card