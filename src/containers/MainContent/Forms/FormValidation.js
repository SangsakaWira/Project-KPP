import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import { AvForm, AvField, AvCheckbox, AvCheckboxGroup  } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

class FormValidation extends Component{
  
render(){
    return(
        <AUX>
             <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <h4 className="page-title">Form Validation</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                <li className="breadcrumb-item active">Form Validation</li>
                            </ol>
                        </div>
                        <div className="col-sm-6">
                           <Settings />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Validation type</h4>
                                <p className="text-muted m-b-30 ">Parsley is a javascript form validation
                                    library. It helps you provide your users with feedback on their form
                                    submission before sending it to your server.</p>

                                    <AvForm>
                                      <AvField name="username" label="Required : " type="text" errorMessage="Enter Name" validate={{ required: {value: true} }} />
                                      <label>Equal To</label>
                                      <AvField name="password"  type="text" errorMessage="Enter password" validate={{ required: {value: true} }} />
                                       <AvField name="password1"  type="text" errorMessage="Enter Re-password" validate={{ required: {value: true}, match:{value:'password'} }} />
                                      <AvField name="email" label="E-Mail : " type="email" errorMessage="Invalid Email" validate={{ required: {value: true}, email: {value: true} }} />
                                      <AvField name="digits" label="Digits : " type="number" errorMessage="Enter Only Digits" validate={{ required: {value: true}, pattern: {value: '^[0-9]+$', errorMessage: 'Only Digits'} }} />
                                      <AvField name="number" label="Number : " type="number" errorMessage="Enter Only Number" validate={{ required: {value: true}, pattern: {value: '^[0-9]+$', errorMessage: 'Only Numbers'} }} />
                                      <AvField name="alphanumeric" label="Alphanumeric : " type="text" errorMessage="Enter Only Alphanumeric" validate={{ required: {value: true}, pattern: {value: '^[0-9a-zA-Z]+$', errorMessage: 'Only Alphanumeric'} }} />
                                   <Button color="primary">Submit</Button>
                                  </AvForm>

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Range validation</h4>
                                <p className="text-muted m-b-30 ">Parsley is a javascript form validation
                                    library. It helps you provide your users with feedback on their form
                                    submission before sending it to your server.</p>

                                    <AvForm>
                                      <AvField name="Min_Length" label="Min Length : " type="number" errorMessage="Min 6 chars." validate={{ required: {value: true},  minLength: {value: 6, errorMessage: 'Min 6 chars.'} }} />
                                      <AvField name="Max_Length" label="Max Length : " type="number" errorMessage="Max 6 chars." validate={{ required: {value: true},  maxLength: {value: 6, errorMessage: 'Max 6 chars.'} }} />
                                      <AvField name="Min_Value" label="Min Value : "  min={6} type="number" errorMessage="Min Value 6" validate={{ required: {value: true}, min: {value: 6}}} />
                                      <AvField name="Max_Value" label="Max Value : "  max={6} type="number" errorMessage="Max Value 6" validate={{ required: {value: true}, max: {value: 6}}} />
                                      <AvField name="Range_Value" label="Range Value : "  type="number" errorMessage="range between 5 to 10" validate={{ required: {value: true} }} />
                                      <AvField name="Regular_Exp" label="Regular Exp : "  type="number" errorMessage="Hex Value" validate={{ required: {value: true}, pattern: {value: '^[#0-9]+$', errorMessage: 'Only Hex Value'} }} />
                                   <Button color="primary">Submit</Button>
                                  </AvForm>

                            </div>
                        </div>
                    </div> 
                </div> 
             </div>
        </AUX>
    );
    }
}

export default FormValidation;   