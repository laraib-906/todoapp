import React from 'react';
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.edit =""
        
    }
  // myref2 = React.createRef();
  changeText = (event) =>{
    this.edit = event.target.value
  }
  
  
  render () {
    return (
      <div>
          <ul >
              { this.props.items.map((task, index) => <li id='lii' key={index} >{task} 
              <button  value={index} onClick={this.props.re}>Delete</button> 
              {!this.props.flaag?
              (<button value={index}  onClick={this.props.up}>Update</button>):
              (<span><input  onChange={this.changeText} type="text" />
              <button onClick={() => this.props.savee(index,this.edit)}>Save</button>
              <button onClick={this.props.can}>Cancel</button></span>)}
              </li>) }
              
          </ul>
      </div>
    )
  }
}