import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import Vector from "../../MapsTypes/VectorMaps/vectormap";

class MapsVector extends Component{
 
render(){
    
    return(
            <AUX>
                  <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">

                            <div className="col-sm-6">
                                <h4 className="page-title">Vector Map</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Maps</Link></li>
                                    <li className="breadcrumb-item active">Vector Map</li>
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

                                    <h4 className="mt-0 header-title">World Map</h4>
                                    <p className="text-muted m-b-30">Example of vector map.</p>
        
                                    <div id="world-map-markers" className="vector-map-height"> 
                                     <Vector value="world_mill" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">USA Map</h4>
                                    <p className="text-muted m-b-30">Example of vector map.</p>

                                    <div id="usa" className="vector-map-height"> <Vector value="us_aea" /></div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">UK Map</h4>
                                    <p className="text-muted m-b-30">Example of vector map.</p>

                                    <div id="uk" className="vector-map-height"><Vector value="ch_mill" /></div>

                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Chicago Map</h4>
                                    <p className="text-muted m-b-30">Example of vector map.</p>

                                    <div id="chicago" className="vector-map-height"><Vector value="continents_mill" /></div>

                                </div>
                            </div>
                        </div> 
                    </div> 
                    </div>
                
            </AUX>
        );
    }
}

export default MapsVector;   