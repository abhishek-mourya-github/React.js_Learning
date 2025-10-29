import React from "react";

const Card = (props) => {
  const { brandLogo, companyName, datePosted, post, tag1, tag2, pay, location } = props;
  return (
    <>
      <div className="p-2">
        <div className="Card border-2 border-black rounded-4xl flex flex-col justify-between overflow-hidden ">
          <div className="topPart w-full flex items-center justify-between py-4 px-6">
            <div className="logoBorder h-16 w-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img 
                src={brandLogo} 
                alt={companyName} 
                className="h-full w-full object-contain z-10" 
                />
              </div>
            </div>
            <div className="saveButton h-8 w-18 rounded-lg border-2 border-gray-300 flex flex-row items-center justify-center gap-2">
              <h3>Save</h3>
              <div className="saveLogo">
                <svg
                  className="h-6 w-4 pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                >
                  <path d="M 6 2 C 4.8444444 2 4 2.9666667 4 4 L 4 22.039062 L 12 19.066406 L 20 22.039062 L 20 20.599609 L 20 4 C 20 3.4777778 19.808671 2.9453899 19.431641 2.5683594 C 19.05461 2.1913289 18.522222 2 18 2 L 6 2 z M 6 4 L 18 4 L 18 19.162109 L 12 16.933594 L 6 19.162109 L 6 4 z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="middlePart h-40 w-full flex flex-col gap-2 pl-6">
            <div className="middleUpperPart flex gap-2">
              <h2 className="font-bold text-[17px]">{companyName}</h2>
              <h5 className="text-[12px] pt-1.5 text-gray-500 font-medium">{datePosted}</h5>
            </div>
            <div className="middleMiddlePart">
              <h2 className="font-bold text-xl">{post}</h2>
            </div>
            <div className="middleLowerPart flex gap-1">
              <div className="saveButton h-8 px-4 rounded-lg bg-gray-200 text-black font-medium flex flex-row items-center justify-center">
                <h3>{tag1}</h3>
              </div>
              <div className="saveButton h-8 px-4 rounded-lg bg-gray-200 text-black font-medium flex flex-row items-center justify-center">
                <h3>{tag2}</h3>
              </div>
            </div>
          </div>
          <div className="lowerPart h-20 w-full border-t-2 border-gray-400 flex justify-between items-center px-6">
            <div className="lowerLeftPart h-14">
              <h3 className="font-medium text-[23px]">{pay}</h3>
              <h3 className="text-[14px] text-gray-400">{location}</h3>
            </div>
            <div className="lowerRightPar">
              <button className="text-lg font-light bg-black text-white px-3 py-1 rounded-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;