import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(responce.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h2 className="text-gray-500 text-2xl absolute left-1/2 top-1/2 -translatex-1/2 -translatey-1/2">Loading...</h2>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, index) {
      return (
        <div key={index}>
         <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className="h-screen bg-black text-white overflow-auto p-4">
      <div className="flex flex-wrap gap-4 lg:h-[85%]">{printUserData}</div>

      <div className="flex justify-center items-center p-4 gap-4 ">
        <button 
        style={{opacity:index == 1 ? 0.5 : 1}}
        onClick={() => {
           if(index > 1){
            setIndex(index-1)
            setUserData([])
           }
        }}
        className="bg-amber-200 text-black rounded-lg py-1 px-4 font-semibold cursor-pointer active:scale-95">
        Prev
        </button>
        <h4>Page {index}</h4>
        <button 
         onClick={() => {
          setUserData([])
          setIndex(index+1)
        }}
        className="bg-amber-200 text-black rounded-lg py-1 px-4 font-semibold cursor-pointer active:scale-95">
        Next
        </button>
      </div>
    </div>
  );
};

export default App;
