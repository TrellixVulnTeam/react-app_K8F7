import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from '../../Data/Data'
import Info from '../Info/info';

const InfoCard = (props) => {

  console.log(props.id);

  return (
    <div>
      <Info userInfo={data[props.id - 1]}/>
    </div>
  )
  


};

export default InfoCard;
