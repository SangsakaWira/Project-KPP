import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class PagesPricing extends Component{
 
render(){
    return(
            <AUX>

            <div className="container-fluid">
            <div className="page-title-box">
                <div className="row align-items-center">

                    <div className="col-sm-6">
                        <h4 className="page-title">Pricing</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                            <li className="breadcrumb-item active">Pricing</li>
                        </ol>

                    </div>
                    <div className="col-sm-6">
                      <Settings />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card pricing-box">
                        <div className="card-body">
                            <div className="mb-4 pt-3 pb-3">
                                <div className="pricing-icon float-left">
                                    <i className="ion ion-ios-airplane"></i>
                                </div>
                                <div className="text-right">
                                    <h5 className="mt-0">Starter</h5>
                                    <p className="text-muted">Sed ut neque unde</p>
                                </div>
                            </div>
                            <div className="pricing-features mb-4">
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Free Live Support</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Unlimited User</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> No Time Tracking</p>
                                <p><i className="mdi mdi-close text-primary mr-2"></i> Free Setup</p>
                            </div>
                            <div className="text-center pt-3 pb-3">
                                <h2><sup><small>$</small></sup>19/<span className="font-16">Per month</span></h2>
                            </div>
                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card pricing-box">
                        <div className="card-body">
                            <div className="mb-4 pt-3 pb-3">
                                <div className="pricing-icon float-left">
                                    <i className="ion ion-ios-trophy"></i>
                                </div>
                                <div className="text-right">
                                    <h5 className="mt-0">Professional</h5>
                                    <p className="text-muted">Sed ut neque unde</p>
                                </div>
                            </div>
                            <div className="pricing-features mb-4">
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Free Live Support</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Unlimited User</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> No Time Tracking</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Free Setup</p>
                            </div>
                            <div className="text-center pt-3 pb-3">
                                <h2><sup><small>$</small></sup>29/<span className="font-16">Per month</span></h2>
                            </div>
                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card pricing-box">
                        <div className="card-body">
                            <div className="mb-4 pt-3 pb-3">
                                <div className="pricing-icon float-left">
                                    <i className="ion ion-ios-umbrella"></i>
                                </div>
                                <div className="text-right">
                                    <h5 className="mt-0">Enterprise</h5>
                                    <p className="text-muted">Sed ut neque unde</p>
                                </div>
                            </div>
                            <div className="pricing-features mb-4">
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Free Live Support</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Unlimited User</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> No Time Tracking</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Free Setup</p>
                            </div>
                            <div className="text-center pt-3 pb-3">
                                <h2><sup><small>$</small></sup>39/<span className="font-16">Per month</span></h2>
                            </div>
                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card pricing-box">
                        <div className="card-body">
                            <div className="mb-4 pt-3 pb-3">
                                <div className="pricing-icon float-left">
                                    <i className="ion ion-ios-cube"></i>
                                </div>
                                <div className="text-right">
                                    <h5 className="mt-0">Unlimited</h5>
                                    <p className="text-muted">Sed ut neque unde</p>
                                </div>
                            </div>
                            <div className="pricing-features mb-4">
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Free Live Support</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Unlimited User</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> No Time Tracking</p>
                                <p><i className="mdi mdi-check text-primary mr-2"></i> Free Setup</p>
                            </div>
                            <div className="text-center pt-3 pb-3">
                                <h2><sup><small>$</small></sup>49/<span className="font-16">Per month</span></h2>
                            </div>
                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary btn-block waves-effect waves-light">Sign up Now</Link>
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

export default PagesPricing;   