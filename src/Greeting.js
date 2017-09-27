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
    showFirstContent,
    startQuiz,
    startQuizOver
} = this.props

 

  return (


    <div className='custom-info'>
        {showFirstContent
        
        ?
        <div>
         <p className='custom-text-left'>Welcome to, <br/></p>


        <p className='custom-text-center'>The Able Knowledge Game! <br/></p> 

        <p className='custom-text-left'>We will ask you 5 questions and if you complete all of the questions, you will qualify to enter  in a drawing to win a $100 Amazon gift card <br/> </p>

        <p className='custom-text-right'>Good Luck!</p>
      

      <button 
        onClick={() => startQuiz('start')}
        disabled={false}>Start</button>
    </div>
          :
          <div>

 
          <p className='custom-text-left'>Thank you for playing our game! <br/></p>

        <p className='custom-text-left'>In order to enter the Amazon card drawing, please write "Able means Technology" on the back of your business card and place it on our drawing box <br/> </p>

      
        
    </div>
        }



   

    </div>
  )
}
  }
Greeting.propTypes = {

  customText: React.PropTypes.array,
  showFirstContent: React.PropTypes.boolean,
  startQuiz: React.PropTypes.func.isRequired,
  startQuizOver: React.PropTypes.func.isRequired,

}

export default Greeting
