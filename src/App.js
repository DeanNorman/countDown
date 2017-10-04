import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  flex-wrap:  wrap;
  
  background: #00ECB9;
  font-family: sans-serif;
  font-weight:100;
`;

const Title = styled.h1`
  color: #396;
  font-weight: 100;
  font-size: 40px;
  margin: 40px 0 20px;
`;

const ClockDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: inherit;
  color:white;
  text-align: center;
  font-size: 30px;
`;

const TimeContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2px; 
  padding: 10px;
  border-radius: 3px;
  background-color:#00BF96;
`;

const TimeValue = styled.div`
  
  
  padding:15px;
  border-radius:3px;
  background: #00816A;
 
`;

const TimeText = styled.div`
 flex-grow: 1;
  padding-top: 5px;
  font-size: 16px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>You'll be cuddling with Johanna in:</Title>
        <ClockDiv id="clockdiv">
          <TimeContainer>
            <TimeValue class="days"></TimeValue>
            <TimeText class="smalltext">Days</TimeText>
          </TimeContainer>
          <TimeContainer>
            <TimeValue class="hours"></TimeValue>
            <TimeText class="smalltext">Hours</TimeText>
          </TimeContainer>
          <TimeContainer>
            <TimeValue class="minutes"></TimeValue>
            <TimeText class="smalltext">Minutes</TimeText>
          </TimeContainer>
          <TimeContainer>
            <TimeValue class="seconds"></TimeValue>
            <TimeText class="smalltext">Seconds</TimeText>
          </TimeContainer>
        </ClockDiv>
      </Wrapper>
    );
  }
}

export default App;
