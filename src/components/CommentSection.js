import React from 'react'
import axios from 'axios'
import Comment from './Comment.js'
import './Comments.css'

//display all comments and handle new comments
class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {
                id: 0, 
                nickname: '',
                content: '' 
                }
            ]
        }
    }
  
  
    componentDidMount() {
      axios
        .get('https://quiz-json.herokuapp.com/comments' + this.props.id)
        .then(response => { this.setState({comments: response.data}) })
    }
  
    //called when submit is pressed
    addComment = (event) => {
        event.preventDefault()
    
        const comments = this.state.comments.map(comment => <Comment key={comment.id} nickname={comment.nickname} content={comment.content} />)
        const newComment = {id: comments.length + 1, nickname: this.state.nickname, content: this.state.content}
    
        if(newComment.nickname != null && newComment.content != null) {
            if (newComment.nickname.length !== 0  && newComment.nickname.length !== 0) {
                this.setState({comments: this.state.comments.concat(newComment)})
                axios.post('https://quiz-json.herokuapp.com/comments' + this.props.id, newComment) 
                .then(response => {
                console.log(response)
                })
            }
        } 
    }


    handleNicknameChange = (event) => {
        this.setState({nickname: event.target.value});
    }

    handleContentChange = (event) => {
        this.setState({content: event.target.value});
    }
   
    render() {
      return (
        <div className='commentsection'>
            <div>
                <h2>Comments</h2>
                {this.state.comments.map(comment => <Comment key={comment.id} nickname={comment.nickname} content={comment.content} />)}
            </div>
            <div>
                <form onSubmit = {this.addComment} >
                <h2>Add a new comment!</h2>
                    <div>
                        <label htmlFor='namefield'> nickname: </label>
                        <input id='namefield' type='text' value={this.state.comments.nickname} onChange={this.handleNicknameChange}></input>            
                        <label htmlFor='commentfield'> comment: </label>
                        <input id='commentfield' type='text' value={this.state.comments.content} onChange={this.handleContentChange}></input>
                    </div>
                    <div>
                        <button className='commentbutton' type='submit'>send comment</button>
                    </div>
                </form>
            </div>
        </div>
      )
    }
  
}
  
  export default CommentSection
