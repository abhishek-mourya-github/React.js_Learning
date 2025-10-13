import React, { useEffect, useState } from 'react';

function Github(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/abhishek-mourya-github')
        .then(responce => responce.json())
        .then(data => {
           setData(data)
        })
    }, [])
    
    return (
        <>
          <div className='text-center bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}</div>
          <img src={data.avatar_url} alt="Github Picture" width={300} />
        </>
    )
}

export default Github;