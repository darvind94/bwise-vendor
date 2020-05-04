import React, { Component } from 'react';

class Schools extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }


    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-sm-5 login-left hidden-sm hidden-xs">
                            {/* <h1>Welcome to B'Wise</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                            <div className="img-wrap"></div>
                        </div>
                        <div className="col-md-7 col-sm-12 login-right">
                            <div className="login-wrap">
                                <div className="nav-brand"><h1>B'Wise</h1></div>
                                <p className="lead">Login</p>
                                <div className="alert-wrap hide"><p>Email Id & Password does not match</p></div>
                                <form className="login-form" action="#">
                                    <div className="form-group">
                                        <input type="text" name="username" className="form-control" placeholder="Email Id" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Password" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn login-btn">Login</button>
                                        <a href="#" className="forgot-pass">Forgot Password?</a>
                                    </div>
                                    <div className="form-group" style={{marginTop:'100px'}}>
                                        <p className="have-account">Dont Have an Account? <a href="/register" >Sign Up Here</a></p>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Schools;