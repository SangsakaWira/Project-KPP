import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class FormUploads extends Component{

    constructor() {
        super()
        this.state = {
          files: []
        }
      }
    
      onDrop(files) {
        this.setState({files});
      }
    
      onCancel() {
        this.setState({
          files: []
        });
      }
  
render(){
    const files = this.state.files.map(file => (
        <li key={file.name}>
          {file.name} - {file.size} bytes 
        </li>
      ))

    return(
        <AUX>
             <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h4 className="page-title">File Upload</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                <li className="breadcrumb-item active">File Upload</li>
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

                                <h4 className="mt-0 header-title">Dropzone</h4>
                                <p className="text-muted m-b-30">DropzoneJS is an open source library
                                    that provides drag’n’drop file uploads with image previews.
                                </p>

                                <section  className="my_drop">
                                    <Dropzone
                                    onDrop={this.onDrop.bind(this)}
                                    onFileDialogCancel={this.onCancel.bind(this)} >
                                    {({getRootProps, getInputProps}) => (
                                        <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                            <p>Drop files here, or click to select files</p>
                                        </div>
                                    )}
                                    </Dropzone>
                                    <aside>
                                    <h4>Files</h4>
                                    <ul>{files}</ul>
                                    </aside>
                                </section>

                                <div className="text-center m-t-15">
                                    <button type="button" className="btn btn-primary waves-effect waves-light">Send Files</button>
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

export default FormUploads;   