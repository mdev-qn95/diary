import React, { Component } from 'react'
import { connect } from 'react-redux'
import { googleLogin, facebookLogin } from '../actions/userAction'

class Login extends Component {

    componentWillMount() {
        if (this.props.user !== null) {
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== null) {
            nextProps.history.push('/')
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
                        <h1>Login with your favorite <b>Social Network</b></h1>
                    </div>

                    <div className="col-sm-6">
                        <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>Login with Google</button>
                    </div>
                    <br />
                    <div className="col-sm-6">
                        <button className="btn btn-primary btn-lg" onClick={this.props.facebookLogin}>Login with Facebook</button>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state, onwProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { googleLogin, facebookLogin })(Login)