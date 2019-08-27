import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import { Dropdown,Button, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup  } from 'reactstrap';

class UiButtons extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
render(){
    
    return(
        <AUX>
            <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                
                        <div className="col-sm-6">
                            <h4 className="page-title">Buttons</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">UI Elements</Link></li>
                                <li className="breadcrumb-item active">Buttons</li>
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
                                <h4 className="mt-0 header-title">Examples</h4>
                                <p className="text-muted m-b-20">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
                                <div className="button-items">
                                
                                    <Button color="primary">Primary</Button>{' '}
                                    <Button color="secondary">Secondary</Button>{' '}
                                    <Button color="success">Success</Button>{' '}
                                    <Button color="info">Info</Button>{' '}
                                    <Button color="warning">Warning</Button>{' '}
                                    <Button color="danger">danger</Button>{' '}
                                    <Button  className="btn btn-dark waves-effect waves-light">Dark</Button>
                                    <Button color="link">Link</Button>
                                    <Button  className="btn btn-light waves-effect">Light</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Outline buttons</h4>
                                <p className="text-muted m-b-20">Replace the default modifier classNamees with the <code className="highlighter-rouge">.btn-outline-*</code> ones to remove all background images and colors on any button.</p>
                                <div className="button-items">

                                    <Button outline color="primary">Primary</Button>{' '}
                                    <Button outline color="secondary">Secondary</Button>{' '}
                                    <Button outline color="success">Success</Button>{' '}
                                    <Button outline color="info">Info</Button>{' '}
                                    <Button outline color="warning">Warning</Button>{' '}
                                    <Button outline color="danger">Danger</Button>{' '}
                                    <Button outline color="dark">Dark</Button>
                                    <Button outline color="light">Light</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Button tags</h4>
                                <p className="text-muted m-b-20 ">The <code className="highlighter-rouge">.btn</code>
                                    classNamees are designed to be used with the <code
                                            className="highlighter-rouge">&lt;button&gt;</code> element.
                                    However, you can also use these classNamees on <code
                                            className="highlighter-rouge">&lt;a&gt;</code> or <code
                                            className="highlighter-rouge">&lt;input&gt;</code> elements (though
                                    some browsers may apply a slightly different rendering).</p>

                                <div className="button-items">
                                
                                <Link to="#" ><Button color="primary">Link</Button>{' '}</Link>
                                <Button className="btn btn-success waves-effect waves-light">Button</Button>{' '}
                                    <input className="btn btn-info" type="button" value="Input" />
                                    <input className="btn btn-danger" type="submit" value="Submit" />
                                    <input className="btn btn-warning" type="reset" value="Reset" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Sizes</h4>
                                <p className="text-muted m-b-20">Fancy larger or smaller buttons? Add
                                    <code className="highlighter-rouge">.btn-lg</code> or <code
                                            className="highlighter-rouge">.btn-sm</code> for additional sizes.
                                </p>

                                <div className="button-items">
                                <Button size="lg" color="primary">Large button</Button>{' '}
                                <Button size="lg" color="secondary">Large button</Button>{' '}
                                <Button size="sm" color="primary">Small button</Button>{' '}
                                <Button size="sm" color="secondary">Small button</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Block Buttons</h4>
                                <p className="text-muted m-b-20 ">Create block level buttons—those that
                                    span the full width of a parent—by adding <code
                                            className="highlighter-rouge">.btn-block</code>.</p>

                                <div className="button-items">
                                <Button color="primary" size="lg" block>Block level button</Button>
                               <Button color="secondary" size="sm" block>Block level button</Button> </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                            
                                <h4 className="mt-0 header-title">Toggle states</h4>
                                <p className="text-muted m-b-20 ">Add <code className="highlighter-rouge">data-toggle="button"</code>
                                    to toggle a button’s <code className="highlighter-rouge">active</code>
                                    state. If you’re pre-toggling a button, you must manually add the <code
                                            className="highlighter-rouge">.active</code> className
                                    <strong>and</strong> <code
                                            className="highlighter-rouge">aria-pressed="true"</code> to the
                                    <code className="highlighter-rouge">&lt;button&gt;</code>.
                                </p>

                                <div className="button-items">
                                    <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="button" aria-pressed="false">
                                        Single toggle
                                    </button>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Checkbox buttons</h4>
                                <p className="text-muted m-b-30 ">Bootstrap’s <code
                                        className="highlighter-rouge">.button</code> styles can be applied to
                                    other elements, such as <code className="highlighter-rouge">
                                        &lt;label&gt;</code>s, to provide checkbox or radio style button
                                    toggling. Add <code
                                            className="highlighter-rouge">data-toggle="buttons"</code> to a
                                    <code className="highlighter-rouge">.btn-group</code> containing those
                                    modified buttons to enable toggling in their respective styles.</p>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-secondary active">
                                        <input type="checkbox" checked /> Checked-1
                                    </label>
                                    <label className="btn btn-secondary">
                                        <input type="checkbox" /> Checked-2
                                    </label>
                                    <label className="btn btn-secondary">
                                        <input type="checkbox" /> Checked-3
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Radio buttons</h4>
                                <p className="text-muted m-b-30 ">Bootstrap’s <code
                                        className="highlighter-rouge">.button</code> styles can be applied to
                                    other elements, such as <code className="highlighter-rouge">
                                        &lt;label&gt;</code>s, to provide checkbox or radio style button
                                    toggling. Add <code
                                            className="highlighter-rouge">data-toggle="buttons"</code> to a
                                    <code className="highlighter-rouge">.btn-group</code> containing those
                                    modified buttons to enable toggling in their respective styles.</p>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-primary active">
                                        <input type="radio" name="options" id="option1" checked /> Active
                                    </label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" id="option2" /> Radio
                                    </label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" id="option3" /> Radio
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Button group</h4>
                                <p className="text-muted m-b-30 ">Wrap a series of buttons with <code
                                        className="highlighter-rouge">.btn</code> in <code
                                        className="highlighter-rouge">.btn-group</code>.</p>

                                <div className="btn-group" role="group" aria-label="Basic example">
                                <ButtonGroup>
                                   <Button  color="secondary">Left </Button>{' '}
                                   <Button  color="secondary">Middle </Button>{' '}
                                   <Button  color="secondary">Right </Button>{' '}
                                </ButtonGroup>
                                   
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Button toolbar</h4>
                                <p className="text-muted m-b-30 ">Combine sets of button groups into
                                    button toolbars for more complex components. Use utility classNamees as
                                    needed to space out groups, buttons, and more.</p>

                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <ButtonGroup>
                                        <Button  color="secondary">1 </Button>{' '}
                                        <Button  color="secondary">2 </Button>{' '}
                                        <Button  color="secondary">3 </Button>{' '}
                                        <Button  color="secondary">4 </Button>{' '}
                                    </ButtonGroup>
                                </div>
                                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                                        <ButtonGroup>
                                        <Button  color="secondary">5 </Button>{' '}
                                        <Button  color="secondary">6 </Button>{' '}
                                        <Button  color="secondary">7 </Button>{' '}
                                        </ButtonGroup>
                                    </div>
                                    <div className="btn-group" role="group" aria-label="Third group">
                                    <ButtonGroup>
                                      <Button  color="secondary">8 </Button>{' '}
                                   </ButtonGroup>
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

                                <h4 className="mt-0 header-title">Sizing</h4>
                                <p className="text-muted m-b-30 ">Instead of applying button sizing
                                    classNamees to every button in a group, just add <code
                                            className="highlighter-rouge">.btn-group-*</code> to each <code
                                            className="highlighter-rouge">.btn-group</code>, including each one
                                    when nesting multiple groups.</p>

                                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">

                                    <ButtonGroup>
                                        <Button size="lg" color="secondary">Left </Button>{' '}
                                        <Button size="lg" color="secondary">Middle </Button>{' '}
                                        <Button size="lg" color="secondary">Right </Button>{' '}
                                    </ButtonGroup>

                                </div>

                                <br/>

                                <div className="btn-group m-t-10" role="group" aria-label="Basic example">
                                  
                                    <button type="button" className="btn btn-secondary">Left</button>
                                    <button type="button" className="btn btn-secondary">Middle</button>
                                    <button type="button" className="btn btn-secondary">Right</button>
                                </div>

                                <br/>

                                <div className="btn-group btn-group-sm m-t-10" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary">Left</button>
                                    <button type="button" className="btn btn-secondary">Middle</button>
                                    <button type="button" className="btn btn-secondary">Right</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Vertical variation</h4>
                                <p className="text-muted m-b-30 ">Make a set of buttons appear vertically
                                    stacked rather than horizontally. Split button dropdowns are not
                                    supported here.</p>

                                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                    <button type="button" className="btn btn-secondary">Button</button>
                                    <div className="btn-group" role="group">
                                    <Dropdown isOpen={this.state.dropdownOpen}  toggle={this.toggle}>
                                        <DropdownToggle className="btn btn-secondary"  caret> Dropdown
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                  </div>
                                    <button type="button" className="btn btn-secondary">Button</button>
                                    <button type="button" className="btn btn-secondary">Button</button>
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

export default UiButtons;   