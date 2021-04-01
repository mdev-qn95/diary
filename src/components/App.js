import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getNotes, saveNote, deleteNote } from '../actions/notesAction'
import NoteCard from '../components/NoteCard'
import { getUser } from '../actions/userAction'

class App extends Component {

  constructor(props) {
    super(props)
    // state
    this.state = {
      title: '',
      content: ''
    }
    // bind
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderNotes = this.renderNotes.bind(this)
  }

  // lifecycle
  // componentDidMount() {
  //   this.props.getNotes()
  //   this.props.getUser()
  // }

  // handle change
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handle submit
  handleSubmit(e) {
    e.preventDefault()
    const note = {
      title: this.state.title,
      content: this.state.content,
    }
    this.props.saveNote(note)
    this.setState({
      title: '',
      content: ''
    })
  }

  // render notes
  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <button className="close" onClick={() => this.props.deleteNote(key)}>&times;</button>
          <h4>{note.title}</h4>
          <hr />
          <p>{note.content}</p>
        </NoteCard>
      )
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-sm-5 col-xs-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input onChange={this.handleChange} value={this.state.title} type="text" name="title" className="form-control no-border" placeholder="Title..." required />
              </div>

              <div className="form-group">
                <textarea onChange={this.handleChange} value={this.state.content} type="text" name="content" rows="15" className="form-control no-border" placeholder="Content..." required />
              </div>

              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
          </div>
          <div className="col-sm-7 col-xs-12">
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
  }
}

export default connect(mapStateToProps, { getNotes, saveNote, deleteNote, getUser })(App);
