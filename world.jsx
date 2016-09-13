import React from 'react';
import ReactDom from 'react-dom';


//first step is to create a Class with the file name.
class World extends React.Compnent{
  render(){
    return <h1>World</h1>;
  }
}


ReactDom.render(<World/>,document.getElementById('world'));
