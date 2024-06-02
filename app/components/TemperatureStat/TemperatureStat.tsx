import React from "react";
import styles from "./Temperature.module.css" 
interface TemperatureStatProps {
    feedbackMessage: string[]; // Define the type of the feedbackMessage prop
    temperature: number;
  }



const TemperatureStat = ({feedbackMessage, temperature}:TemperatureStatProps ) => {
    let index = 0;
    if(temperature < 95){
        index = 1
    }
    else if(temperature < 98){
        index = 0
    }
    else{
        index =2
    }

  return (
    <div className={`stats shadow ${styles.bigger}`}>
      <div className="stat">
        <div className="stat-title">Temperature</div>
        <div className="stat-value">{temperature}</div>
        <div className="stat-desc">{feedbackMessage[index]}</div>
      </div>
    </div>
  );
};

export default TemperatureStat;
