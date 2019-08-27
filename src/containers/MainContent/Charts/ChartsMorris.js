import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import LineCharts  from '../Chartstypes/Morris/LineCharts';
import BarCharts  from '../Chartstypes/Morris/BarCharts';
import AreaCharts  from '../Chartstypes/Morris/Areacharts';
import Piecharts  from '../Chartstypes/Morris/Piecharts';
 
class ChartsMorris extends Component{
  
render(){
    return(
        <AUX>
                     <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                
                                <div className="col-sm-6">
                                    <h4 className="page-title">Easy Chart</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Charts</Link></li>
                                        <li className="breadcrumb-item active">Easy Chart</li>
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
        
                                        <h4 className="mt-0 header-title">Line Chart</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">25610</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">56210</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">12485</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                        <LineCharts />
        
        
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Bar Chart</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">6,95,412</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">1,63,542</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                        </ul>
                                        <BarCharts />
        
                                    </div>
                                </div>
                            </div> 
                        </div> 
        
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Area Chart</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">86541</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">2541</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">102030</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                           <AreaCharts />
        
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Pie Chart</h4>
        
                                        <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">3201</h5>
                                                <p className="text-muted">Activated</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">85120</h5>
                                                <p className="text-muted">Pending</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <h5 className="mb-0">65214</h5>
                                                <p className="text-muted">Deactivated</p>
                                            </li>
                                        </ul>
                                        <Piecharts />
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div>
        </AUX>
    );
    }
}

export default ChartsMorris;   