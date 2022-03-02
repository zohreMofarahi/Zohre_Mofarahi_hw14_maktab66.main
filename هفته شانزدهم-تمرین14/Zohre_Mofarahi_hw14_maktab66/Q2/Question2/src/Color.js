import React, {Component} from 'react';
import ColorGenerator from './ColorGenerator';

class Color extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
                <ul>
                    <li className='colorList'><ColorGenerator/></li>
                </ul>
        )
    }
}

export default Color;