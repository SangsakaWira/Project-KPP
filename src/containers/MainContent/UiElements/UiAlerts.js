import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
 
class UiAlerts extends Component{

render(){
    return(
        <AUX>
            <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h4 className="page-title">Alerts</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                <li className="breadcrumb-item active">Alerts</li>
                            </ol>
                        </div>
                        <div className="col-sm-6">
                           <Settings />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Examples</h4>
                                <p className="text-muted m-b-30 ">Alerts are available for any length of
                                    text, as well as an optional dismiss button. For proper styling, use one
                                    of the four <strong>required</strong> contextual classNamees (e.g., <code
                                            className="highlighter-rouge">.alert-success</code>). For inline
                                    dismissal, use the alerts jQuery plugin.</p>

                                <div className="">
                                    <div className="alert alert-success" role="alert">
                                        <strong>Well done!</strong> You successfully read this important alert message.
                                    </div>
                                    <div className="alert alert-info" role="alert">
                                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                    </div>
                                    <div className="alert alert-warning" role="alert">
                                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                    </div>
                                    <div className="alert alert-danger mb-0" role="alert">
                                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Link color</h4>
                                <p className="text-muted m-b-30 ">Use the <code
                                        className="highlighter-rouge">.alert-link</code> utility className to
                                    quickly provide matching colored links within any alert.</p>

                                <div className="">
                                    <div className="alert alert-success" role="alert">
                                        <strong>Well done!</strong> You successfully read <Link to="#" className="alert-link">this important alert message</Link>.
                                    </div>
                                    <div className="alert alert-info" role="alert">
                                        <strong>Heads up!</strong> This <Link to="#" className="alert-link">alert needs your attention</Link>, but it's not super important.
                                    </div>
                                    <div className="alert alert-warning" role="alert">
                                        <strong>Warning!</strong> Better check yourself, you're <Link to="#" className="alert-link">not looking too good</Link>.
                                    </div>
                                    <div className="alert alert-danger mb-0" role="alert">
                                        <strong>Oh snap!</strong> <Link to="#" className="alert-link">Change a few things up</Link> and try submitting again.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Dismissing</h4>
                                <p className="text-muted m-b-30 ">You can see this in action with a live demo:</p>

                                <div className="">
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <strong>Well done!</strong> You successfully read this important alert message.
                                    </div>
                                    <div className="alert alert-info alert-dismissible fade show" role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                    </div>
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                    </div>
                                    <div className="alert alert-danger alert-dismissible fade show mb-0" role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Additional content</h4>
                                <p className="text-muted m-b-30 ">Alerts can also contain additional HTML elements like headings and paragraphs.</p>

                                <div className="">
                                    <div className="alert alert-success mb-0" role="alert">
                                        <h4 className="alert-heading font-18">Well done!</h4>
                                        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Examples</h4>
                                <p className="text-muted m-b-30 ">Alerts are available for any length of
                                    text, as well as an optional dismiss button. For proper styling, use one
                                    of the four <strong>required</strong> contextual classNamees (e.g., <code
                                            className="highlighter-rouge">.alert-success .bg-**</code>). For inline
                                    dismissal, use the alerts jQuery plugin.</p>

                                <div className="">
                                    <div className="alert alert-success bg-success text-white" role="alert">
                                        <strong>Well done!</strong> You successfully read this important alert message.
                                    </div>
                                    <div className="alert alert-info bg-info text-white" role="alert">
                                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                    </div>
                                    <div className="alert alert-warning bg-warning text-white" role="alert">
                                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                    </div>
                                    <div className="alert alert-danger bg-danger text-white mb-0" role="alert">
                                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
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

export default UiAlerts;   