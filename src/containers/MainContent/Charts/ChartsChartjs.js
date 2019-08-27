import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Settings from '../Subpages/Settings';
import { Link } from 'react-router-dom';
import LineChart  from '../Chartstypes/Chartjs/LineChart';
import BarChart  from '../Chartstypes/Chartjs/BarChart';
import PieChart  from '../Chartstypes/Chartjs/PieChart';
import DonutChart  from '../Chartstypes/Chartjs/DonutChart';
// import RadarChart  from '../Chartstypes/Chartjs/RadarChart';
import PolarChart  from '../Chartstypes/Chartjs/PolarChart';
 
class ChartsChartjs extends Component{
  
render(){
    return(
        <AUX>
            <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
        
                        <div className="col-sm-6">
                            <h4 className="page-title">Chartjs</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Veltrix</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Components</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Charts</Link></li>
                                <li className="breadcrumb-item active">Chartjs</li>
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
                                <LineChart />
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Bar Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">2541</h5>
                                        <p className="text-muted">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">84845</h5>
                                        <p className="text-muted">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">12001</h5>
                                        <p className="text-muted">Deactivated</p>
                                    </li>
                                </ul>

                                <BarChart />

                            </div>
                        </div>
                    </div> 
                </div> 


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Pie Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">2536</h5>
                                        <p className="text-muted">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">69421</h5>
                                        <p className="text-muted">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">89854</h5>
                                        <p className="text-muted">Deactivated</p>
                                    </li>
                                </ul>
                                 <PieChart />

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Donut Chart</h4>

                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">9595</h5>
                                        <p className="text-muted">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">36524</h5>
                                        <p className="text-muted">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">62541</h5>
                                        <p className="text-muted">Deactivated</p>
                                    </li>
                                </ul>
                                <DonutChart />
                            </div>
                        </div>
                    </div> 
                </div> 

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Polar Chart</h4>
                                <ul className="list-inline widget-chart m-t-20 m-b-15 text-center">
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">4852</h5>
                                        <p className="text-muted">Activated</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">3652</h5>
                                        <p className="text-muted">Pending</p>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="mb-0">85412</h5>
                                        <p className="text-muted">Deactivated</p>
                                    </li>
                                </ul>
                                <PolarChart />
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
        </AUX>
    );
    }
}

export default ChartsChartjs;   