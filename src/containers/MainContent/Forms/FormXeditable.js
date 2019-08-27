import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import Editable from 'react-x-editable';

 
class FormXeditable extends Component{
  
render(){
    return(
        <AUX>
         <div className="container-fluid">
            <div className="page-title-box">
                <div className="row align-items-center">

                    <div className="col-sm-6">
                        <h4 className="page-title">Form Xeditable</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                            <li className="breadcrumb-item active">Form Xeditable</li>
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

                            <h4 className="mt-0 header-title">Inline Example</h4>
                            <p className="text-muted m-b-30">This library allows you to create
                                editable elements on your page. It can be used with any engine
                                (bootstrap, jquery-ui, jquery only) and includes both popup and inline
                                modes. Please try out demo to see how it works.</p>


                            <table className="table table-striped mb-0">
                                <thead>
                                <tr>
                                    <th style={{width: "50%"}}>Inline</th>
                                    <th>Examples</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Simple Text Field</td>
                                    <td>
                                      <Editable
                                        name="username"
                                        dataType="text"
                                        mode="inline"
                                        title="Please enter username"
                                        value="superuser"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td> Empty text field, required</td>
                                    <td>
                                      <Editable
                                        name="username"
                                        dataType="text"
                                        mode="inline"
                                        title="Please enter username" 
                                        validate={(value) => {
                                            if(!value){
                                              return 'Required';
                                            }
                                          }}
                                          value="Empty"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Select, local array, custom display</td>
                                    <td>
                                      <Editable
                                        name="city"
                                        dataType="select"
                                        mode="inline"
                                        title="Select City"
                                        options={[
                                            { value: 1, text: "Mumbai" },
                                            { value: 2, text: "Pune" },
                                            { value: 3, text: "Nashik" }
                                          ]}
                                          value="Not Selected"
                                        />
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td>Select, error while loading</td>
                                    <td>
                                      <Editable
                                        name="username"
                                        dataType="text"
                                        mode="inline"
                                      />
                                    </td>
                                </tr> */}
                                <tr>
                                    <td>Combodate</td>
                                    <td>
                                      <Editable
                                        name="username"
                                        dataType="date"
                                        mode="inline"
                                        title="Please enter username"      
                                        value="2018-05-09"
                                      />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Textarea, buttons below. Submit by ctrl+enter</td>
                                    <td>
                                      <Editable
                                        dataType="textarea"
                                        mode="inline"
                                        title="Please enter username" 
                                        value="Awesome User"
                                      />
                                    </td>
                                </tr>
                              
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> 
              </div> 
            </div>
        </AUX>
    );
    }
}

export default FormXeditable;   