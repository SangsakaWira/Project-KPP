import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class EmailTemplateBilling extends Component{
 
render(){
    return(
            <AUX>
                 <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                        
                                <div className="col-sm-6">
                                    <h4 className="page-title">Billing Email</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Email Templates</Link></li>
                                        <li className="breadcrumb-item active">Billing Email</li>
                                    </ol>
                        
                                </div>
                                <div className="col-sm-6">
                        
                                    <Settings />
                        
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <table className="body-wrap" id="body_table" bgcolor="#f6f6f6">
                                <tbody>
                                    <tr id="table_tr">
                                        <td id="table_td" ></td>
                                        <td className="container" width="600" id="cont_td" >
                                            <div className="content" id="table_cont1">
                                                <table className="main" width="100%"  id="uniq">
                                                    <tbody>
                                                    <tr id="table_tr">
                                                        <td className="content-wrap aligncenter" id="table_inr" align="center" >
                                                            <table width="100%" id="table_tr">
                                                            <tbody>
                                                                <tr id="table_tr">
                                                                    <td className="content-block" id="table_head_td" >
                                                                        <h2 className="aligncenter" id="table_head" align="center">Thanks for using <b id="font-weight: 600;">VELTRIX</b>.</h2>
                                                                    </td>
                                                                </tr>
                                                                <tr id="table_tr">
                                                                    <td className="content-block aligncenter" id="table_in2" align="center" >
                                                                        <table className="invoice" id="table_invoice">
                                                                          <tbody>
                                                                            <tr id="table_tr">
                                                                                <td id="table_tr2" ><b>Company Name</b>
                                                                                    <br id="table_tr" />Invoice #6521
                                                                                    <br id="table_tr" />August 01 2017
                                                                                </td>
                                                                            </tr>
                                                                            <tr id="table_tr">
                                                                                <td id="table_tr2" >
                                                                                    <table className="invoice-items"  id="table_in">
                                                                                         <tbody>
                                                                                        <tr id="table_tr">
                                                                                            <td id="table_tr1" >BS-200 (1 Pc)
                                                                                            </td>
                                                                                            <td className="alignright" id="bottom1" align="right" >$10.99
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr id="table_tr">
                                                                                            <td id="table_tr1" >BS-400 (2 Pcs)
                                                                                            </td>
                                                                                            <td className="alignright" id="bottom1" align="right" >$60.00
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr id="table_tr">
                                                                                            <td id="table_tr1" >BS-1000 (1 Pc)
                                                                                            </td>
                                                                                            <td className="alignright" id="bottom1" align="right" >$600.00
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr className="total" id="table_tr">
                                                                                            <td className="alignright"  id="unk2" >Total
                                                                                            </td>
                                                                                            <td className="alignright" id="unk3" >$670.99
                                                                                            </td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr id="table_tr">
                                                                    <td className="content-block aligncenter" id="table_in2" align="center" >
                                                                        Veltrix Inc. 2896 Howell Rd, Russellville, AR, 72823
                                                                    </td>
                                                                </tr>

                                                                <tr id="table_tr">
                                                                    <td className="content-block" id="bottom_td" >
                                                                        © {new Date().getFullYear()} Veltrix
                                                                    </td>
                                                                </tr>
                                                               </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                   </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </AUX>
        );
    }
}

export default EmailTemplateBilling;   