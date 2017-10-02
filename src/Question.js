import React from 'react'
import Answer from './Answer'
import classNames from 'classnames'

const Question = ({ instruction, text, answers, selectedAnswer, onAnswer, onNext, buttonStatus,
  customClassNames = {} }) => {
  const instructionClassName = classNames('rq-Question-instruction', customClassNames['rq-Question-instruction'])
  const textClassName = classNames('rq-Question-text', customClassNames['rq-Question-text'])
  const answerListClassName = classNames('rq-Question-answerList', customClassNames['rq-Question-answerList'])

  const renderText = () => {
    const lines = Array.isArray(text) ? text : [text]

    return lines.map((line, i) =>
      <p key={i} className={textClassName} style={{margin: 0}}>{line}</p>
    )
  }

  return (
    <div>
      <img src="/demo/IMG_2983 2.JPG" alt="Smiley face" height="142" width="142"/>
      <p className={instructionClassName}>{instruction}</p>
      {renderText()}
      <ol className={answerListClassName}>
        {answers.map((a, i) => (
          <Answer customClassNames={customClassNames}
                  key={i}
                  active={i === selectedAnswer}
                  buttonStatus = {buttonStatus }
                  onNext={onNext}
                  onAnswer={() => onAnswer(i)}>{a}</Answer>
        ))}
      </ol>
    </div>
  )
}

Question.propTypes = {
  instruction: React.PropTypes.string,
  text: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array,
  ]).isRequired,
  answers: React.PropTypes.array.isRequired,
  selectedAnswer: React.PropTypes.number,
  onNext: React.PropTypes.func,
  onAnswer: React.PropTypes.func,
  buttonStatus: React.PropTypes.boolean
}

export default Question
