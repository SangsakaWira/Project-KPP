import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class EmailTemplateAlert extends Component{
 
render(){
    return(
            <AUX>
               <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                
                        <div className="col-sm-6">
                            <h4 className="page-title">Alert Email</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Email Templates</Link></li>
                                <li className="breadcrumb-item active">Alert Email</li>
                            </ol>
                
                        </div>
                        <div className="col-sm-6">
                            <Settings />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <table className="body-wrap" id="body_table">
                            <tbody>
                            <tr id="table_tr">
                                <td  id="table_td"></td>
                                <td className="container"  id="cont_td">
                                    <div className="content" id="con_div" >
                                        <table className="main"  id="inner_table" >
                                           <tbody>
                                           
                                            <tr id="inner_tr">
                                                <td className="alert alert-warning" id="inner_td" >
                                                    Warning: You're approaching your limit. Please upgrade.
                                                </td>
                                            </tr>

                                            <tr id="inner_tr">
                                                <td className="content-wrap" id="inner_td1" >
                                                    <table  id="table_tr"  >
                                                    <tbody>
                                                        <tr id="table_tr">
                                                            <td className="content-block" id="inner1_td">
                                                                You have <strong id="table_tr"><span id="span_table">1
                                                                            free report</span></strong> remaining.
                                                            </td>
                                                        </tr>
                                                        <tr id="inner_tr">
                                                            <td className="content-block" id="inner1_td">
                                                                Add your credit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports.
                                                            </td>
                                                        </tr>
                                                        <tr id="inner_tr">
                                                            <td className="content-block" id="inner1_td" >
                                                                <Link to="#" className="btn-primary" id="upgr_td">Upgrade
                                                                    my account</Link>
                                                            </td>
                                                        </tr>
                                                        <tr id="inner_tr">
                                                            <td className="content-block" id="inner1_td" >
                                                                Thanks for choosing <b>Veltrix</b> Admin.
                                                            </td>
                                                        </tr>
                                                        <tr id="inner_tr">
                                                            <td className="content-block" id="inner1_td" >
                                                                <b>Veltrix</b>
                                                                <p>Support Team</p>
                                                            </td>
                                                        </tr>

                                                        <tr id="inner_tr">
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

export default EmailTemplateAlert;   