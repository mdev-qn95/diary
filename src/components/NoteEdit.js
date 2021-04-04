import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateNote } from '../actions/notesAction'

class NoteEdit extends Component {

    constructor(props) {
        super(props)
        // state
        this.state = {
            title: this.props.note.title,
            content: this.props.note.content
        }
        // bind
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
            uid: this.props.uid
        }
        this.props.updateNote(this.props.match.params.id, note)
        this.setState({
            title: '',
            content: ''
        })
        this.props.history.push('/')
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
                                <button className="btn btn-primary col-sm-12">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        note: state.notes[ownProps.match.params.id],
        uid: state.user.uid
    }
}

export default connect(mapStateToProps, { updateNote })(NoteEdit);