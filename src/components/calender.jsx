import { Box, Grid, Paper } from "@material-ui/core";
import "../assets/calender.css";
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 500,
  margin: "20px auto",
  position: "relative",
  left: "-969px",
};
// import img from "../assets/images/rectangle.jpg";

function Calender() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="card-body">
      <div className="card-header">
        <div className="hedding">MY Log</div>
      </div>
      <div className="card-text">
        Way to go !
        {/* <div className="second-hedding">You`ve completed your daily checkin</div> */}
      </div>
      <div className="daily-checkin">
        <p> Daily Checkin</p>
        <div className="body-text">Finished</div>
      </div>
      <div className="current-streak">
        <p> Current-Streak </p>
        <div className="body-text">5 Days</div>
      </div>
      <div className="longest-streak">
        <p> Longest Streak</p>
        <div className="body-text">12 Days</div>
      </div>
      <div className="row"></div>
      <div className="calender-header">May 2019</div>
      <div className="calender">
      <Calendar onChange={onChange} value={value} />
    </div>
      <div className="calender-footer">Sunday May 18</div>
      <div className="card-1">
        <img className="card-img" src="../assets/images/logo.svg" /> 
        <div className="card-title-1">Very Good</div>
        <div className="card-heading-1">Today, 7:45</div>
      </div>
      <div className="card-2">
        <img className="card-img" src="../assets/images/logo.svg" /> 
        <div className="card-title-1">Very Good</div>
        <div className="card-heading-1">Today, 7:45</div>
      </div>
      <div className="card-3">
        <img className="card-img" src="../assets/images/logo.svg" /> 
        <div className="card-title-1">Very Good</div>
        <div className="card-heading-1">Today, 7:45</div>
        <div className="card-title-text">Awesome Feedback from Ben! Super excited to continue to <br/> work with him on Project X </div>
        <img className="card-img-logo" src="../assets/images/Group 541.jpg" /> 
      </div>
    </div>
  );
}

export default Calender;
