import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveComment } from '../actions/notesAction'

class SubmitComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            commentContent: ''
        }
        // bind
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            commentContent: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const comment = {
            commentContent: this.state.commentContent,
            uid: this.props.uid
        }
        this.props.saveComment(this.props.id, comment)
        this.setState({ commentContent: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea
                            onChange={this.handleChange}
                            value={this.state.commentContent}
                            type="text"
                            name="commentContent"
                            className="form-control no-border"
                            placeholder="Write comment..." required />
                    </div>
                    <div className="form-group">
                        <button className="ant-btn ant-btn-primary ant-btn-round col-sm-12">Add comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        uid: state.user.uid
    }
}

export default connect(mapStateToProps, { saveComment })(SubmitComment)