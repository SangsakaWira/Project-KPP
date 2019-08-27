import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment';

class PagesComingSoon extends Component{

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
    const dateInFuture = moment('2020-1-31 00:00:00', 'YYYY-MM-DD HH:mm:ss');
    return(
            <AUX>
                <div className="ex-pages">
                    <div className="content-center">
                        <div className="content-desc-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="home-wrapper text-center">
                                            <img src="assets/images/logo-dark.png" alt="logo" height="30" />
                                            <h3 className="m-t-30">Let's get started with Veltrix</h3>
                                            <p className="mb-5">It will be as simple as Occidental in fact it will be Occidental.</p>
            
                                            <div className="coming-watch text-center mb-5">
                                                <div className="countdown">
                                                <div className="lj-countdown-ms">
                                                    <ReactMomentCountDown toDate={dateInFuture} />
                                                    </div>
                                                </div>
                                            </div>
            
                                            <div className="text-center coming-soon-search-form pt-4">
                                                <form action="#">
                                                    <input type="text" placeholder="Enter email address" />
                                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(PagesComingSoon);
