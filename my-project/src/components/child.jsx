import React, { useState } from 'react';

const ChildComponent = ({name, age, location}) => {
    
    const [color, setColor] = useState('bg-black');

    function handleChange(newColor){
        setColor(newColor)
    }


    return (
        <>
         <div className={`main h-screen w-screen flex items-baseline-last justify-center ${color}`}>
            <div className=' bg-amber-100 rounded-4xl mb-10 flex items-center justify-evenly' style={{width: "70vw", height: "10vh"}}>
                 <div onClick={() => handleChange("bg-red-600")} className='h-10 w-20 bg-red-600 flex items-center justify-center rounded-2xl cursor-pointer'>Red</div>
                 <div onClick={() => handleChange("bg-yellow-400")}  className='h-10 w-20 bg-yellow-400 flex items-center justify-center rounded-2xl cursor-pointer'>Yellow</div>
                 <div onClick={() => handleChange("bg-green-400")}  className='h-10 w-20 bg-green-400 flex items-center justify-center rounded-2xl  cursor-pointer'>Green</div>
                 <div onClick={() => handleChange("bg-purple-600")}  className='h-10 w-20 bg-purple-600 flex items-center justify-center rounded-2xl cursor-pointer'>Purple</div>
                 <div onClick={() => handleChange("bg-orange-500")}  className='h-10 w-20 bg-orange-500 flex items-center justify-center rounded-2xl cursor-pointer'>Orange</div>
                 <div onClick={() => handleChange("bg-amber-800")}  className='h-10 w-20 bg-amber-800 flex items-center justify-center rounded-2xl cursor-pointer'>Brown</div>
                 <div onClick={() => handleChange("bg-fuchsia-500")}  className='h-10 w-20 bg-fuchsia-500 flex items-center justify-center rounded-2xl cursor-pointer'>Pink</div>
            </div>
         </div>
        </>
    )
}

export default ChildComponent;