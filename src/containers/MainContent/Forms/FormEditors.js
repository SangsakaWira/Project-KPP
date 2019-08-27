import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

 
class FormEditors extends Component{
  
render(){
    return(
        <AUX>
            <div className="container-fluid">
            <div className="page-title-box">
                <div className="row align-items-center">

                    <div className="col-sm-6">
                        <h4 className="page-title">Form Editors</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                            <li className="breadcrumb-item active">Form Editors</li>
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
                            <h4 className="mt-0 header-title">Summernote</h4>
                            <p className="text-muted m-b-30">Super simple wysiwyg editor on bootstrap</p>
                            <Editor
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName" />
                        </div>
                    </div>
                </div> 
            </div> 
            </div>
        </AUX>
    );
    }
}

export default FormEditors;   