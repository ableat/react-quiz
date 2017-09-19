import React from 'react'
import Question from './Question'
import ProgressBar from './ProgressBar'
import classNames from 'classnames'
import interpolate from 'interpolate'
import ReactCountdownClock from 'react-countdown-clock'

const Quiz = ({ questions, answers, responseView, selectedanswer, currentQuestionIndex, onAnswer, onNext, 
  onFinish, startQuizOver, customClassNames = {}, customText = ''}) => {
  const isLastQuestion = (currentQuestionIndex + 1) === questions.length

  const progressTextClassName = classNames('rq-Quiz-progressText', customClassNames['rq-Quiz-progressText'])
  const buttonContainerClassName = classNames('rq-Quiz-buttonContainer', customClassNames['rq-Quiz-buttonContainer'])
  const nextButtonClassName = classNames('rq-Quiz-nextButton', customClassNames['rq-Quiz-nextButton'])

  const finishButtonText = customText['rq-Quiz-nextButton--finish'] || 'Finish'
  const nextButtonText = customText['rq-Quiz-nextButton'] || 'Next'
  const progressText = interpolate(customText['rq-Quiz-progressText'] || 'Question {n} of {total}', {
    n: currentQuestionIndex + 1,
    total: questions.length
  })

console.log(currentQuestionIndex)

if (currentQuestionIndex === 0) {setTimeout(function(){ startQuizOver() }, 30000)}

  return (



    <div>

      <div id='timer'>
        <ReactCountdownClock seconds={30}
                     color="#0DA4E6"
                     alpha={0.9}
                     showMilliseconds={false}
                     size={200}
          />
</div>
<div  id='questionAnswerSection'>
      <p className={progressTextClassName}>'{progressText}'</p>
      <ProgressBar value={currentQuestionIndex + 1}
                   max={questions.length}
                   customClassNames={customClassNames} />
      <Question customClassNames={customClassNames}
                onAnswer={onAnswer}
                selectedAnswer={answers[currentQuestionIndex]}
                {...questions[currentQuestionIndex]} />
        {responseView 
            ? <p id='response-box' p>{questions[currentQuestionIndex].response[selectedanswer]}</p>

            :
            null
        }
</div>

      <div className={buttonContainerClassName}>
        {isLastQuestion
          ? <button className={nextButtonClassName}
                    onClick={() => onFinish(answers)}
                    disabled={answers[currentQuestionIndex] === undefined}>{finishButtonText}</button>
          : <button className={nextButtonClassName}
                    onClick={onNext}
                    disabled={answers[currentQuestionIndex] === undefined}>{nextButtonText}</button>
        }
      </div>
    </div>
  )
}

Quiz.propTypes = {
  questions: React.PropTypes.array.isRequired,
  answers: React.PropTypes.object.isRequired,
  responseView: React.PropTypes.boolean,
  selectedanswer: React.PropTypes.number,
  customText: React.PropTypes.string,
  currentQuestionIndex: React.PropTypes.number.isRequired,
  onAnswer: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onFinish: React.PropTypes.func.isRequired,
  startQuizOver: React.PropTypes.func.isRequired,
  progressTextTemplate: React.PropTypes.string
}

export default Quiz
