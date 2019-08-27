import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';

class PagesGallery extends Component{
 
render(){
    return(
            <AUX>
               <div className="container-fluid">

                <div className="page-title-box">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <h4 className="page-title">Gallery</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Extra Pages</Link></li>
                                <li className="breadcrumb-item active">Gallery</li>
                            </ol>

                        </div>
                        <div className="col-sm-6">

                           <Settings />

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-1.jpg" className="gallery-popup" title="Open Imagination">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-1.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Open Imagination</h4>
                                        <p>
                                            <img src="assets/images/users/user-1.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-2.jpg" className="gallery-popup" title="Locked Steel Gate">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-2.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Locked Steel Gate</h4>
                                        <p>
                                            <img src="assets/images/users/user-2.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-3.jpg" className="gallery-popup" title="Mac Sunglasses">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-3.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Mac Sunglasses</h4>
                                        <p>
                                            <img src="assets/images/users/user-3.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-4.jpg" className="gallery-popup" title="Morning Dew">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-4.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Morning Dew</h4>
                                        <p>
                                            <img src="assets/images/users/user-4.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-5.jpg" className="gallery-popup" title="Console Activity">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-5.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Console Activity</h4>
                                        <p>
                                            <img src="assets/images/users/user-5.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-6.jpg" className="gallery-popup" title="Shake It!">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-6.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Shake It!</h4>
                                        <p>
                                            <img src="assets/images/users/user-6.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-7.jpg" className="gallery-popup" title="Backpack Content">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-7.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Backpack Content</h4>
                                        <p>
                                            <img src="assets/images/users/user-1.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-8.jpg" className="gallery-popup" title="Sunset Bulb Glow">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-8.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Sunset Bulb Glow</h4>
                                        <p>
                                            <img src="assets/images/users/user-2.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-9.jpg" className="gallery-popup" title="Open Imagination">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-9.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Open Imagination</h4>
                                        <p>
                                            <img src="assets/images/users/user-3.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-10.jpg" className="gallery-popup" title="Console Activity">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-10.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Console Activity</h4>
                                        <p>
                                            <img src="assets/images/users/user-4.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-11.jpg" className="gallery-popup" title="Open Imagination">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-11.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Open Imagination</h4>
                                        <p>
                                            <img src="assets/images/users/user-5.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <a href="assets/images/gallery/work-12.jpg" className="gallery-popup" title="Shake It!">
                            <div className="project-item">
                                <div className="overlay-container">
                                    <img src="assets/images/gallery/work-12.jpg" alt="img" className="gallery-thumb-img" />
                                    <div className="project-item-overlay">
                                        <h4>Shake It!</h4>
                                        <p>
                                            <img src="assets/images/users/user-6.jpg" alt="user" className="thumb-sm rounded-circle" />
                                            <span className="ml-2">Curtis Marion</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                </div>
                
            </AUX>
        );
    }
}

export default PagesGallery;   