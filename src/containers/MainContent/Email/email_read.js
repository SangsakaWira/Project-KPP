import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class email_read extends Component{
 
render(){
    return(
            <AUX>
                <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <h4 className="page-title">Email Read</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Email</Link></li>
                                    <li className="breadcrumb-item active">Email Read</li>
                                </ol>
                            </div>
                            <div className="col-sm-6">
                                <Settings />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="email-leftbar card">
                                <Link to="email-compose" className="btn btn-danger btn-rounded btn-custom btn-block waves-effect waves-light">Compose</Link>
                                <div className="mail-list m-t-20">
                                    <Link to="#" className="active">Inbox <span className="ml-1">(18)</span></Link>
                                    <Link to="#">Starred</Link>
                                    <Link to="#">Important</Link>
                                    <Link to="#">Draft</Link>
                                    <Link to="#">Sent Mail</Link>
                                    <Link to="#">Trash</Link>
                                </div>

                                <h6 className="m-t-30">Labels</h6>
                                <div className="mail-list m-t-20">
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-info float-right"></span>Theme Support</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>Freelance</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>Social</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>Friends</Link>
                                    <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>Family</Link>
                                </div>
                                <h6 className="m-t-30">Chat</h6>
                                <div className="m-t-20">
                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src="assets/images/users/user-2.jpg" alt="nice" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Scott Median</p>
                                            <p className="text-muted">Hello</p>
                                        </div>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src="assets/images/users/user-3.jpg" alt="nice" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Julian Rosa</p>
                                            <p className="text-muted">What about our next..</p>
                                        </div>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src="assets/images/users/user-4.jpg" alt="nice" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">David Medina</p>
                                            <p className="text-muted">Yeah everything is fine</p>
                                        </div>
                                    </Link>

                                    <Link to="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src="assets/images/users/user-6.jpg" alt="nice" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Jay Baker</p>
                                            <p className="text-muted">Wow that's great</p>
                                        </div>
                                    </Link>

                                </div>
                            </div>

                            <div className="email-rightbar mb-3">
                                
                                <div className="card">
                                    <div className="btn-toolbar p-3" role="toolbar">
                                        <div className="btn-group mo-mb-2">
                                            <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-inbox"></i></button>
                                            <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-exclamation-circle"></i></button>
                                            <button type="button" className="btn btn-primary waves-light waves-effect"><i className="far fa-trash-alt"></i></button>
                                        </div>
                                        <div className="btn-group ml-1 mo-mb-2">
                                            <button type="button" className="btn btn-primary waves-light waves-effect dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-folder"></i>
                                            </button>
                                            <div className="dropdown-menu mo-mb-2">
                                                <Link className="dropdown-item" to="#">Updates</Link>
                                                <Link className="dropdown-item" to="#">Social</Link>
                                                <Link className="dropdown-item" to="#">Team Manage</Link>
                                            </div>
                                        </div>
                                        <div className="btn-group ml-1 mo-mb-2">
                                            <button type="button" className="btn btn-primary waves-light waves-effect dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <i className="fa fa-tag"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="#">Updates</Link>
                                                <Link className="dropdown-item" to="#">Social</Link>
                                                <Link className="dropdown-item" to="#">Team Manage</Link>
                                            </div>
                                        </div>

                                        <div className="btn-group ml-1 mo-mb-2">
                                            <button type="button" className="btn btn-primary waves-light waves-effect dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                More
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="#">Mark as Unread</Link>
                                                <Link className="dropdown-item" to="#">Mark as Important</Link>
                                                <Link className="dropdown-item" to="#">Add to Tasks</Link>
                                                <Link className="dropdown-item" to="#">Add Star</Link>
                                                <Link className="dropdown-item" to="#">Mute</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">

                                        <div className="media m-b-30">
                                            <img className="d-flex mr-3 rounded-circle thumb-md" src="assets/images/users/user-1.jpg" alt="nice" />
                                            <div className="media-body">
                                                <h4 className="font-14 m-0">Humberto D. Champion</h4>
                                                <small className="text-muted">support@domain.com</small>
                                            </div>
                                        </div>

                                        <h4 className="mt-0 font-16">This Week's Top Stories</h4>

                                        <p>Dear Lorem Ipsum,</p>
                                        <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus
                                            convallis.</p>
                                        <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia
                                            lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                        <p>Sincerly,</p>
                                        <hr/>

                                        <div className="row">
                                            <div className="col-xl-2 col-6">
                                                <div className="card">
                                                    <img className="card-img-top img-fluid" src="assets/images/small/img-3.jpg" alt="nice" />
                                                    <div className="p-t-10 p-b-10 text-center">
                                                        <Link to="#" className="font-500">Download</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-6">
                                                <div className="card">
                                                    <img className="card-img-top img-fluid" src="assets/images/small/img-4.jpg" alt="nice" />
                                                    <div className="p-t-10 p-b-10 text-center">
                                                        <Link to="#" className="font-500">Download</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="email-compose" className="btn btn-secondary waves-effect m-t-30"><i className="mdi mdi-reply"></i> Reply</Link>
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

export default email_read;   