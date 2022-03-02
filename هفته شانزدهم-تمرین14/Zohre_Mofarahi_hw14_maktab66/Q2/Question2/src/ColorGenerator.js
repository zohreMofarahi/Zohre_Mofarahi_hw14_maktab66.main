import React,{Component} from 'react'

class ColorGenerator extends Component {
    constructor(props){
        super(props)
        this.state={
            color:[]
        }
    }

    createColor = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        let colur='#' + n.slice(0, 6);
        this.setState({color:[colur,...this.state.color]})
      };

    render() {
        return(
            <>
            <button onClick={this.createColor} >Add Color</button>
            <ul>

              {this.state.color.map(col => <li> <div style={{width:'15px', height:'15px',background:`${col}`,display:'inline-block'}}></div>{col}</li>)}

            </ul>
            </>
        )
    }
}

export default ColorGenerator;