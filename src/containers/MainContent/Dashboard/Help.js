import React , {Component } from 'react';

import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';

class Help extends Component{
 
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
                            <h4 className="page-title">Help</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Pada halaman ini ditunjukkan informasi mengenai penggunaan aplikasi Manajemen Peminjaman Alat Terintegrasi PT. Kalimantan Prima Persada.</li>
                            </ol>
                        </div>
                        
                    </div>
                </div>
                </div>
            </AUX>
        );
    }
}

export default Help;   