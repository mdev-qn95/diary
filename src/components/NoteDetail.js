import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SubmitComment from '../components/SubmitComment'
import _ from 'lodash'
import Comment from '../components/Comment'

class NoteDetail extends Component {

    renderComments() {
        const { note } = this.props
        return _.map(note.comments, (comment, key) => {
            return <Comment key={key} id={key}>{comment.commentContent}</Comment>
        })
    }
    render() {
        const { note } = this.props
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>{note.title}</h1>
                        <p>{note.content}</p>
                        <SubmitComment id={this.props.match.params.id} />
                        {this.renderComments()}
                        <br />
                        <Link to="/"> &#171; Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        note: state.notes[ownProps.match.params.id],
        uid: state.user.uid
    }
}

export default connect(mapStateToProps)(NoteDetail);