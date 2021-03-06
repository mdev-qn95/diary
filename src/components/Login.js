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
                <div className="row">
                    <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
                        <h1>
                            DIARY | {new Date().getFullYear()}
                        </h1>
                        <h2>
                            Login with your favorite <b>Social Network</b> to start writting!
                        </h2>
                    </div>

                    <div className="col-sm-6 text-center">
                        <button className="ant-btn ant-btn-primary ant-btn-round ant-btn-dangerous button-acc col-sm-12 col-xs-6" onClick={this.props.googleLogin}>Login with Google</button>
                    </div>
                    <div className="col-sm-6 text-center">
                        <button className="ant-btn ant-btn-primary ant-btn-round button-acc col-sm-12 col-xs-6" onClick={this.props.facebookLogin}>Login with Facebook</button>
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