import React, { Component } from 'react';
class App extends Component {
constructor(props){
super(props);
this.state = {
value: 'www.reactjs.org'
}
this.handleEvent = this.handleEvent.bind(this);
this.handleInputChange = this.handleInputChange.bind(this);
}
setData(event)
{
  this.setState({value:event.target.value});
}
handleEvent(){
console.log("props",this.props);
console.log("states",this.state);
} 
handleInputChange(event) {
  const target = event.target;
  const value =  target.value;
  const name = target.name;
  this.setState({
  [name]: value
  });
  }
render() {
return (
<div className="App">
<h2>React Constructor Example</h2>
<input type ="text" value={this.state.value} name="value"  onChange={this.handleInputChange} />
<button onClick={this.handleEvent}>Please Click</button>
</div>
); } } export default App;