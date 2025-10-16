import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return(
       <UserContext.Provider value={{user, setUser}}>
       {/* UserContect.Provider locker ya box ka boss he */}
       {/* hamne locker me {user, setUser} daal di */}
       {/* user kuch data aayega use store karega, ye bas data ko store krega ya to use bhejega */}
       {/* setUser use data ko update karne ka kaam kar raha he jese koi new data aaya to use update krke user me store krna */}
         {children}
       {/* Jo bhi components is provider ke andar he, wo ye sab data access kar sakte he */}
       </UserContext.Provider>
    )
}

export default UserContextProvider;