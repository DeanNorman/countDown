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
  endtime: '2017-12-8',
}

  getTimeRemaining = (endtime) => {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60 );
    const seconds = Math.floor((time / 1000) % 60);
    
    return {
      time: time,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }



  render() {
    function updateClock(endtime) {
      var t = this.getTimeRemaining(this.state.endtime);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    var timeinterval = setInterval(updateClock, 1000);
    console.log(timeinterval)
    return (
      <Wrapper>
        <Title> Parse Time </Title>
        <ClockDiv id="clockdiv">
          <TimeContainer>
            <TimeValue class="days">
              {
                (this.getTimeRemaining('2017-12-8').days)
              }
            </TimeValue>
            <TimeText class="smalltext">Days</TimeText>
          </TimeContainer>
          <TimeContainer>
            <TimeValue class="hours">
              {this.getTimeRemaining('2017-12-8').hours}
            </TimeValue>
            <TimeText class="smalltext">Hours</TimeText>
          </TimeContainer>
          <TimeContainer>
            <TimeValue class="minutes">
              {this.getTimeRemaining('2017-12-8').minutes}
            </TimeValue>
            <TimeText class="smalltext">Minutes</TimeText>
          </TimeContainer>
          <TimeContainer>
            <TimeValue class="seconds">
              {this.getTimeRemaining('2017-12-8').seconds}
            </TimeValue>
            <TimeText class="smalltext">Seconds</TimeText>
          </TimeContainer>
          
        </ClockDiv>
      </Wrapper>
    );
  }
}

export default App;
