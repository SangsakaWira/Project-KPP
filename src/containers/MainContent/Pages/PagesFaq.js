import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class PagesFaq extends Component{
 
render(){
    return(
            <AUX>
                  <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">
                    
                            <div className="col-sm-6">
                                <h4 className="page-title">Faqs</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                                    <li className="breadcrumb-item active">Faqs</li>
                                </ol>
                    
                            </div>
                            <div className="col-sm-6">
                
                               <Settings />
                    
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row justify-content-center mb-5">
                                        <div className="col-lg-5">
                                            <div className="text-center faq-title pt-4 pb-4">
                                                <div className="pt-3 pb-3">
                                                    <i className="ti-comments text-primary h3"></i>
                                                </div>
                                                <h5>Can't find what you are looking for?</h5>
                                                <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                                                <button type="button" className="btn btn-primary m-t-10 mr-1 waves-effect waves-light">Email Us</button>
                                                <button type="button" className="btn btn-success m-t-10 waves-effect waves-light">Send us a tweet</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-lg-5">
                                            <h5 className="mt-0 font-18 mb-4"><i className="ti-agenda text-primary mr-2"></i> General Questions</h5>
                                            <div className="accordion" id="accordionExample">
                                                <div className="card mb-0">
                                                    <a data-toggle="collapse" href="#collapseOne" className="faq" aria-expanded="true" aria-controls="collapseOne">
                                                        <div className="card-header text-dark" id="headingOne">
                                                            <h6 className="m-0 faq-question">What is Lorem Ipsum?</h6>
                                                        </div>
                                                    </a>
                    
                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p className="text-muted mb-0 faq-ans">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                                        </div>
                                                    </div>
                                                </div>
                    
                                                <div className="card mb-0">
                                                    <a data-toggle="collapse" href="#collapseTwo" className="faq collapsed" aria-expanded="false" aria-controls="collapseTwo">
                                                        <div className="card-header text-dark" id="headingTwo">
                                                            <h6 className="m-0 faq-question">Where does it come from?</h6>
                                                        </div>
                                                    </a>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p className="text-muted mb-0 faq-ans">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</p>
                                                        </div>
                                                    </div>
                                                </div>
                    
                                                <div className="card mb-0">
                                                    <a data-toggle="collapse" href="#collapseThree" className="faq collapsed" aria-expanded="false" aria-controls="collapseThree">
                                                        <div className="card-header text-dark" id="headingThree">
                                                            <h6 className="m-0 faq-question">Why do we use it?</h6>
                                                        </div>
                                                    </a>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p className="text-muted mb-0 faq-ans">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple</p>
                                                        </div>
                                                    </div>
                                                </div>
                    
                                                <div className="card">
                                                    <a data-toggle="collapse" href="#collapseFour" className="faq collapsed" aria-expanded="false" aria-controls="collapseFour">
                                                        <div className="card-header text-dark" id="headingFour">
                                                            <h6 className="m-0 faq-question">Where can I get some?</h6>
                                                        </div>
                                                    </a>
                                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <p className="text-muted mb-0 faq-ans">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-5 offset-lg-1">
                                            <h5 className="mt-0 font-18 mb-4"><i className="ti-bookmark-alt text-primary mr-2"></i> Pricing  & Plans</h5>
                                            <div className="accordion" id="accordionExample2">
                                                <div className="card mb-0">
                                                    <a data-toggle="collapse" href="#collapseFive" className="faq" aria-expanded="true" aria-controls="collapseFive">
                                                        <div className="card-header text-dark" id="headingFive">
                                                            <h6 className="m-0 faq-question">Where can I get some?</h6>
                                                        </div>
                                                    </a>
                    
                                                    <div id="collapseFive" className="collapse show" aria-labelledby="headingFive" data-parent="#accordionExample2">
                                                        <div className="card-body">
                                                            <p className="text-muted mb-0 faq-ans">The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>
                                                        </div>
                                                    </div>
                                                </div>
                    
                                                <div className="card mb-0">
                                                    <a data-toggle="collapse" href="#collapseSix" className="faq collapsed" aria-expanded="false" aria-controls="collapseSix">
                                                        <div className="card-header text-dark" id="headingSix">
                                                            <h6 className="m-0 faq-question">Why do we use it?</h6>
                                                        </div>
                                                    </a>
                                                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample2">
                                                        <div className="card-body">
                                                            <p className="text-muted mb-0 faq-ans">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</p>
                                                        </div>
                                                    </div>
                                                </div>
                    
                                                <div className="card mb-0">
                                                    <a data-toggle="collapse" href="#collapseSeven" className="faq collapsed" aria-expanded="false" aria-controls="collapseSeven">
                                                        <div className="card-header text-dark" id="headingSeven">
                                                            <h6 className="m-0 faq-question">Where does it come from?</h6>
                                                        </div>
                                                    </a>
                                                    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample2">
                                                        <div className="card-body">
                                                            <p className="text-muted mb-0 faq-ans">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple</p>
                                                        </div>
                                                    </div>
                                                </div>
                    
                                                <div className="card">
                                                    <a data-toggle="collapse" href="#collapseEight" className="faq collapsed" aria-expanded="false" aria-controls="collapseEight">
                                                        <div className="card-header text-dark" id="headingEight">
                                                            <h6 className="m-0 faq-question">What is Lorem Ipsum?</h6>
                                                        </div>
                                                    </a>
                                                    <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample2">
                                                        <div className="card-body">
                                                            <p className="text-muted mb-0 faq-ans">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default PagesFaq;   