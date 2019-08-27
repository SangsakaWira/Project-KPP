import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
 
class UiVideo extends Component {

render(){
    return(
        <AUX>
            <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h4 className="page-title">Video</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">UI Elements</Link></li>
                                <li className="breadcrumb-item active">Video</li>
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
                                <h4 className="mt-0 header-title">Responsive embed video 16:9</h4>
                                <p className="text-muted m-b-30">Aspect ratios can be customized with modifier classNamees.</p>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Responsive embed video 21:9</h4>
                                <p className="text-muted m-b-30">Aspect ratios can be customized with modifier classNamees.</p>

                                <div className="embed-responsive embed-responsive-21by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Responsive embed video 4:3</h4>
                                <p className="text-muted m-b-30">Aspect ratios can be customized with modifier classNamees.</p>
                                <div className="embed-responsive embed-responsive-3by4">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Responsive embed video 1:1</h4>
                                <p className="text-muted m-b-30">Aspect ratios can be customized with modifier classNamees.</p>
                                <div className="embed-responsive embed-responsive-1by1">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
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

export default UiVideo;   