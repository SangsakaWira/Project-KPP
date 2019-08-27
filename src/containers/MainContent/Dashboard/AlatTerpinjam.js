import React , {Component } from 'react';

import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';

class AlatTerpinjam extends Component{
 
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
                            <h4 className="page-title">Alat Terpinjam</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Pada halaman ini ditunjukkan semua status alat yang ada di gudang KPP, Jumlah alat, jenis alat dan ID alat ditampilkan pada lists berikut ini.</li>
                            </ol>
                        </div>
                        <div className="col-sm-6">
                        <Settings />
                        </div>
                    </div>
                </div>
                </div>
            </AUX>
        );
    }
}

export default AlatTerpinjam;   