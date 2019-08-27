import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,ButtonDropdown,Button  } from 'reactstrap';

class UiDropdowns extends Component{
    constructor(props) {
        super(props);
        this.state = {
            drp_button:false, drp_link:false
        };
      }

     
    
render(){
    
    return(
        <AUX>
            <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                
                        <div className="col-sm-6">
                            <h4 className="page-title">Dropdowns</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                <li className="breadcrumb-item active">Dropdowns</li>
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
                                <h4 className="mt-0 header-title">Single button dropdowns</h4>
                                <p className="text-muted m-b-30">Any single <code
                                        className="highlighter-rouge">.btn</code> can be turned into a dropdown
                                    toggle with some markup changes. Here’s how you can put them to work
                                    with either <code className="highlighter-rouge">&lt;button&gt;</code>
                                    elements:</p>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="dropdown mo-mb-2">

                                    <Dropdown isOpen={this.state.drp_button}  toggle={() => this.setState({ drp_button: !this.state.drp_button })}>
                                        <DropdownToggle className="btn btn-secondary" caret>
                                         Dropdown Button
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Seperated link</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>

                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="dropdown mo-mb-2">
                                        <Dropdown isOpen={this.state.drp_link}  toggle={() => this.setState({ drp_link: !this.state.drp_link })}>
                                            <DropdownToggle className="btn btn-secondary" caret>
                                            Dropdown Link
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Seperated link</DropdownItem>
                                            </DropdownMenu>
                                       </Dropdown>
                                     </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Variant</h4>
                                <p className="text-muted m-b-30">The best part is you can do this with any button variant, too:</p>
                                <div className="">

                                    <div className="btn-group m-b-10">
                                    <Dropdown isOpen={this.state.drp_primary}  toggle={() => this.setState({ drp_primary: !this.state.drp_primary })}>
                                        <DropdownToggle className="btn btn-primary" caret>
                                          Primary
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Seperated link</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    </div>
                                    &nbsp;

                                    <div className="btn-group m-b-10">
                                    <Dropdown isOpen={this.state.drp_secondary}  toggle={() => this.setState({ drp_secondary: !this.state.drp_secondary })}>
                                        <DropdownToggle className="btn btn-secondary" caret>
                                          Secondary
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Seperated link</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    </div>
                                    &nbsp;

                                    <div className="btn-group m-b-10">
                                     <Dropdown isOpen={this.state.drp_success}  toggle={() => this.setState({ drp_success: !this.state.drp_success })}>
                                        <DropdownToggle className="btn btn-success" caret>
                                         Success
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Seperated link</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    </div>
                                    &nbsp;

                                    <div className="btn-group m-b-10">
                                    <Dropdown isOpen={this.state.drp_info}  toggle={() => this.setState({ drp_info: !this.state.drp_info })}>
                                        <DropdownToggle className="btn btn-info" caret>
                                         Info
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Seperated link</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    </div>
                                    &nbsp;

                                    <div className="btn-group m-b-10">
                                    <Dropdown isOpen={this.state.drp_warning}  toggle={() => this.setState({ drp_warning: !this.state.drp_warning })}>
                                        <DropdownToggle className="btn btn-warning" caret>
                                         Warning
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Seperated link</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                   </div>
                                   &nbsp;

                                    <div className="btn-group m-b-10">
                                    <Dropdown isOpen={this.state.drp_danger}  toggle={() => this.setState({ drp_danger: !this.state.drp_danger })}>
                                        <DropdownToggle className="btn btn-danger" caret>
                                        Danger
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Seperated link</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                   </div>
                                   &nbsp;
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Split button dropdowns</h4>
                                <p className="text-muted m-b-30">The best part is you can do this with any button variant, too:</p>
                                <div className="">
                                    <div className="btn-group m-b-10">
                                        <ButtonDropdown isOpen={this.state.drp_primary1}  toggle={() => this.setState({ drp_primary1: !this.state.drp_primary1 })}>
                                        <Button id="caret" color="primary">Primary</Button>
                                        <DropdownToggle caret color="primary" />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    &nbsp;
                                    <div className="btn-group m-b-10">
                                        <ButtonDropdown isOpen={this.state.drp_secondary1}  toggle={() => this.setState({ drp_secondary1: !this.state.drp_secondary1 })}>
                                        <Button id="caret" color="secondary">Secondary</Button>
                                        <DropdownToggle caret color="secondary" />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    &nbsp;
                                    <div className="btn-group m-b-10">
                                        <ButtonDropdown isOpen={this.state.drp_success1}  toggle={() => this.setState({ drp_success1: !this.state.drp_success1 })}>
                                        <Button id="caret" color="success">Success</Button>
                                        <DropdownToggle caret color="success" />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    &nbsp;
                                    <div className="btn-group m-b-10">
                                        <ButtonDropdown isOpen={this.state.drp_info1}  toggle={() => this.setState({ drp_info1: !this.state.drp_info1 })}>
                                        <Button id="caret" color="info">Info</Button>
                                        <DropdownToggle caret color="info" />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>   
                                    </div>
                                    &nbsp;
                                    <div className="btn-group m-b-10">
                                        <ButtonDropdown isOpen={this.state.drp_warning1}  toggle={() => this.setState({ drp_warning1: !this.state.drp_warning1 })}>
                                        <Button id="caret" color="warning">Warning</Button>
                                        <DropdownToggle caret color="warning" />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    &nbsp;
                                    <div className="btn-group m-b-10">
                                        <ButtonDropdown isOpen={this.state.drp_danger1}  toggle={() => this.setState({ drp_danger1: !this.state.drp_danger1 })}>
                                        <Button id="caret" color="danger">Danger</Button>
                                        <DropdownToggle caret color="danger" />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div> &nbsp;
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Sizing</h4>
                                <p className="text-muted m-b-30">Button dropdowns work with buttons of
                                    all sizes, including default and split dropdown buttons.</p>

                                <div className="">
                                    <div className="btn-group mo-mb-2">
                                    <Dropdown isOpen={this.state.drp_large_btn}  toggle={() => this.setState({ drp_large_btn: !this.state.drp_large_btn })}>
                                        <DropdownToggle className="btn btn-secondary btn-lg" caret>
                                        Large button
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Seperated link</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    </div>
                                    &nbsp;
                                    <div className="btn-group mo-mb-2">
                                        <ButtonDropdown isOpen={this.state.drp_btn_tlg}  toggle={() => this.setState({ drp_btn_tlg: !this.state.drp_btn_tlg })}>
                                        <Button id="caret" color="secondary"> Large button</Button>
                                        <DropdownToggle caret color="secondary" className="btn-lg" />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    &nbsp;
                                    <div className="btn-group mo-mb-2">
                                        <Dropdown isOpen={this.state.drp_small_btn}  toggle={() => this.setState({ drp_small_btn: !this.state.drp_small_btn })}>
                                            <DropdownToggle className="btn btn-secondary btn-sm" caret>
                                            Small button
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Seperated link</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    &nbsp;
                                    <div className="btn-group mo-mb-2">
                                        <ButtonDropdown isOpen={this.state.drp_sm_tlg}  toggle={() => this.setState({ drp_sm_tlg: !this.state.drp_sm_tlg })}>
                                        <Button id="caret" color="secondary"  className="btn-secondary btn-sm">Small button</Button>
                                        <DropdownToggle caret color="secondary"  className="btn-secondary btn-sm" />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div> &nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Dropup variation</h4>
                                <p className="text-muted m-b-30">Trigger dropdown menus above elements
                                    by adding <code className="highlighter-rouge">.dropup</code> to the parent
                                    element.</p>

                                <div className="">
                                    <div className="btn-group dropup mo-mb-2">

                                    <Dropdown direction="up" isOpen={this.state.drop_up}  toggle={() => this.setState({ drop_up: !this.state.drop_up })}>
                                        <DropdownToggle className="btn btn-secondary" caret>
                                        Dropup
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Seperated link</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    </div> &nbsp;

                                    <div className="btn-group dropup mo-mb-2">
                                        <ButtonDropdown direction="up" isOpen={this.state.split_drp}  toggle={() => this.setState({ split_drp: !this.state.split_drp })}>
                                        <Button id="caret" color="secondary">Split dropup</Button>
                                        <DropdownToggle caret color="secondary" />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                        </ButtonDropdown>
                                    </div> &nbsp;

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Menu alignment</h4>
                                <p className="text-muted m-b-30">Add <code className="highlighter-rouge">.dropdown-menu-right</code>
                                    to a <code className="highlighter-rouge">.dropdown-menu</code> to right
                                    align the dropdown menu.</p>

                                    <Dropdown isOpen={this.state.menu_align}  toggle={() => this.setState({ menu_align: !this.state.menu_align })}>
                                        <DropdownToggle className="btn btn-secondary" caret>
                                        Menu is right-aligned
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown> &nbsp;
                            </div>
                        </div>
                    </div> 
                </div> 
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                            <h4 className="mt-0 header-title">Dropright variation</h4>
                            <p className="text-muted m-b-30">Trigger dropdown menus at the right of the elements by adding <code>.dropright</code> to the parent element.
                            </p>
                            <div className="">
                              <div className="btn-group mb-2 dropright">
                                    <Dropdown isOpen={this.state.drp_right} direction="right" toggle={() => this.setState({ drp_right: !this.state.drp_right })}>
                                        <DropdownToggle className="btn btn-info" caret>
                                        Dropright
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    </div> &nbsp;

                                    <div className="btn-group mb-2 dropright">
                                    <ButtonDropdown direction="right" isOpen={this.state.drp_split1}  toggle={() => this.setState({ drp_split1: !this.state.drp_split1 })}>
										<Button id="caret" color="info"> Split dropright</Button>
										<DropdownToggle caret color="info" />
										<DropdownMenu>
									    <DropdownItem>Action</DropdownItem>
									    <DropdownItem>Another Action</DropdownItem>    
									    <DropdownItem>Something else here</DropdownItem>    
										</DropdownMenu>
										</ButtonDropdown>
                                    </div> &nbsp;
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Dropleft variation</h4>
                                <p className="text-muted m-b-30">Trigger dropdown menus at the right of the elements by adding <code>.dropleft</code> to the parent element.
                                </p>
                                <div className="btn-group mb-2 dropleft">
                                   <Dropdown isOpen={this.state.drp_left} direction="left" toggle={() => this.setState({ drp_left: !this.state.drp_left })}>
                                        <DropdownToggle className="btn btn-info" caret>
                                        Dropright
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                &nbsp;
                                <div className="btn-group mb-2">
                                   <ButtonDropdown direction="left" isOpen={this.state.drp_left1}  toggle={() => this.setState({ drp_left1: !this.state.drp_left1 })}>
                                        <DropdownToggle caret color="info" />
                                        <Button id="caret" color="info">Toggle Dropleft</Button>
										<DropdownMenu>
											<DropdownItem header>Header</DropdownItem>
											<DropdownItem disabled>Action</DropdownItem>
											<DropdownItem>Another Action</DropdownItem>
										</DropdownMenu>
									</ButtonDropdown>
                                </div> &nbsp;
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </AUX>
    );
    }
}

export default UiDropdowns;   