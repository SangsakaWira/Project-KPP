import React , {Component } from 'react';

import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';

import { Link } from 'react-router-dom';

class Peminjam extends Component{
 
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
                            <h4 className="page-title">Peminjam</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Pada halaman ini ditunjukkan semua anggota gudang dan yang memiliki hak untuk meminjam alat melalui aplikasi ini.</li>
                            </ol>
                        </div>
                        <div className="col-sm-6">
                        <Settings />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">Diurutkan berdasarkan barang terpopuler</h4>
                                <div className="table-responsive" style={{textAlign:"center"}}>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col">Nomor Pegawai</th>
                                            <th scope="col">Foto Pegawai</th>
                                            <th scope="col">Nama Pegawai</th>
                                            <th scope="col">Nomor Telpon Pegawai</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">#14256</th>
                                            <td>
                                                <div>
                                                    <img src="assets/images/users/user-2.jpg" alt="" className="thumb-md rounded-circle mr-2" /> 
                                                </div>
                                            </td>
                                            <td>Abhi</td>
                                            <td>087899711232</td>
                                            
                                            </tr>
                                            <tr>
                                            <th scope="row">#14257</th>
                                            <td>
                                                <div>
                                                    <img src="assets/images/users/user-3.jpg" alt="" className="thumb-md rounded-circle mr-2" /> 
                                                </div>
                                            </td>
                                            <td>Achmadi</td>
                                            <td>082189039892</td>
                                            
                                            </tr>
                                            <tr>
                                            <th scope="row">#14258</th>
                                            <td>
                                                <div>
                                                    <img src="assets/images/users/user-4.jpg" alt="" className="thumb-md rounded-circle mr-2" /> 
                                                </div>
                                            </td>
                                            <td>Boris</td>
                                            <td>085734571829</td>
                                            
                                            </tr>
                                            <tr>
                                            <th scope="row">#14259</th>
                                            <td>
                                                <div>
                                                    <img src="assets/images/users/user-5.jpg" alt="" className="thumb-md rounded-circle mr-2" /> 
                                                </div>
                                            </td>
                                            <td>Cahyono</td>
                                            <td>087829382132</td>
                                            
                                            </tr>
                                            <tr>
                                            <th scope="row">#14260</th>
                                            <td>
                                                <div>
                                                    <img src="assets/images/users/user-6.jpg" alt="" className="thumb-md rounded-circle mr-2" /> 
                                                </div>
                                            </td>
                                            <td>Donna</td>
                                            <td>085899736748</td>
                                            
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Peminjam;   