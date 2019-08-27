import React , {Component } from 'react';
import {AreaChart} from 'react-easy-chart';
import AUX from '../../../hoc/Aux_';

class Areacharts extends Component{




render(){
    return(
            <AUX>
            {(() => {
                if (this.props.type === 'earnings') {
                return (
                    <AreaChart
                        axes              
                        verticalGrid
                        grid
                        dataPoints
                        xTicks={10}
                        yTicks={9}
                        areaColors={['#626ed4']}
                        interpolate={'cardinal'}
                        width={750}
                        height={275}
                        data={[
                        [
                            { x: '1', y: 20 },
                            { x: '2', y: 35 },
                            { x: '3', y: 55 },
                            { x: '4', y: 45 },
                            { x: '5', y: 15 },
                            { x: '6', y: 35 },
                            { x: '7', y: 50 },
                            { x: '8', y: 15 },
                            { x: '9', y: 45 },
                            { x: '10', y: 15 },
                        ], 
                        ]}  />      
                )
                } else if (this.props.type === 'online') {
                return (
                    <AreaChart
                       width={100}
                       height={50}
                       areaColors={['#02a499']}
                        data={[
                        [
                            { x: 1, y: 20 },
                            { x: 2, y: 10 },
                            { x: 3, y: 25 },
                            { x: 4, y: 35 },
                            { x: 5, y: 15 },
                            { x: 6, y: 25 },
                            { x: 7, y: 5 },
                            { x: 8, y: 25 },
                            { x: 9, y: 45 },
                            { x: 10, y: 15 },
                            { x: 11, y: 35 },
                            { x: 12, y: 15 },
                        ] ]}
                    />)
                } else if (this.props.type === 'offline') {
                    return (
                            <AreaChart
                            width={100}
                            height={50}
                            areaColors={['#02a499']}
                                data={[
                                [
                                    { x: 1, y: 20 },
                                    { x: 2, y: -10 },
                                    { x: 3, y: 25 },
                                    { x: 4, y: 35 },
                                    { x: 5, y: -15 },
                                    { x: 6, y: 25 },
                                    { x: 7, y: 5 },
                                    { x: 8, y: 25 },
                                    { x: 9, y: -45 },
                                    { x: 10, y: 15 },
                                    { x: 11, y: 35 },
                                    { x: 12, y: -15 },
                                ] ]}  />                        
                        )
                } else {
                return (
                    <div>catch all</div>
                )
                }
            })()}

               

                          
            </AUX>
        );
    }
}

export default Areacharts;   