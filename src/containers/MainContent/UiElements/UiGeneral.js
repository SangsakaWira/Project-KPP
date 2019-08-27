import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import { Tooltip, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
 
class UiGeneral extends Component {
    
    constructor(props) {
        super(props);
     
        this.state = {
            popover_top: false, popover_right:false, popover_bottom: false, popover_left: false, popover_dismiss:false, 
            tooltip_top:false, tooltip_right:false, tooltip_bottom:false
        };
      }

render(){
    return(
        <AUX>
            <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                
                        <div className="col-sm-6">
                            <h4 className="page-title">General</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                <li className="breadcrumb-item active">General</li>
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
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div>
                                            <h4 className="mt-0 header-title">badges</h4>
                                            <p className="text-muted m-b-30">Add any of the below mentioned modifier classNamees to change the appearance of a badge.</p>
                                            <div>
                                                <span className="badge badge-primary">Primary</span>
                                                <span className="badge badge-success">Success</span>
                                                <span className="badge badge-info">Info</span>
                                                <span className="badge badge-warning">Warning</span>
                                                <span className="badge badge-danger">Danger</span>
                                                <span className="badge badge-dark">Dark</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h4 className="mt-0 header-title mo-mt-2">Pill badges</h4>
                                            <p className="text-muted m-b-30">Use the <code>.badge-pill</code> modifier className to make
                                            badges more rounded (with a larger <code>border-radius</code>
                                            and additional horizontal <code>padding</code>).
                                            Useful if you miss the badges from v3.</p>

                                            <div>
                                                <span className="badge badge-pill badge-primary">Primary</span>
                                                <span className="badge badge-pill badge-success">Success</span>
                                                <span className="badge badge-pill badge-info">Info</span>
                                                <span className="badge badge-pill badge-warning">Warning</span>
                                                <span className="badge badge-pill badge-danger">Danger</span>
                                                <span className="badge badge-pill badge-dark">Dark</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Popovers</h4>
                                <p className="text-muted m-b-20">Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>

                                <div className="button-items">
                                    <button type="button" id="Popovertop" className="btn btn-secondary waves-effect" onClick={() => this.setState({ popover_top: !this.state.popover_top })}>
                                        Popover on top
                                    </button>
                                       <Popover placement="top" isOpen={this.state.popover_top} target="Popovertop" toggle={() => this.setState({ popover_top: !this.state.popover_top })}>
                                       <PopoverHeader>Popover Title</PopoverHeader>
                                       <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                     </Popover>
                                   

                                    <button type="button" className="btn btn-secondary waves-effect" id="Popoverright" toggle={() => this.setState({ popover_right: !this.state.popover_right })}>
                                        Popover on right
                                    </button>
                                    <Popover placement="right" isOpen={this.state.popover_right} target="Popoverright" toggle={() => this.setState({ popover_right: !this.state.popover_right })}>
                                       <PopoverHeader>Popover Title</PopoverHeader>
                                       <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                     </Popover>

                                    <button type="button" id="Popoverbottom" className="btn btn-secondary waves-effect" toggle={() => this.setState({ popover_bottom: !this.state.popover_bottom })}>
                                        Popover on bottom
                                    </button>
                                    <Popover placement="bottom" isOpen={this.state.popover_bottom} target="Popoverbottom" toggle={() => this.setState({ popover_bottom: !this.state.popover_bottom })}>
                                       <PopoverHeader>Popover Title</PopoverHeader>
                                       <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                     </Popover>

                                    <button type="button" id="Popoverleft" className="btn btn-secondary waves-effect" toggle={() => this.setState({ popover_left: !this.state.popover_left })}>
                                        Popover on left
                                    </button>
                                    <Popover placement="left" isOpen={this.state.popover_left} target="Popoverleft" toggle={() => this.setState({ popover_left: !this.state.popover_left })}>
                                       <PopoverHeader>Popover Title</PopoverHeader>
                                       <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                     </Popover>

                                    <button type="button" id="Popoverdismiss" className="btn btn-success waves-effect waves-light" >Dismissible popover</button>
                                    <Popover onClick={() => this.setState({ popover_dismiss: false })} placement="bottom" isOpen={this.state.popover_dismiss} target="Popoverdismiss" toggle={() => this.setState({ popover_dismiss: !this.state.popover_dismiss })}>
                                       <PopoverHeader>Popover Title</PopoverHeader>
                                       <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                     </Popover>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Tooltips</h4>
                                <p className="text-muted m-b-20">Hover over the links below to see tooltips:</p>
                                <div className="button-items">

                                    <button type="button" className="btn btn-primary" id="TooltipTop">
                                        Tooltip on top
                                    </button>
                                    <Tooltip placement="top" isOpen={this.state.tooltip_top} target="TooltipTop" toggle={() => this.setState({ tooltip_top: !this.state.tooltip_top })}>
                                   Hello world!
                                   </Tooltip>
    
                                    <button type="button" className="btn btn-primary" isOpen={this.state.tooltip_right} id="TooltipRight" toggle={() => this.setState({ tooltip_right: !this.state.tooltip_right })}>
                                        Tooltip on right
                                    </button>
                                    <Tooltip placement="right" isOpen={this.state.tooltip_right} target="TooltipRight" toggle={() => this.setState({ tooltip_right: !this.state.tooltip_right })}>
                                   Hello world!
                                   </Tooltip>

                                    <button type="button" className="btn btn-primary" isOpen={this.state.tooltip_bottom} id="TooltipBottom" toggle={() => this.setState({ tooltip_bottom: !this.state.tooltip_bottom })}>
                                        Tooltip on bottom
                                    </button>
                                    <Tooltip placement="bottom" isOpen={this.state.tooltip_bottom} target="TooltipBottom" toggle={() => this.setState({ tooltip_bottom: !this.state.tooltip_bottom })}>
                                   Hello world!
                                   </Tooltip>
    
                                    <button type="button" className="btn btn-primary" isOpen={this.state.tooltip_left} id="TooltipLeft" toggle={() => this.setState({ tooltip_left: !this.state.tooltip_left })}>
                                        Tooltip on left
                                    </button>
                                    <Tooltip placement="left" isOpen={this.state.tooltip_left} target="TooltipLeft" toggle={() => this.setState({ tooltip_left: !this.state.tooltip_left })}>
                                   Hello world!
                                   </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title m-b-30">Pagination</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="font-16 mt-0">Default Example</h5>
                                        <p className="text-muted m-b-30">Pagination links indicate a series of related content exists across multiple pages.</p>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
        
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
    
                                    </div>

                                    <div className="col-lg-6">
                                        <h5 className="font-16 mt-0">Disabled and active states</h5>
                                        <p className="text-muted m-b-30">Pagination links are customizable for
                                                different circumstances. Use <code>.disabled</code> for links that appear
                                                un-clickable and <code>.active</code> to
                                                indicate the current page.</p>
    

                                        <nav aria-label="...">
                                            <ul className="pagination">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
        
                                        <nav aria-label="...">
                                            <ul className="pagination">
                                                <li className="page-item disabled">
                                                    <span className="page-link">Previous</span>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active">
                                                    <span className="page-link">
                                                        2
                                                        <span className="sr-only">(current)</span>
                                                    </span>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="font-16 m-t-30">Sizing</h5>
                                        <p className="text-muted m-b-30">Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional
                                                sizes.</p>
    
                                        <nav aria-label="...">
                                            <ul className="pagination pagination-lg">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
        
                                        <nav aria-label="...">
                                            <ul className="pagination pagination-sm">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
            
                                    </div>

                                    <div className="col-lg-6">
                                        <h5 className="font-16 m-t-30">Alignment</h5>
                                        <p className="text-muted m-b-30">Change the alignment of pagination
                                                components with flexbox utilities.</p>
    
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
        
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-end">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Border spinner</h4>
                                <p className="text-muted m-b-20">Use the border spinners for a lightweight loading indicator.</p>
                                <div>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-secondary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-success" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-info" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-warning" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-danger" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-dark" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Growing spinner</h4>
                                <p className="text-muted m-b-20">If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
                                <div>
                                    <div className="spinner-grow text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-secondary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-success" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-info" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-warning" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-danger" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-dark" role="status">
                                        <span className="sr-only">Loading...</span>
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

export default UiGeneral;   