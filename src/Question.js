import React from 'react'
import Answer from './Answer'

class Question extends React.Component {
  state = {
    selectedAnswer: null
  }

  render () {
    const { instruction, text, answers } = this.props
    return (
      <div>
        <p>{instruction}</p>
        <p>{text}</p>
        <ul>
          {answers.map((a, i) => (
            <Answer key={i}
                    active={i === this.state.selectedAnswer}
                    onClick={() => this.setState({ selectedAnswer: i })}>{a}</Answer>
          ))}
        </ul>
        <div className="Quiz-buttonContainer">
          <button>Next question</button>
        </div>
      </div>
    )
  }
}

Question.propTypes = {
  instruction: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  correct: React.PropTypes.number,
  answers: React.PropTypes.array.isRequired
}

export default Question
