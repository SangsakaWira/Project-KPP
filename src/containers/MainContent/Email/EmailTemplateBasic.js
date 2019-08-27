import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class EmailTemplateBasic extends Component{
 
render(){
    return(
            <AUX>
            <div className="container-fluid">

            <div className="page-title-box">
                <div className="row align-items-center">

                    <div className="col-sm-6">
                        <h4 className="page-title">Basic Email</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Email Templates</Link></li>
                            <li className="breadcrumb-item active">Basic Email</li>
                        </ol>

                    </div>
                    <div className="col-sm-6">
                        <Settings />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12" align="center">
                    <table className="body-wrap" id="body_table1">
                    <tbody>
                        <tr id="table_tr">
                        <td id="inner1_td" ></td>
                        <td className="container" id="cont_td">
                            <div className="content" id="inner_table">
                                <table className="main" id="main_table">
                                <tbody>
                                    <tr id="table_tr">
                                        <td className="content-wrap" id="my_uniq">
                                            <table id="table_tr">
                                            <tbody>
                                                <tr id="table_tr">
                                                    <td className="content-block" id="inner1_td">
                                                    </td>
                                                </tr>
                                                <tr id="table_tr">
                                                    <td className="content-block" id="inner1_td">
                                                        We may need to send you critical information about our service and it is important that we have an accurate email address.
                                                    </td>
                                                </tr>
                                                <tr id="table_tr">
                                                    <td className="content-block"  id="inner1_td" >
                                                        <Link to="#" className="btn-primary"  id="email_adr">Confirm
                                                            email address</Link>
                                                    </td>
                                                </tr>
                                                <tr id="table_tr">
                                                    <td className="content-block" id="inner1_td">
                                                        <b>Veltrix</b>
                                                        <p>Support Team</p>
                                                    </td>
                                                </tr>

                                                <tr id="table_tr">
                                                    <td className="content-block" id="bottom_td">
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

export default EmailTemplateBasic;   