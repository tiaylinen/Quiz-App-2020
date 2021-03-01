import React from 'react';
import QuestionBox from './QuestionBox.js';
import Option from './Option.js';
import ResultView from './ResultView.js';
import axios from 'axios';
import './Quiz.css';
import CommentSection from './CommentSection.js'

//display all questions and their options in a quiz
const Questions = ({quiz}) => {
  const questions = () => quiz.questions.map(question => <QuestionBox key={question.id} questions={question.question} options={<Options question={question}/>}/>)

  return(
    <div className='allquestions'>
      {questions()}
    </div>
  )
}

//display options to each question, sorted alpabetically to mix up the order
const Options = ({question}) => {
  const options = () => question.options
  .sort((a, b) => a.op.localeCompare(b.op))
  .map(option => <Option key={option.id} option={option.op} value={option.value} group={question.question}/>)

  return(
    <div className='option-container'> 
      {options()}
    </div>
  )
}

//display results (hidden by default) 
const Results = ({quiz}) => {
  const results = () => quiz.results.map(result => <ResultView key={result.id} type={result.type} title={result.title} description={result.description}/>)

  return(
      <div className='results'>
        {results()}
      </div>
  )
}


export default class Quiz extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      quiz : [],
    };
  }

    updateQuiz(id) {
      this.setState({id})
    }

    componentDidMount() {
    axios
    .get('https://quiz-json.herokuapp.com/quiz')
    .then(response => {
      this.setState({quiz : response.data})
    })
  }
  
  //called when submit is pressed
  handleSubmit = (event) => {
    event.preventDefault()
    this.CalculateResult(document.getElementById('form'))
  }

  //function to calculate the final result from user input i.e. which option (a-d) the user selected the most
  CalculateResult(form) {
    var aResults = 0;
    var bResults = 0;
    var cResults = 0;
    var dResults = 0;

    for (var i = 0; i < form.elements.length; i++ ) {
      if (form.elements[i].type === 'radio') {
        if (form.elements[i].checked === true) {
          console.log(i + '. checked')
          switch(form.elements[i].value) {
            case "a":
              aResults += 1;
              console.log("a:" + aResults)
              break;
            case "b":
              bResults += 1;
              console.log("b:" + bResults)
              break;
            case "c":
              cResults += 1;
              console.log("c:" + cResults)
              break;
            case "d":
              dResults += 1;
              console.log("d:" + dResults)
              break;
            default:
              console.log('no value found')
          }
        }
      }
    }

    //set the right result and the comments visible
    if (aResults === Math.max(aResults, bResults, cResults, dResults)) {
      document.getElementById('a').style.visibility = "visible"
      document.getElementById('b').style.visibility = "hidden"
      document.getElementById('c').style.visibility = "hidden"
      document.getElementById('d').style.visibility = "hidden"
      document.getElementById('comments').style.visibility = "visible"
    } else if (bResults === Math.max(aResults, bResults, cResults, dResults)) {
      document.getElementById('a').style.visibility = "hidden"
      document.getElementById('b').style.visibility = "visible"
      document.getElementById('c').style.visibility = "hidden"
      document.getElementById('d').style.visibility = "hidden"
      document.getElementById('comments').style.visibility = "visible"
    } else if (cResults === Math.max(aResults, bResults, cResults, dResults)) {
      document.getElementById('a').style.visibility = "hidden"
      document.getElementById('b').style.visibility = "hidden"
      document.getElementById('c').style.visibility = "visible"
      document.getElementById('d').style.visibility = "hidden"
      document.getElementById('comments').style.visibility = "visible"
    } else {
      document.getElementById('a').style.visibility = "hidden"
      document.getElementById('b').style.visibility = "hidden"
      document.getElementById('c').style.visibility = "hidden"
      document.getElementById('d').style.visibility = "visible"
      document.getElementById('comments').style.visibility = "visible"
    }

  }

  render() {
    return(
      <div>
        <div id='quizzes' className='quizzes'>
        {this.state.quiz.map(quiz => 
          <div key={quiz.id}> 
            <button className='quizselection' onClick={(id) => this.updateQuiz(quiz.id)}> 
              {quiz.name} 
            </button> 
          </div>)}
        </div>
        <form id='form' onSubmit={this.handleSubmit}>
          <div>
            {this.state.quiz.filter(quiz => quiz.id === this.state.id).map(quiz => 
              <div key={quiz.id}>
                <h1 className='quiz-title'>
                  {quiz.name}
                </h1>
                <div>
                  <Questions quiz={quiz}/>
                </div>
                <div>
                  <button className='submit-button'> Submit </button>
                </div>
              </div>)
              }
          </div>
        </form>
        <div className='finalResult'>
            {this.state.quiz
            .filter(quiz => quiz.id === this.state.id)
            .map(quiz => 
              <div id='afterquiz' className='afterquiz' key={quiz.id}>
                <div>
                  <Results quiz={quiz} />
                </div>
                <div className='comments' id='comments'>
                  <CommentSection id={quiz.id}/>
                </div>
              </div>)}
          </div>
      </div>
    )
  }
}
