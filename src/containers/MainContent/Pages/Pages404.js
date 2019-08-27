import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';

class Pages404 extends Component{

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
         <div className="ex-pages">
            <div className="content-center">
                <div className="content-desc-center">
                    <div className="container">
                        <div className="card mo-mt-2">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 offset-lg-1">
                                        <div className="ex-page-content">
                                            <h1 className="text-dark">404!</h1>
                                            <h4 className="mb-4">Sorry, page not found</h4>
                                            <p className="mb-5">It will be as simple as Occidental in fact, it will be Occidental to an English person</p>
                                            <Link className="btn btn-primary mb-5 waves-effect waves-light" onClick={()=> this.props.UpdateLoginAgain()} to="/"><i className="mdi mdi-home"></i> Back to Dashboard</Link>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-5 offset-lg-1">
                                        <img src="assets/images/error.png" alt="veltrix" className="img-fluid mx-auto d-block" />
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Pages404);
