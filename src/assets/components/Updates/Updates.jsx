import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../../data/data";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update, index) => {
        return (
          <div className="update" key={index}>
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div style={{marginBottom: '0.5rem'}}>
                <span className="update-name">{update.name}</span>
                <span className="update-text"> {update.noti}</span>
              </div>
              <span className="update-time">{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;