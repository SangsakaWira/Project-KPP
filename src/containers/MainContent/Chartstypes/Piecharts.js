import React , {Component } from 'react';
import {PieChart} from 'react-easy-chart';
import AUX from '../../../hoc/Aux_';

class Piecharts extends Component{

render(){
    return(
            <AUX>
                {this.props.type === 'single' ?  
                 <PieChart
                    size={70}
                    innerHoleSize={55}
                    data={[
                    { key: 'A', value: this.props.rate, color: '#02a499' },
                    { key: 'B', value: "50", color: '#f2f2f2' },
                    ]}
                 />
                 :
                 <PieChart
                    size={220}
                    innerHoleSize={190}
                    data={[
                    { key: 'A', value: "150", color: '#626ed4' },
                    { key: 'B', value: "70", color: '#02a499' },
                    { key: 'C', value: "70", color: '#f8b425' },
                    ]}
                 />
                 }
            </AUX>
        );
    }
}

export default Piecharts;   