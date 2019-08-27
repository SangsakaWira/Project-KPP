import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class PagesTimeline extends Component{
 
render(){
    return(
            <AUX>
                <div className="container-fluid">

                    <div className="page-title-box">
                        <div className="row align-items-center">

                            <div className="col-sm-6">
                                <h4 className="page-title">Timeline</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                                    <li className="breadcrumb-item active">Timeline</li>
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
                                    <div id="cd-timeline">
                                        <ul className="timeline list-unstyled">
                                            <li className="timeline-list">
                                                <div className="cd-timeline-content bg-light p-4">
                                                    <h5 className="mt-0 mb-3">Timeline Event One</h5>
                                                    <p className="mb-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                    <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                                    <div className="date bg-primary">
                                                        <h4 className="mt-0">22</h4>
                                                        <p className="mb-0 text-white-50">Jan</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-list right clearfix">
                                                <div className="cd-timeline-content bg-light p-4">
                                                    <h5 className="mt-0 mb-3">Timeline Event Two</h5>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                                    <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light m-t-5">See more detail</button>

                                                    <div className="date bg-primary">
                                                        <h4 className="mt-0">23</h4>
                                                        <p className="mb-0 text-white-50">Jan</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-list">
                                                <div className="cd-timeline-content bg-light p-4">
                                                    <h5 className="mt-0 mb-3">Timeline Event Three</h5>
                                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                    <img src="assets/images/small/img-1.jpg" alt="" className="rounded mr-1" width="120" />
                                                    <img src="assets/images/small/img-2.jpg" alt="" className="rounded" width="120" />

                                                    <div className="date bg-primary">
                                                        <h4 className="mt-0">24</h4>
                                                        <p className="mb-0 text-white-50">Jan</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-list right clearfix">
                                                <div className="cd-timeline-content bg-light p-4">
                                                    <h5 className="mt-0 mb-3">Timeline Event Four</h5>
                                                    <p className="mb-2">It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                                                    <p className="mb-0">languages are members of the same family. Their separate existence is a myth... <a href="#" className="text-primary">Read More</a></p>

                                                    <div className="date bg-primary">
                                                        <h4 className="mt-0">25</h4>
                                                        <p className="mb-0 text-white-50">Jan</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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

export default PagesTimeline;   