import Aux from '../../hoc/Aux_';
import TopBar from './TopBar';
import Footer from './Footer';
import SideBar from './SideBar';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class layout extends Component {

    render() {
        return (
            <Aux>
                {!this.props.loginpage ?
                    <main>
                        <div id="wrapper">
                            {this.props.topbar ? <TopBar /> : null}
                            {this.props.sidebar ? <SideBar /> : null}
                            <div className="content-page">
                                <div className="content">
                                    {this.props.children}
                                </div>
                                {/* {this.props.footer ? <Footer /> : null} */}
                            </div>
                        </div>
                    </main> : this.props.children}
            </Aux>
        );
    }
}

export default withRouter(layout);

