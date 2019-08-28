import React, {Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

import { Scrollbars } from 'react-custom-scrollbars';

class topbar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggleprofile = this.toggleprofile.bind(this);
        this.togglebadge = this.togglebadge.bind(this);

        this.state = {
          dropdownOpen: false,
          dropdownOpen1: false,
          dropdownOpenprofile: false,
          dropdownOpenbadge: false,
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
      toggle1() {
        this.setState(prevState => ({
          dropdownOpen1: !prevState.dropdownOpen1
        }));
      }
      toggleprofile() {
        this.setState(prevState => ({
          dropdownOpenprofile: !prevState.dropdownOpenprofile
        }));
      }
      togglebadge() {
        this.setState(prevState => ({
          dropdownOpenbadge: !prevState.dropdownOpenbadge
        }));
      }
      
    

    togglescreen(e)
    {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    render() {
        return (
            <div className="topbar">

            <div className="topbar-left" style={{background:"#2D5713"}}>
                <Link to="/" className="logo">
                       
                </Link>
            </div>

            <nav className="navbar-custom" style={{background:"#FFFFFF"}}>
                <ul className="navbar-right d-flex list-inline float-right mb-0">
                    <li className="dropdown notification-list d-none d-md-block">
                        <form role="search" className="app-search">
                            <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Search.." />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </div>
                        </form>
                    </li>

                    <li className="dropdown notification-list d-none d-md-block">
                        <Link className="nav-link waves-effect" to="/checkout" id="btn-fullscreen">
                        <i class="dripicons-cart"></i>
                        </Link>
                    </li>

                    <li className="dropdown notification-list d-none d-md-block">
                        <Link  onClick={() => this.togglescreen()} className="nav-link waves-effect" to="#" id="btn-fullscreen">
                            <i className="mdi mdi-fullscreen noti-icon"></i>
                        </Link>
                    </li>

                    <li className="dropdown notification-list">
                        <div className="dropdown notification-list nav-pro-img">

                            <Dropdown isOpen={this.state.dropdownOpenprofile}  toggle={this.toggleprofile}>
                                    <DropdownToggle className="dropdown-toggle testflag nav-link arrow-none waves-effect nav-user" tag="a">
                                    <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                    <DropdownItem><i className="mdi mdi-account-circle m-r-5"></i> Administration</DropdownItem>
                                    <DropdownItem><i className="mdi mdi-wallet m-r-5"></i> Edit</DropdownItem>
                                    {/* <DropdownItem><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings m-r-5"></i> Settings</DropdownItem> */}
                                    <DropdownItem><i className="mdi mdi-lock-open-outline m-r-5"></i> Lock screen</DropdownItem>
                                    <DropdownItem><i className="mdi mdi-power text-danger"></i> Logout</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                        </div>
                    </li>
                </ul>

                <ul className="list-inline menu-left mb-0" style={{background:"#FFFFFF"}}>
                    <li className="float-left" style={{background:"#FFFFFF"}}>
                        <button  className="button-menu-mobile open-left waves-effect" style={{background:"#FFFFFF"}}>
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </li>
                    <li className="d-none d-sm-block" style={{background:"#FFFFFF"}}>
                        <div className="dropdown pt-3 d-inline-block">
                               <Dropdown isOpen={this.state.dropdownOpen} className="" toggle={this.toggle} style={{background:"#FFFFFF"}}>
                              
                                    <img src="assets/images/kpp-logo.png" alt="" height="60" style={{marginTop:"-15px"}} />
                                </Dropdown>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default withRouter(topbar);