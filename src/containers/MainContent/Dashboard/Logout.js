import React , {Component } from 'react';

import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';

class Logout extends Component{
 
    constructor(props){
        super(props)
        this.state ={
            alat:[]
        }
        
    }

render(){
      
    return(
            <AUX>
                <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h4 className="page-title">Logout</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Anda yakin ingin Logout sebelum meminjam alat? Silahkan tekan tombol <a>Link Ini</a></li>
                            </ol>
                        </div>
                        
                    </div>
                </div>
                </div>
            </AUX>
        );
    }
}

export default Logout;   