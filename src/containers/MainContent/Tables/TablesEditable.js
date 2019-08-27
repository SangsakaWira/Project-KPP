import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import Editable from 'react-x-editable';

class TablesEditable extends Component{
 
render(){
    return(
            <AUX>
                <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">

                            <div className="col-sm-6">
                                <h4 className="page-title">Editable Table</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Tables</Link></li>
                                    <li className="breadcrumb-item active">Editable Table</li>
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

                                    <h4 className="mt-0 header-title mb-4">Datatable Editable</h4>

                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                <th>ID</th>
                                                <th>Age (AutoFill)</th>
                                                <th>Qty (AutoFill and Editable)</th>
                                                <th>Cost (Editable)</th>
                                                </tr>
                                            </thead>
                                            <tr>
                                                <td>1</td>
                                                <td data-original-value="11">11</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="1"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="1.99"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td data-original-value="22">22</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="2"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="2.99"
                                                    />
                                                </td>
                                              </tr>
                                            <tr>
                                                <td>3</td>
                                                <td data-original-value="33">33</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="3"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="3.99"
                                                    />
                                                </td>
                                                 </tr>
                                            <tr>
                                                <td>4</td>
                                                <td data-original-value="44">44</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="4"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="4.99"
                                                    />
                                                </td>
                                               </tr>
                                            <tr>
                                                <td>5</td>
                                                <td data-original-value="55">55</td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="5"
                                                    />
                                                </td>
                                                <td>
                                                <Editable
                                                    dataType="text"
                                                    mode="inline"
                                                    value="5.99"
                                                    />
                                                </td>
                                                </tr>
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

export default TablesEditable;   