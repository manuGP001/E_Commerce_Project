import React from 'react'
import styles from '../../styles/styles'
import dell from "../../assets/dell.jpg";
import lg from "../../assets/lg.jpg";
import micro from "../../assets/micro.jpg";
import sony from "../../assets/sony.jpg";

const Sponsored = () => {
  return (
    <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
        <div className="flex justify-between w-full">
          <div className="flex items-start">
         <img height="130px" width="130px" src={sony}/>
          </div>
          <div className="flex items-start">
         <img height="130px" width="130px" src={lg}/>
          </div>
          <div className="flex items-start">
         <img height="130px" width="130px" src={micro}/>
          </div>
          <div className="flex items-start">
         <img height="130px" width="130px" src={dell}/>
          </div>
        </div>
    </div>
  );
};

export default Sponsored