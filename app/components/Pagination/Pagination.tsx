"use client"
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const [activeButton, setActiveButton] = useState(2); // Set the initial active button

  const handleButtonClick = (buttonNumber:number) => {
    setActiveButton(buttonNumber);
  };

  

  let message;
  let feedback;
  if (activeButton === 1) {
    message = <AiOutlineArrowLeft/>;
    feedback = "Shift Left!"
  } else if (activeButton === 2) {
    message = <AiOutlineArrowRight/>;
    feedback = "Shift Right!"

  } else if (activeButton === 3) {
    message = <AiOutlineArrowUp/>;
    feedback = "Maintain Balance!"

  }

  return (
    <>
      <div className={`${styles.container}`}>
      <div className="join mb-10">
        <button className={`join-item btn ${activeButton === 1 ? 'btn-active' : ''}`} onClick={() => handleButtonClick(1)}>1</button>
        <button className={`join-item btn ${activeButton === 2 ? 'btn-active' : ''}`} onClick={() => handleButtonClick(2)}>2</button>
        <button className={`join-item btn ${activeButton === 3 ? 'btn-active' : ''}`} onClick={() => handleButtonClick(3)}>3</button>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Alignment</div>
          <div className="stat-value">{message}</div>
          <div className="stat-desc">{feedback}</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Pagination;
