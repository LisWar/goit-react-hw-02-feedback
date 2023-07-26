import {FeedbackOptions, Statistics, SectionTitle, Notification} from './Review/Review'
import React, { Component } from 'react';

import {FeedbackContainer, } from './Review/Review.styled'


// import StatItem from './Review/FeedbackOptions'

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  printState() {
       console.log(this.state);                                                       // {options: {…}}
       console.log('this.state[\'good\']: ', this.state['good']);                     // 0
  }
 
  countTotalFeedback() {
      return (this.state.good + this.state.bad + this.state.neutral);
  }

  countPositiveFeedbackPercentage() {
      return (~~((this.state.good / (this.countTotalFeedback()))*100));
  }

  handleClick = event => {
      this.setState((prevState) => (
          {[event.target.name]:prevState[event.target.name] + 1}
      ))
  };

  objToList(obj) {
    return Object.keys(obj);
  }

  render() {
    const percentage = this.countPositiveFeedbackPercentage();
    const sum = this.countTotalFeedback()
    const options = this.objToList(this.state);
    const {good, bad, neutral} = this.state;

    return (
      <FeedbackContainer>
        <SectionTitle title = 'Please leave feedback'>
          <FeedbackOptions 
            options = {options}
            onLeaveFeedback = {this.handleClick}>
          </FeedbackOptions>
        </SectionTitle>
      


      {this.countTotalFeedback()>0 ?
      <SectionTitle title = 'Statistics'>
        <Statistics 
          good = {good}
          bad = {bad}
          neutral = {neutral}
          sum = {sum} 
          percent = {percentage} 
          >
        </Statistics>
      </SectionTitle>:
      <Notification message="There is no feedback">
      </Notification>
      }
      </FeedbackContainer>);
  };
}