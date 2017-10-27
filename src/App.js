import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: #00ECB9;
  font-family: sans-serif;
  font-weight:100;
  min-height:400px;
  height:100%;
`;

const Title = styled.h1`
  color: #396;
  font-weight: 100;
  font-size: 40px;
  margin: 40px 0 20px;
`;

const ClockDiv = styled.div`
  display:flex;
  font-family: inherit;
  color:white;
  text-align: center;
  font-size: 30px;
`;

const TimeContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin: 2px; 
  padding: 10px 10px 0 10px;
  border-radius: 3px;
  background-color:#00BF96;
`;

const TimeValue = styled.div`
  padding:15px;
  border-radius:3px;
  background: #00816A;
`;

const TimeText = styled.div`
  padding: 15px;
  font-size: 16px;
`;

class App extends Component {
state = {
  // endtime: '2017-12-8',
}


 componentDidMount() {
  function getTimeRemaining(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return {
      time: time,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysDiv = clock.querySelector('#days');
    var hoursDiv = clock.querySelector('#hours');
    var minutesDiv = clock.querySelector('#minutes');
    var secondsDiv = clock.querySelector('#seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysDiv.innerHTML = t.days;
      hoursDiv.innerHTML = ('0' + t.hours).slice(-2);
      minutesDiv.innerHTML = ('0' + t.minutes).slice(-2);
      secondsDiv.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
     var timeinterval = setInterval(updateClock, 1000);

  }
    var deadline = '2017-12-8';
    initializeClock('clockdiv', deadline);
 }

render() {
    return (
      <Wrapper>
        <Title> Jo <3 </Title>
        <ClockDiv id="clockdiv">
          <TimeContainer>
            <TimeValue id="days"></TimeValue>
            <TimeText id="smalltext">Days</TimeText>
          </TimeContainer>
          <TimeContainer>
            <TimeValue id="hours"></TimeValue>
            <TimeText id="smalltext">Hours</TimeText>
          </TimeContainer>
          <TimeContainer>
            <TimeValue id="minutes"></TimeValue>
            <TimeText id="smalltext">Minutes</TimeText>
          </TimeContainer>
          <TimeContainer>
            <TimeValue id="seconds"></TimeValue>
            <TimeText id="smalltext">Seconds</TimeText>
          </TimeContainer>     
        </ClockDiv>
      </Wrapper>
    );
  }
}

export default App;
