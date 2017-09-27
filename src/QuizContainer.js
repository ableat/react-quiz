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
    selectedanswer: -1
  }

  onAnswer = (selectedAnswer) => {
    console.log('selected answer ' + selectedAnswer )
    this.setState({
      ...this.state,
      answers: {
        ...this.state.answers,
        [this.state.currentQuestionIndex]: selectedAnswer
      },
      responseView:  true,
      selectedanswer: selectedAnswer
    })
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
                 onNext={this.onNext} />

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
