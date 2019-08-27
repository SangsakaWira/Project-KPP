import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class FormRepeater extends Component{

      constructor(props) {
        super(props);
        this.state = {
            rows: [], rows1: [],
          };
      }
     
      handleAddRow = () => {
        const item = {
          name: ""
        };
        this.setState({
          rows: [...this.state.rows, item]
        });
      };

      handleAddRow1 = () => {
        const item1 = {
          name1: ""
        };
        this.setState({
          rows1: [...this.state.rows1, item1]
        });
      };
      handleRemoveRow = () => {
        this.setState({
          rows: this.state.rows.slice(0, -1)
        });
      };
      handleRemoveRow1 = () => {
        this.setState({
          rows1: this.state.rows1.slice(0, -1)
        });
      };
  
render(){
    return(
        <AUX>
            <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <h4 className="page-title">Form Repeater</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                <li className="breadcrumb-item active">Form Repeater</li>
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
                                <h4 className="mt-0 header-title m-b-20">Example</h4>
                            <table className="table" id="tab_logic">
                             <tbody>
                                <tr id="addr0" key="">
                                    <td>
                                            <form className="repeater" enctype="multipart/form-data">
                                                    <div data-repeater-list="group-a">
                                                        <div data-repeater-item className="row">
                                                            <div  className="form-group col-lg-2">
                                                                <label for="name">Name</label>
                                                                <input type="text" id="name" name="untyped-input" className="form-control" />
                                                            </div>

                                                            <div  className="form-group col-lg-2">
                                                                <label for="email">Email</label>
                                                                <input type="email" id="email" className="form-control" />
                                                            </div>

                                                            <div  className="form-group col-lg-2">
                                                                <label for="subject">Subject</label>
                                                                <input type="text" id="subject" className="form-control" />
                                                            </div>

                                                            <div className="form-group col-lg-3">
                                                                <label for="resume">Resume</label>
                                                                <input type="file" className="form-control-file" id="resume" />
                                                            </div>

                                                            <div className="form-group col-lg-3">
                                                                <label for="message">Message</label>
                                                                <textarea id="message" className="form-control"></textarea>
                                                            </div>     
                                                    </div>
                                                    </div>
                                                </form>
                                    </td>
                                    </tr>


                                {this.state.rows.map((item, idx) => (
                                    <tr id="addr0" key={idx}>
                                    <td>
                                            <form className="repeater" enctype="multipart/form-data">
                                                    <div data-repeater-list="group-a">
                                                        <div data-repeater-item className="row">
                                                            <div  className="form-group col-lg-2">
                                                                <label for="name">Name</label>
                                                                <input type="text" id="name" name="untyped-input" className="form-control" />
                                                            </div>

                                                            <div  className="form-group col-lg-2">
                                                                <label for="email">Email</label>
                                                                <input type="email" id="email" className="form-control" />
                                                            </div>

                                                            <div  className="form-group col-lg-2">
                                                                <label for="subject">Subject</label>
                                                                <input type="text" id="subject" className="form-control" />
                                                            </div>

                                                            <div className="form-group col-lg-3">
                                                                <label for="resume">Resume</label>
                                                                <input type="file" className="form-control-file" id="resume" />
                                                            </div>

                                                            <div className="form-group col-lg-3">
                                                                <label for="message">Message</label>
                                                                <textarea id="message" className="form-control"></textarea>
                                                            </div>     
                                                    </div>
                                                    </div>
                                                </form>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <button onClick={this.handleAddRow} className="btn btn-success mo-mt-2">Add  </button> &nbsp;
                            <button onClick={this.handleRemoveRow} className="btn btn-primary mo-mt-2" >  Delete </button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title m-b-20">Nested</h4>
                                <form className="outer-repeater">
                                    <div data-repeater-list="outer-group" className="outer">
                                        <div data-repeater-item className="outer">
                                            <div className="form-group">
                                                <label for="formname">Name :</label>
                                                <input type="text" className="form-control" id="formname" placeholder="Enter your Name..." />
                                            </div>

                                            <div className="form-group">
                                                <label for="formemail">Email :</label>
                                                <input type="email" className="form-control" id="formemail" placeholder="Enter your Email..." />
                                            </div>

                                            <div className="inner-repeater mb-4">
                                               
                                            <table style={{width:"100%"}}>
                                                {this.state.rows1.map((item1, idx) => (
                                                        <tr id="addr0" key={idx}>
                                                        <td>
                                                            <div className="mb-3 row">
                                                            <div className="col-md-10 col-lg-12">
                                                                <input type="text" className="inner  form-control" placeholder="Enter your phone no..." />
                                                            </div> 
                                                            </div>
                                                        </td>
                                                        </tr>
                                                    ))}
                                                    </table>
                                            <button onClick={this.handleAddRow1} type="button" className="btn btn-success mo-mt-2">Add  </button> &nbsp;
                                            <button onClick={this.handleRemoveRow1} className="btn btn-primary mo-mt-2" >  Delete </button>
                                            </div>

                                            <div className="form-group">
                                                <label className="d-block mb-3">Gender :</label>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                                    <label className="custom-control-label" for="customRadioInline1">Male</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                                    <label className="custom-control-label" for="customRadioInline2">Female</label>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="formmessage">Message :</label>
                                                <textarea id="formmessage" className="form-control" rows="3"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </AUX>
    );
    }
}

export default FormRepeater;   