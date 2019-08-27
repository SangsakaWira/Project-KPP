import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import * as actionTypes from '../../../store/action';
import { connect } from 'react-redux';


class PagesLogin2 extends Component{

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
                    <Link to="/" className="text-white"><i className="fas fa-home h2"></i></Link>
                </div>
                
                <div className="accountbg"></div>

                <div className="wrapper-page account-page-full">

                    <div className="card">
                        <div className="card-body">

                            <div className="text-center">
                                <Link to="/" className="logo"><img src="assets/images/logo-dark.png" height="22" alt="logo" /></Link>
                            </div>

                            <div className="p-3">
                                <h4 className="font-18 m-b-5 text-center">Welcome Back !</h4>
                                <p className="text-muted text-center">Sign in to continue to Veltrix.</p>

                                <form className="form-horizontal m-t-30" action="/">

                                    <div className="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                    </div>

                                    <div className="form-group">
                                        <label for="userpassword">Password</label>
                                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                    </div>

                                    <div className="form-group row m-t-20">
                                        <div className="col-sm-6">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                <label className="custom-control-label" for="customControlInline">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                        </div>
                                    </div>

                                    <div className="form-group m-t-10 mb-0 row">
                                        <div className="col-12 m-t-20">
                                            <Link to="pages-recoverpw-2"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="m-t-40 text-center">
                        <p>Don't have an account ? <Link to="pages-register-2" className="font-500 text-primary"> Signup now </Link> </p>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(PagesLogin2);
