import React, {Component} from 'react'
import Node from './Node/Node'
import './PathView.css'

export default class PathView extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDiMount() {
    const nodes = [];
    for (let row = 0; row < 15; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push([]);
      }
      nodes.push(currentRow);
    }
    this.setState({nodes}) 
  }
  render() {
    const {nodes} = this.state;
    console.log(nodes)
    return (
      <div>
        {nodes.map((row,rowIdx)=> { 
          return <div>
            {row.map((node, nodeIdx) => <Node/>)}
          </div>
        })}
      </div>
    );
  }
}