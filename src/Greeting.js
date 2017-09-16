import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Question from './Question'
import ProgressBar from './ProgressBar'
import classNames from 'classnames'
import interpolate from 'interpolate'

//const Greeting = ({ customText = []}, startQuiz={}) => {
  class Greeting extends Component {

render(){

  const {
    customText,
    startQuiz
} = this.props

  return (


    <div className='custom-info'>

         <p className='custom-text-left'>Welcome to, <br/></p>


        <p className='custom-text-center'>The Able Knowledge Game! <br/></p> 

        <p className='custom-text-left'>We will ask you 5 questions and if you complete all of the questions, you will qualify to enter  in a drawing to win a $100 Amazon gift card <br/> </p>

        <p className='custom-text-right'>Good Luck!</p>





   
    <div>
      <button 
        onClick={() => startQuiz('start')}
        disabled={false}>Start</button>
    </div>
    </div>
  )
}
  }
Greeting.propTypes = {

  customText: React.PropTypes.array,
  startQuiz: React.PropTypes.func.isRequired,

}

export default Greeting
