import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NoteEdit extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>note edit page</h2>
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

export default connect(mapStateToProps)(NoteEdit);