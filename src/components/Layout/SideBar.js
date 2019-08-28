import React, {Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AUX from '../../hoc/Aux_';
import { Scrollbars } from 'react-custom-scrollbars';
import $ from 'jquery';
import './Leftsidebar.css';

class sidebar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Tab: 'index', SubTab: '', MoreTab: '',
            email_menu: false, ui_menu: false, form_menu:false, chart_menu:false, 
            table_menu: false, icon_menu:false, map_menu:false, extra_menu:false, pages_menu:false, et_menu:false
        };
    }
    setActiveTab = (tab,subtab,moretab, e)=> {
        this.setState({Tab: tab,SubTab: subtab,MoreTab: moretab});
    }

    componentDidMount() {
        if ($(window).width() < 1025) {
            $('body').addClass('enlarged');
        } else {
            $('body').removeClass('enlarged');  
           
        }

        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("enlarged");
            if($("body").hasClass("enlarged"))
            {
              $("#email_menu_hide").hide();
              $("#ui_menu_hide").hide();
              $("#form_menu_hide").hide();
              $("#chart_menu_hide").hide();
              $("#table_menu_hide").hide();
              $("#icon_menu_hide").hide();
              $("#map_menu_hide").hide();
              $("#page_menu_hide").hide();
              $("#extra_menu_hide").hide();
              $("#et_menu_hide").hide();
            }
            else
            {
                $("#email_menu_hide").show();
                $("#ui_menu_hide").show();
                $("#form_menu_hide").show();
                $("#chart_menu_hide").show();
                $("#table_menu_hide").show();
                $("#icon_menu_hide").show();
                $("#map_menu_hide").show();
                $("#page_menu_hide").show();
                $("#extra_menu_hide").show();
                $("#et_menu_hide").show();
            }
        });
      }

    render() {
        return (
            <AUX>
            <div className="left side-menu">
            <Scrollbars style={{ height: 980 ,background:"#2D5713"}} >
                <div>
                    <div id="sidebar-menu">
                        <ul className="metismenu" id="side-menu" style={{marginTop:"-10px"}}>
                            {/* <li className="menu-title">Main</li> */}
                            <li>
                                <Link to="/"  className={this.state.Tab === 'calendar' ? 'waves-effect active':'waves-effect'}><i className="ion ion-ios-search"></i><span> Semua Alat </span></Link>
                            </li>
                            <li>
                                <Link to="/alat-terpinjam"  className={this.state.Tab === 'calendar' ? 'waves-effect active':'waves-effect'}><i className="ion ion-ios-journal"></i><span> Alat Terpinjam </span></Link>
                            </li>
                            <li>
                                <Link to="/peminjam"  className={this.state.Tab === 'calendar' ? 'waves-effect active':'waves-effect'}><i className="mdi mdi-account-multiple"></i><span> Peminjam </span></Link>
                            </li>
                            <li>
                                <Link to="/help"  className={this.state.Tab === 'calendar' ? 'waves-effect active':'waves-effect'}><i className="ion ion-md-help-circle-outline"></i><span> Help </span></Link>
                            </li>
                            <li>
                                <Link to="/"  className={this.state.Tab === 'calendar' ? 'waves-effect active':'waves-effect'}><i className="ti-calendar"></i><span> Logout </span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
             </Scrollbars>
            </div>
            </AUX>
        );
    }
}

export default withRouter(sidebar);