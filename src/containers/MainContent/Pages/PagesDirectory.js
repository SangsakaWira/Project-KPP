import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class PagesDirectory extends Component{
 
render(){
    return(
            <AUX>
                 <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">
                    
                            <div className="col-sm-6">
                                <h4 className="page-title">Directory</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                                    <li className="breadcrumb-item active">Directory</li>
                                </ol>
                    
                            </div>
                            <div className="col-sm-6">
                    
                          <Settings />
                    
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="card directory-card">
                                <div className="card-body">
                                    <div className="float-left mr-4">
                                        <img src="assets/images/users/user-2.jpg" alt="nice" className="img-fluid img-thumbnail rounded-circle thumb-lg" />
                                    </div>
                                    <ul className="list-unstyled social-links float-right">
                                        <li><Link to="#" className="btn-primary"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li><Link to="#" className="btn-info"><i className="mdi mdi-twitter"></i></Link></li>
                                    </ul>
                                    <h5 className="text-primary font-18 mt-0 mb-1">Jerome A. Hebert</h5>
                                    <p className="font-12 mb-2">Creative Director</p>
                                    <p className="mb-4">Jerome@veltrix.com</p>
                                    <div className="clearfix"></div>
                                    <hr />
                                    <p className="mb-0"><b>Intro : </b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et... <a href="#" className="text-primary"> Read More</a></p>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card directory-card">
                                <div className="card-body">
                                    <div className="float-left mr-4">
                                        <img src="assets/images/users/user-3.jpg" alt="nice" className="img-fluid img-thumbnail rounded-circle thumb-lg" />
                                    </div>
                                    <ul className="list-unstyled social-links float-right">
                                        <li><a href="#" className="btn-primary"><i className="mdi mdi-facebook"></i></a></li>
                                        <li><a href="#" className="btn-info"><i className="mdi mdi-twitter"></i></a></li>
                                    </ul>
                                    <h5 className="text-primary font-18 mt-0 mb-1">Adam V. Acker</h5>
                                    <p className="font-12 mb-2">Creative Director</p>
                                    <p className="mb-4">Adam@veltrix.com</p>
                                    <hr />
                                    <p className="mb-0"><b>Intro : </b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et... <a href="#" className="text-primary"> Read More</a></p>
                                </div>
                                
                            </div>
                        </div>
                      
                        <div className="col-xl-4 col-md-6">
                            <div className="card directory-card">
                                <div className="card-body">
                                    <div className="float-left mr-4">
                                        <img src="assets/images/users/user-4.jpg" alt="nice" className="img-fluid img-thumbnail rounded-circle thumb-lg" />
                                    </div>
                                    <ul className="list-unstyled social-links float-right">
                                        <li><Link to="#" className="btn-primary"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li><Link to="#" className="btn-info"><i className="mdi mdi-twitter"></i></Link></li>
                                    </ul>
                                    <h5 className="text-primary font-18 mt-0 mb-1">Stanley M. Dyke</h5>
                                    <p className="font-12 mb-2">Creative Director</p>
                                    <p className="mb-4">Stanley@veltrix.com</p>
                                    <hr />
                                    <p className="mb-0"><b>Intro : </b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et... <a href="#" className="text-primary"> Read More</a></p>
                                </div>  
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-md-6">
                            <div className="card directory-card">
                                <div className="card-body">
                                    <div className="float-left mr-4">
                                        <img src="assets/images/users/user-5.jpg" alt="" className="img-fluid img-thumbnail rounded-circle thumb-lg" />
                                    </div>
                                    <ul className="list-unstyled social-links float-right">
                                        <li><Link to="#" className="btn-primary"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li><Link to="#" className="btn-info"><i className="mdi mdi-twitter"></i></Link></li>
                                    </ul>
                                    <h5 className="text-primary font-18 mt-0 mb-1">Ben J. Mathison</h5>
                                    <p className="font-12 mb-2">Creative Director</p>
                                    <p className="mb-4">Ben@veltrix.com</p>
                                    <hr />
                                    <p className="mb-0"><b>Intro : </b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et... <a href="#" className="text-primary"> Read More</a></p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card directory-card">
                                <div className="card-body">
                                    <div className="float-left mr-4">
                                        <img src="assets/images/users/user-6.jpg" alt="" className="img-fluid img-thumbnail rounded-circle thumb-lg" />
                                    </div>
                                    <ul className="list-unstyled social-links float-right">
                                        <li><Link to="#" className="btn-primary"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li><Link to="#" className="btn-info"><i className="mdi mdi-twitter"></i></Link></li>
                                    </ul>
                                    <h5 className="text-primary font-18 mt-0 mb-1">John V. Bailey</h5>
                                    <p className="font-12 mb-2">Creative Director</p>
                                    <p className="mb-4">John@veltrix.com</p>
                                    <hr />
                                    <p className="mb-0"><b>Intro : </b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et... <a href="#" className="text-primary"> Read More</a></p>
                                </div>  
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card directory-card">
                                <div className="card-body">
                                    <div className="float-left mr-4">
                                        <img src="assets/images/users/user-7.jpg" alt="" className="img-fluid img-thumbnail rounded-circle thumb-lg" />
                                    </div>
                                    <ul className="list-unstyled social-links float-right">
                                        <li><Link to="#" className="btn-primary"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li><Link to="#" className="btn-info"><i className="mdi mdi-twitter"></i></Link></li>
                                    </ul>
                                    <h5 className="text-primary font-18 mt-0 mb-1">Antonio J. Thomas</h5>
                                    <p className="font-12 mb-2">Creative Director</p>
                                    <p className="mb-4">Antonio@veltrix.com</p>
                                    <hr />
                                    <p className="mb-0"><b>Intro : </b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et... <a href="#" className="text-primary"> Read More</a></p>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-md-6">
                            <div className="card directory-card">
                                <div className="card-body">
                                    <div className="float-left mr-4">
                                        <img src="assets/images/users/user-8.jpg" alt="" className="img-fluid img-thumbnail rounded-circle thumb-lg" />
                                    </div>
                                    <ul className="list-unstyled social-links float-right">
                                        <li><Link to="#" className="btn-primary"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li><Link to="#" className="btn-info"><i className="mdi mdi-twitter"></i></Link></li>
                                    </ul>
                                    <h5 className="text-primary font-18 mt-0 mb-1">Jerome A. Hebert</h5>
                                    <p className="font-12 mb-2">Creative Director</p>
                                    <p className="mb-4">Jerome@veltrix.com</p>
                                    <div className="clearfix"></div>
                                    <hr />
                                    <p className="mb-0"><b>Intro : </b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et... <a href="#" className="text-primary"> Read More</a></p>
                                </div>  
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card directory-card">
                                <div className="card-body">
                                    <div className="float-left mr-4">
                                        <img src="assets/images/users/user-9.jpg" alt="" className="img-fluid img-thumbnail rounded-circle thumb-lg" />
                                    </div>
                                    <ul className="list-unstyled social-links float-right">
                                        <li><Link to="#" className="btn-primary"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li><Link to="#" className="btn-info"><i className="mdi mdi-twitter"></i></Link></li>
                                    </ul>
                                    <h5 className="text-primary font-18 mt-0 mb-1">Adam V. Acker</h5>
                                    <p className="font-12 mb-2">Creative Director</p>
                                    <p className="mb-4">Adam@veltrix.com</p>
                                    <hr />
                                    <p className="mb-0"><b>Intro : </b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et... <a href="#" className="text-primary"> Read More</a></p>
                                </div>  
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card directory-card">
                                <div className="card-body">
                                    <div className="float-left mr-4">
                                        <img src="assets/images/users/user-10.jpg" alt="" className="img-fluid img-thumbnail rounded-circle thumb-lg" />
                                    </div>
                                    <ul className="list-unstyled social-links float-right">
                                        <li><Link to="#" className="btn-primary"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li><Link to="#" className="btn-info"><i className="mdi mdi-twitter"></i></Link></li>
                                    </ul>
                                    <h5 className="text-primary font-18 mt-0 mb-1">Stanley M. Dyke</h5>
                                    <p className="font-12 mb-2">Creative Director</p>
                                    <p className="mb-4">Stanley@veltrix.com</p>
                                    <hr />
                                    <p className="mb-0"><b>Intro : </b>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et... <a href="#" className="text-primary"> Read More</a></p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </AUX>
        );
    }
}

export default PagesDirectory;   