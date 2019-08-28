import React , {Component } from 'react';

import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';

import { Link } from 'react-router-dom';
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
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">Diurutkan berdasarkan barang terpopuler</h4>
                                <div className="table-responsive" style={{textAlign:"center"}}>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Gambar Alat</th>
                                            <th scope="col">Nama Alat</th>
                                            <th scope="col">Jumlah Terpinjam</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Peminjam</th>
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
                                            <td>Masker</td>
                                            <td>20</td>
                                            <td><span className="badge badge-success">Tersedia</span></td>
                                            <td>
                                                <div>
                                                    <p>Siswanto</p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">#14257</th>
                                            <td>
                                                <div>
                                                    <img src="assets/images/users/user-3.jpg" alt="" className="thumb-md rounded-circle mr-2" /> 
                                                </div>
                                            </td>
                                            <td>Gerinda</td>
                                            <td>3</td>
                                            <td><span className="badge badge-warning">Sisa Sedikit</span></td>
                                            <td>
                                                <div>
                                                    <p>Haryono</p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">#14258</th>
                                            <td>
                                                <div>
                                                    <img src="assets/images/users/user-4.jpg" alt="" className="thumb-md rounded-circle mr-2" /> 
                                                </div>
                                            </td>
                                            <td>Kacamata</td>
                                            <td>16</td>
                                            <td><span className="badge badge-success">Tersedia</span></td>
                                            <td>
                                                <div>
                                                   <p>Marhadi</p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">#14259</th>
                                            <td>
                                                <div>
                                                    <img src="assets/images/users/user-5.jpg" alt="" className="thumb-md rounded-circle mr-2" /> 
                                                </div>
                                            </td>
                                            <td>Kompressor</td>
                                            <td>0</td>
                                            <td><span className="badge badge-danger">Kosong</span></td>
                                            <td>
                                                <div>
                                                    <p>Sulaiman</p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row">#14260</th>
                                            <td>
                                                <div>
                                                    <img src="assets/images/users/user-6.jpg" alt="" className="thumb-md rounded-circle mr-2" /> 
                                                </div>
                                            </td>
                                            <td>Gergaji</td>
                                            <td>54</td>
                                            <td><span className="badge badge-success">Tersedia</span></td>
                                            <td>
                                                <div>
                                                    <p>Cahyono</p>
                                                </div>
                                            </td>
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

export default AlatTerpinjam;   