import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron" style={{marginTop: '-20px'}}>
                        <h1>Login with your favorite <b>Social Network</b></h1>
                    </div>

                    <div className="col-sm-6">
                        <button class="btn btn-danger btn-lg">Login with Google</button>
                    </div>
                    <br />
                    <div className="col-sm-6">
                        <button class="btn btn-primary btn-lg">Login with Facebook</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login