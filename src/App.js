import React, { Component } from 'react';
class App extends React.Component {
constructor(props) {
super(props);
//let etat=true; (instable)=> perte de valeur lors de l'actualisation
this.state = { name: "react" }; 

// stateful component qui preserve l'etat si le component est chargé

// bind pour force la relecture de nouvelle valeur

}

  // Il est recommander de placer les méthodes personalisées aprés le constructeur et avant le render

  render() {
    return (
    <div>
    <JTP jtpProp = {this.state.name}/>
    </div>
    );
    }
    }
    class JTP extends React.Component {
      render() {
      return (
      <div>
      <h1>State & Props Example</h1>
      <h3>Welcome to {this.props.jtpProp}</h3>
      <p>React is good.</p>
      </div>
      );
      }
      }
export default App;