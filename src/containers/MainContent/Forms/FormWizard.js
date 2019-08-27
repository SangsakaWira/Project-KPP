import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import WizardFormFirstPage from '../Subpages/WizardFormFirstPage';
import WizardFormSecondPage from '../Subpages/WizardFormSecondPage';
import WizardFormThirdPage from '../Subpages/WizardFormThirdPage';
import WizardFormForthPage from '../Subpages/WizardFormForthPage';

 
class FormWizard extends Component{
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
          page: 1
        }
      }
      nextPage() {
        this.setState({ page: this.state.page + 1 })
      }
    
      previousPage() {
        this.setState({ page: this.state.page - 1 })
      }
  
render(){

    const { onSubmit } = this.props;
    const { page } = this.state;

    return(
        <AUX>
                <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">

                            <div className="col-sm-6">
                                <h4 className="page-title">Form Wizard</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                    <li className="breadcrumb-item active">Form Wizard</li>
                                </ol>
                            </div>
                            
                            <div className="col-sm-6">
                                <Settings />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title">Jquery Steps Wizard</h4>
                                    <p className="text-muted m-b-30 font-14">A powerful jQuery wizard plugin that
                                        supports accessibility and HTML5</p>
                                    <div>
                                        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
                                        {page === 2 && (
                                        <WizardFormSecondPage
                                            previousPage={this.previousPage}
                                            onSubmit={this.nextPage}
                                        />
                                        )}
                                        {page === 3 && (
                                        <WizardFormThirdPage
                                            previousPage={this.previousPage}
                                            onSubmit={this.nextPage}
                                        />
                                        )}
                                        {page === 4 && (
                                        <WizardFormForthPage
                                            previousPage={this.previousPage}
                                            onSubmit={onSubmit}
                                        />
                                        )}
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

FormWizard.propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  

export default FormWizard;   