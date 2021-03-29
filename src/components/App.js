import React, { Component } from 'react'
import { database } from '../firebase'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getNotes, saveNote } from '../actions/notesAction'

class App extends Component {

  constructor(props) {
    super(props)
    // state
    this.state = {
      title: '',
      content: '',
      notes: {}
    }
    // bind
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderNotes = this.renderNotes.bind(this)
  }

  // lifecycle
  componentDidMount() {
    this.props.getNotes()
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
    }
    this.props.saveNote()
    this.setState({
      title: '',
      content: ''
    })
  }

  // render notes
  renderNotes() {
    return _.map(this.state.notes, (note, key) => {
      return (
        <div key="key">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">{note.title}</h4>
            <hr />
            <p>{note.content}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input onChange={this.handleChange} value={this.state.title} type="text" name="title" className="form-control no-border" placeholder="Title..." required />
              </div>

              <div className="form-group">
                <textarea onChange={this.handleChange} value={this.state.content} type="text" name="content" className="form-control no-border" placeholder="Content..." required />
              </div>

              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>

            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes, saveNote })(App);
