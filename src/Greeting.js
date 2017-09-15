import React from 'react'
import Question from './Question'
import ProgressBar from './ProgressBar'
import classNames from 'classnames'
import interpolate from 'interpolate'

const Greeting = ({ customText = []}) => {


  return (


    <div className='custom-info'>

         <p className='custom-text-left'>Welcome to, <br/></p>


        <p className='custom-text-center'>The Able Knowledge Game! <br/></p> 

        <p className='custom-text-left'>We will ask you 5 questions and if you complete all of the questions, you will qualify to enter  in a drawing to win a $100 Amazon gift card <br/> </p>

        <p className='custom-text-right'>Good Luck!</p>



    </div>
  )
}

Greeting.propTypes = {

  customText: React.PropTypes.array,

}

export default Greeting
