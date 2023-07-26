import PropTypes from 'prop-types';

import {FeedbackButton, FeedbackLeave, Category, StatBlock, SecTitle, NotifStyled} from './Review.styled'

export const FeedbackOptions = ({options, onLeaveFeedback}) => 
    (<FeedbackLeave>
        {options.map(option =>  (
        <FeedbackButton key={option} name={option} onClick={onLeaveFeedback} >{option}</FeedbackButton>
        ))}
    </FeedbackLeave>)

export const Statistics = ({good, bad, neutral, sum, percent}) =>
    (<StatBlock>
        <ul>
            <Category name='good' >GOOD: {good}</Category>
            <Category name='bad' > BAD: {bad}</Category>
            <Category name='neutral' > NEUTRAL: {neutral}</Category>
        </ul>

        <div>
            TOTAL: {sum}
        </div>

        <div>
            % of good reviews: {percent}% 
        </div> 
    </StatBlock>)

export const SectionTitle = ({title, children}) => (
    <><SecTitle>{title}</SecTitle>
    {children}
    </>
)

export const Notification = ({message}) => (
    <NotifStyled>{message}</NotifStyled>
)

FeedbackOptions.propTypes = {
    options:PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback:PropTypes.func,
}


Statistics.propTypes = {
    options:PropTypes.arrayOf(PropTypes.string),
    values:PropTypes.object, 
    sum:PropTypes.number, 
    percent:PropTypes.number,
}