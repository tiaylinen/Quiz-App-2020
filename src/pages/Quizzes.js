import React from 'react'
import Quiz from '../components/QuizStructure';
import '../components/Quiz.css'

export default class Quizzes extends React.Component {

  render() {
    return (
      <div className="quizzes">
        <Quiz />
      </div>
    )
  }

}
