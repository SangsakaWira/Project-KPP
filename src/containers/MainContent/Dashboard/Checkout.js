import React , {Component } from 'react';

import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import Areacharts from '../Chartstypes/Areacharts';
import Piecharts from '../Chartstypes/Piecharts';
import { Sparklines,SparklinesLine  } from 'react-sparklines';
import { Scrollbars } from 'react-custom-scrollbars';

import { Link } from 'react-router-dom';

class Checkout extends Component{
 
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
                                <h4 className="page-title">Checkout</h4>
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
                                            <th scope="col">Nama Alat Dipinjam</th>
                                            <th scope="col">Jumlah Alat Dipinjam</th>
                                            <th scope="col" colSpan="2">Jumlah</th>
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
                                            <td>1</td>
                                            <td>
                                                <div>
                                                    <Link to="#" className="btn btn-danger btn-sm">Kurangi</Link>
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
                                            <td>2</td>
                                              <td>
                                                <div>
                                                    <Link to="#" className="btn btn-danger btn-sm">Kurangi</Link>
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
                                            <td>6</td>
                                            <td>
                                                <div>
                                                    <Link to="#" className="btn btn-danger btn-sm">Kurangi</Link>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th scope="row"></th>
                                            <td>
                                                <div>
                                                    {/* <img src="assets/images/users/user-4.jpg" alt="" className="thumb-md rounded-circle mr-2" />  */}
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div>
                                                    <Link to="#" className="btn btn-primary btn-sm" style={{background:"#2D5713",fontSize:"25px",width:"300px",height:"50px",marginTop:"5%"}}>Pinjam</Link>
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
                <div className="row" style={{float:"right",padding:"19px"}}>
                    
                </div>
                </div>
            </AUX>
        );
    }
}

export default Checkout;   