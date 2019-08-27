import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
//import Knob from 'react-canvas-knob';

class ChartsKnob extends Component{

    constructor(props) {
        super(props);
     
        this.state = {
          simple:8, cursor:62, display: 35, angle: 25, steps: -1700, angleArc: 45, readonly:75, ang_offset_arc: 35
        };
      }

render(){
    return(
        <AUX>
                <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <h4 className="page-title">Jquery Knob Chart</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Charts</Link></li>
                                <li className="breadcrumb-item active">Jquery Knob Chart</li>
                            </ol>

                        </div>
                        <div className="col-sm-6">
                              <Settings />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Examples</h4>
                                <p className="text-muted m-b-30">Nice, downward compatible, touchable, jQuery dial</p>

                                <div className="row text-center">
                                    <div className="col-lg-4 text-center">
                                        <h5 className="font-16 m-b-20">Disable display input</h5>
                                        <Knob
                                        fgColor="#3c4ccf"
                                        value={this.state.simple}
                                        height="160"
                                        width="160"
                                        onChange={(e) => {  this.setState({simple: e});  } }
                                        />
                    
                                    </div>
                                    <div className="col-lg-4 text-center">
                                        <h5 className="font-16 m-b-20">Cursor mode</h5>
                                        <Knob
                                        value={this.state.cursor}
                                        cursor={true}
                                        fgColor="#02a499"
                                        height="160"
                                        width="160"
                                        onChange={(e) => {  this.setState({cursor: e});  } }
                                           />
                                      
                                    </div>
                                    <div className="col-lg-4 text-center">
                                        <h5 className="font-16 m-b-20">Display previous value</h5>
                                        <Knob
                                        value={this.state.display}
                                        fgColor="#ffbb44"
                                        height="160"
                                        width="160"
                                        onChange={(e) => {  this.setState({display: e});  } }
                                           />
                                     </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4 text-center">
                                        <h5 className="font-16 m-b-20">Angle offset</h5>
                                        <Knob
                                        value={this.state.angle}
                                        fgColor="#ec4561"
                                        lineCap="round"
                                        height="160"
                                        width="160"
                                        onChange={(e) => {  this.setState({angle: e});  } }
                                        />
                                       </div>
                                    <div className="col-lg-4 text-center">
                                        <h5 className="font-16 m-b-20"> 5-digit values, step 1000</h5>
                                        <Knob
                                        value={this.state.steps}
                                        fgColor="#171719"
                                        step="10"
                                        height="160"
                                        width="160"
                                        onChange={(e) => {  this.setState({steps: e});  } }
                                           />
                                    </div>
                                    <div className="col-lg-4 text-center">
                                        <h5 className="font-16 m-b-20">Angle offset and arc</h5>
                                            <Knob
                                            value={this.state.angleArc}
                                            fgColor="#f06292"
                                            angleArc="360"
                                            angleOffset="5"
                                            cursor={true}
                                            height="160"
                                            width="160"
                                            onChange={(e) => {  this.setState({angleArc: e});  } }
                                            />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4 text-center">
                                        <h5 className="font-16 m-b-20">Readonly</h5>
                                        <Knob
                                            value={this.state.readonly}
                                            fgColor="#38a4f8"
                                            thickness="0.12"
                                            height="160"
                                            width="160"
                                            onChange={(e) => {  this.setState({readonly: e});  } }
                                            />
                                     
                                    </div>
                                    <div className="col-lg-4 text-center">
                                        <h5 className="font-16 m-b-20"> Angle offset and arc</h5>
                                      
                                          <Knob
                                            value={this.state.ang_offset_arc}
                                            fgColor="#8d6e63"
                                            thickness="0.18"  
                                            angleArc="300"
                                            angleOffset="5"
                                            cursor={true}
                                            height="160"
                                           width="160"
                                            onChange={(e) => {  this.setState({ang_offset_arc: e});  } }
                                            />
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

export default ChartsKnob;   