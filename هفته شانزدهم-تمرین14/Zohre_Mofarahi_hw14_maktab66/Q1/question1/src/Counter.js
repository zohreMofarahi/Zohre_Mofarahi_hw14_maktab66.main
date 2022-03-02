import React,{Component} from 'react';
import Button from './Button';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state={
            counter:0,
        }
        this.add=this.add.bind(this);
        this.sub=this.sub.bind(this);
    }

    

    add () {
        
        this.setState({counter:this.state.counter+1})
    }

    sub() {
        if (this.state.counter!==0){
        
        this.setState({counter:this.state.counter-1}) }
    }

render() {

    return( 
        <>
        <h1>{this.state.counter}</h1>
        <Button title='increase' clickHandler={this.add}/>
        <Button title='decrease' clickHandler={this.sub}/>
       </>
    )
}

}

export default Counter;