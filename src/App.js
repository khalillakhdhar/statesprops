import React, { Component } from 'react';
class App extends React.Component {
constructor() {
super();
//let etat=true; (instable)=> perte de valeur lors de l'actualisation
this.state = { displayBio: false }; // stateful component qui preserve l'etat si le component est chargé
console.log('Component this', this);
this.toggleBio = this.toggleBio.bind(this); // actualisation par rapport à l'éta
// bind pour force la relecture de nouvelle valeur

}
toggleBio(){
  this.setState({displayBio: !this.state.displayBio});
  }
  // Il est recommander de placer les méthodes personalisées aprés le constructeur et avant le render

render() {
const bio = this.state.displayBio ? (
<div>
<p><h3>React is one of the best js libraries.</h3></p>
</div>
) : null;
return (
<div>
<h1>Welcome to React!!</h1>
{
this.state.displayBio ? (
<div>
<p><h4>{ this.props.librairie } is wonderfull.</h4></p>
<button onClick={this.toggleBio}> Show Less </button>
</div>
) : (
<div>
<button onClick={this.toggleBio}> Read More </button>
</div>
)
}
</div>
) } }
export default App;