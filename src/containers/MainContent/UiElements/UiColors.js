import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
 
class UiColors extends Component {

render(){
    return(
        <AUX>
              <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                
                        <div className="col-sm-6">
                            <h4 className="page-title">Colors</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                <li className="breadcrumb-item active">Colors</li>
                            </ol>
                        </div>
                        <div className="col-sm-6">
                           <Settings />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="color-box bg-primary">
                                    #3c4ccf
                                </div>
                                <h5 className="mb-0 m-t-20 text-primary text-center font-18">Primary</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="color-box bg-success">
                                    #02a499
                                </div>
                                <h5 className="mb-0 m-t-20 text-success text-center font-18">Success</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="color-box bg-info">
                                    #38a4f8
                                </div>
                                <h5 className="mb-0 m-t-20 text-info text-center font-18">Info</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="color-box bg-warning">
                                    #f8b425
                                </div>
                                <h5 className="mb-0 m-t-20 text-warning text-center font-18">Warning</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="color-box bg-danger">
                                    #ec4561
                                </div>
                                <h5 className="mb-0 m-t-20 text-danger text-center font-18">Danger</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="color-box bg-dark">
                                    #343a40
                                </div>
                                <h5 className="mb-0 m-t-20 text-dark text-center font-18">Dark</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="color-box bg-muted">
                                    #9ca8b3
                                </div>
                                <h5 className="mb-0 m-t-20 text-muted text-center font-18">Muted</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AUX>
    );
    }
}

export default UiColors;   