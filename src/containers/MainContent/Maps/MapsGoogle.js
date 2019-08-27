import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import GoogleMap from '../../MapsTypes/Googlemap/Mapcontainer';

class MapsGoogle extends Component{
 
render(){
    return(
            <AUX>
                <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                
                        <div className="col-sm-6">
                            <h4 className="page-title">Google Map</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Maps</Link></li>
                                <li className="breadcrumb-item active">Google Map</li>
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

                                <h4 className="mt-0 header-title">Markers</h4>
                                <p className="text-muted m-b-30">Example of google maps.</p>

                                <div id="gmaps-markers" className="gmaps"> 
                                  <GoogleMap />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Overlays</h4>
                                <p className="text-muted m-b-30">Example of google maps.</p>

                                <div id="gmaps-overlay" className="gmaps">    
                                  <GoogleMap />
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Street View Panoramas</h4>
                                <p className="text-muted m-b-30">Example of google maps.</p>

                                <div id="panorama" className="gmaps-panaroma">    
                                  <GoogleMap />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Map Types</h4>
                                <p className="text-muted m-b-30">Example of google maps.</p>

                                <div id="gmaps-types" className="gmaps">    
                                  <GoogleMap />
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

export default MapsGoogle;   