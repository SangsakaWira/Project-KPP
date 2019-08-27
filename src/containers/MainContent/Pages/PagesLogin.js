import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import { Link } from 'react-router-dom';

class PagesLogin extends Component{

    componentDidMount() {
      if(this.props.loginpage === false)
      {
        this.props.UpdateLogin();
      }
      window.onpopstate  = (e) => {
        this.props.UpdateLoginAgain();
      }
     }

render(){
    return(
            <AUX>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
                </div>
                
                <div className="wrapper-page">
                    <div className="card overflow-hidden account-card mx-3">
                        <div className="bg-primary p-4 text-white text-center position-relative">
                            <h4 className="font-20 m-b-5">Welcome Back !</h4>
                            <p className="text-white-50 mb-4">Sign in to continue to Veltrix.</p>
                            <Link to="/" className="logo logo-admin"><img src="assets/images/logo-sm.png" height="24" alt="logo" /></Link>
                        </div>
                        <div className="account-card-content"> 

                            <form className="form-horizontal m-t-30" action="/">

                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="userpassword">Password</label>
                                    <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                </div>

                                <div className="form-group row m-t-20">
                                    <div className="col-sm-6">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                            <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                    </div>
                                </div>

                                <div className="form-group m-t-10 mb-0 row">
                                    <div className="col-12 m-t-20">
                                        <Link to="pages-recoverpw"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="m-t-40 text-center">
                        <p>Don't have an account ? <Link to="pages-register" className="font-500 text-primary"> Signup now </Link> </p>
                        <p>© {new Date().getFullYear()} Veltrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                    </div>
                </div>
            </AUX>
        );
    }
}

const mapStatetoProps = state => {
    return {
        loginpage: state.ui_red.loginpage
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLogin: () => dispatch({ type: actionTypes.LOGINPAGE, value: true }),
        UpdateLoginAgain: () => dispatch({ type: actionTypes.LOGINPAGE, value: false })
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PagesLogin);
