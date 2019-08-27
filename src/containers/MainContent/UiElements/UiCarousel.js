import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
 
class UiCarousel extends Component{

render(){
    return(
        <AUX>
            <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h4 className="page-title">Carousel</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                <li className="breadcrumb-item active">Carousel</li>
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

                                <h4 className="mt-0 header-title">Slides only</h4>
                                <p className="text-muted m-b-30">Here’s a carousel with slides only.
                                    Note the presence of the <code>.d-block</code>
                                    and <code>.img-fluid</code> on carousel images
                                    to prevent browser default image alignment.</p>

                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="assets/images/small/img-1.jpg" alt="First" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/small/img-2.jpg" alt="Second" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/small/img-3.jpg" alt="Third" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">With controls</h4>
                                <p className="text-muted m-b-30">Adding in the previous and next controls:</p>

                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="assets/images/small/img-4.jpg" alt="First" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/small/img-5.jpg" alt="Second" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/small/img-6.jpg" alt="Third" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">With indicators</h4>
                                <p className="text-muted m-b-30">You can also add the indicators to the
                                    carousel, alongside the controls, too.</p>

                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="assets/images/small/img-3.jpg" alt="First" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/small/img-2.jpg" alt="Second" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/small/img-1.jpg" alt="Third" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">With captions</h4>
                                <p className="text-muted m-b-30">Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.</p>

                                <div id="carouselExampleCaption" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img src="assets/images/small/img-7.jpg" alt="nice" className="d-block img-fluid" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/small/img-5.jpg" alt="nice" className="d-block img-fluid" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/small/img-4.jpg" alt="nice" className="d-block img-fluid" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Third slide label</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleCaption" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleCaption" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Crossfade</h4>
                                <p className="text-muted m-b-30">Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>
                                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="assets/images/small/img-1.jpg" alt="First" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/small/img-2.jpg" alt="Second" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/small/img-3.jpg" alt="Third" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
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

export default UiCarousel;   