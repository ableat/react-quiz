import React from 'react'
import classNames from 'classnames'

const Answer = ({ active, onClick, onNext, onAnswer, children, buttonStatus, customClassNames = {} }) => {
  const answerClassName = classNames('rq-Answer', customClassNames['rq-Answer'])
  const answerButtonClassName = classNames('rq-Answer-button',
    customClassNames['rq-Answer-button'],
    { 'rq-Answer-button--active': active,
      [customClassNames['rq-Answer-button--active']]: active
    })
 //console.log(children[0])
 //console.log(buttonStatus)

  return (
    <li className={answerClassName}>
      <button disabled={buttonStatus} onClick={onAnswer }
              className={answerButtonClassName}><span className={"circle" + children.slice(0, 1)}>{children[0]} </span>&nbsp;  {children.substring(1)}</button>
    </li>
  )
}

Answer.propTypes = {
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func,
  onNext: React.PropTypes.func,
  onAnswer: React.PropTypes.func,
  children: React.PropTypes.node.isRequired,
  buttonStatus: React.PropTypes.boolean
}

export default Answer
