import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class PagesBlank extends Component{
 
render(){
    return(
            <AUX>
           <div className="container-fluid">
            <div className="page-title-box">
                <div className="row align-items-center">

                    <div className="col-sm-6">
                        <h4 className="page-title">Blank page</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                            <li className="breadcrumb-item active">Blank page</li>
                        </ol>
                    </div>

                    <div className="col-sm-6">
                        <Settings />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <p>Your content here</p>
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

export default PagesBlank;   