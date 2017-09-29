import React from 'react'
import Quiz from './Quiz'
import Greeting from './Greeting'

/*
  Connects Quiz to state.

  Separating QuizContainer from Quiz allows you to swap this QuizContainer for
  your own if you'd like, one that connects to Redux for example.
*/
class QuizContainer extends React.Component {
  state = {
    currentQuestionIndex: 0,
    answers: {},
    responseView: false,
    startQuizSW: false,
    showFirstContent: true,
    selectedanswer: -1,
    buttonStatus: false
  }

  onAnswer = (selectedAnswer) => {
 //   console.log('selected answer ' + selectedAnswer )
    this.setState({
      ...this.state,
      answers: {
        ...this.state.answers,
        [this.state.currentQuestionIndex]: selectedAnswer
      },
      responseView:  true,
      buttonStatus: true,
      selectedanswer: selectedAnswer
    })
    const isLastQuestion = (this.state.currentQuestionIndex + 1) === this.props.questions.length
 //   console.log(isLastQuestion)
    var that = this
    console.log(that.state.buttonStatus)

    {isLastQuestion ?

      setTimeout(function(){  
        that.setState({
          currentQuestionIndex: 0,
          responseView:  false,
          startQuizSW: false,
          showFirstContent: false,
          buttonStatus: false
          })}, 5000)


:

setTimeout(function(){  
  //     console.log('this'), 3000   
      that.setState({
         currentQuestionIndex: that.state.currentQuestionIndex + 1,
         buttonStatus: false,
         responseView:  false })}, 5000)

}

  }

  onNext = () => this.setState({
    currentQuestionIndex: this.state.currentQuestionIndex + 1,
    responseView:  false
  })

  startQuiz = () => this.setState({
    currentQuestionIndex: 0,
    responseView:  false,
    startQuizSW: true
  })

  startQuizOver = () => this.setState({
    currentQuestionIndex: 0,
    answers: {},
    responseView: false,
    startQuizSW: false,
    showFirstContent: true,
    selectedanswer: -1
  })

  onFinish = () => this.setState({
    currentQuestionIndex: 0,
    responseView:  false,
    startQuizSW: false,
    showFirstContent: false
  })

 /* render () {
   
/*<Quiz {...this.props}
                 currentQuestionIndex={this.state.currentQuestionIndex}
                 responseView ={this.state.responseView}
                 selectedanswer = {this.state.selectedanswer}
                 answers={this.state.answers}
                 onAnswer={this.onAnswer}
                 onNext={this.onNext} />  
 
                 return <Greeting 

      customText = {this.props.customText}
      startQuiz = {this.startQuiz}
 />
  } */
    render () {

      var showQuizSW = false
      console.log(this.props)

    return (
    
    <div>
      { this.state.startQuizSW
      ? <Quiz {...this.props}
                 currentQuestionIndex={this.state.currentQuestionIndex}
                 responseView ={this.state.responseView}
                 selectedanswer = {this.state.selectedanswer}
                 answers={this.state.answers}
                 startQuizOver = {this.startQuizOver}
                 onAnswer={this.onAnswer}
                 onFinish={this.onFinish}
                 onNext={this.onNext} 
                 buttonStatus = {this.state.buttonStatus} />
      : <Greeting 

        customText = {this.props.customText}
        showFirstContent = {this.state.showFirstContent}
        startQuiz = {this.startQuiz}
        startQuizOver = {this.startQuizOver}/>

      }
 </div>
 )
  }
}

export default QuizContainer
