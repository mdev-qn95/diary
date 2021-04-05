import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getNotes, saveNote, deleteNote } from '../actions/notesAction'
import NoteCard from '../components/NoteCard'
import { getUser } from '../actions/userAction'
import { Link } from 'react-router-dom';

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
      uid: this.props.user.uid
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
          <Link to={`/${key}`}>
            <h4>{note.title}</h4>
          </Link>
          <hr />
          <p>{note.content}</p>
          <br />
          {note.uid === this.props.user.uid && (
            <div>
              <button className="btn btn-danger btn-sm" onClick={() => this.props.deleteNote(key)}>Delete</button>
              <button className="btn btn-primary btn-sm" style={{ marginLeft: '5px' }}>
                <Link to={`/${key}/edit`}>Update</Link>
              </button>
            </div>
          )}
        </NoteCard>
      )
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-sm-4 col-xs-12 text-center">
            <img src={this.props.user.photoURL} className="img img-responsive img-circle" style={{ padding: '20px', height: '140px' }} />
            <h4 className="username">Wellcome back {this.props.user.displayName}</h4>
          </div>
          <div className="col-sm-8 col-xs-12">
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
            <br />
            <br />
            <br />
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
