import React, { Component } from 'react'

export default class NoteCard extends Component {
    render() {
        return (
            <div className="alert alert-success">
                {this.props.children}
            </div>
        )
    }
}