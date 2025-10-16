import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Loggin(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
         e.preventDefault();
         setUser({username, password})   
    }
    return(
        <>
          <h2>Login</h2>
          <input type="text" 
          className='border-b-white border-1 mr-2 p-1'
           value={username}
           onChange={(e) => setUsername(e.target.value) }
           placeholder='username'  />

          <input type="text" 
           className='border-b-white border-1 mr-2 p-1'
           value={password}
           onChange={(e) => setPassword(e.target.value) }
           placeholder='password'  />

          <button className='cursor-pointer border-amber-400 border-2' onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Loggin;