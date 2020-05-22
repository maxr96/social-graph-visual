import React from 'react';
import './App.css';
import { Graph, GraphConfiguration } from 'react-d3-graph';
import socialGraphData from './friend_graph.json';
import "./App.css";

export default class App extends React.Component {
  constructor(props: Readonly<{}>){
    super(props);
  }
// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
readonly myConfig: Partial<GraphConfiguration<{ "id": string; }, { "source": string; "target": string; }>> = {
  nodeHighlightBehavior: true,
  highlightDegree: 2,
  node: {
      color: 'lightgreen',
      size: 200,
      highlightStrokeColor: 'blue'
  },
  link: {
      highlightColor: 'lightblue',
      type: 'CURVE_SMOOTH'
  },
  collapsible: true,
  d3: {
    alphaTarget: 0.05,
    gravity: -100,
    linkLength: 100,
    linkStrength: 0.5,
    disableLinkForce: false
  },
  height: 1440,
  width: 2500
};

// Callback to handle click on the graph.
// @param {Object} event click dom event
onClickGraph = function(event: any) {
   console.log('Clicked the graph background');
};

onClickNode = function(nodeId: any) {
   console.log('Clicked node ${nodeId}');
};

onDoubleClickNode = function(nodeId: any) {
   console.log('Double clicked node ${nodeId}');
};

onRightClickNode = function(event: any, nodeId: any) {
   console.log('Right clicked node ${nodeId}');
};

onMouseOverNode = function(nodeId: any) {
   console.log(`Mouse over node ${nodeId}`);
};

onMouseOutNode = function(nodeId: any) {
   console.log(`Mouse out node ${nodeId}`);
};

onClickLink = function(source: any, target: any) {
   console.log(`Clicked link between ${source} and ${target}`);
};

onRightClickLink = function(event: any, source: any, target: any) {
   console.log('Right clicked link between ${source} and ${target}');
};

onMouseOverLink = function(source: any, target: any) {
   console.log(`Mouse over in link between ${source} and ${target}`);
};

onMouseOutLink = function(source: any, target: any) {
   console.log(`Mouse out link between ${source} and ${target}`);
};

onNodePositionChange = function(nodeId: any, x: any, y: any) {
   console.log(`Node ${nodeId} moved to new position x= ${x} y= ${y}`);
};

render() {
return (<div className="graph">
  <Graph
     id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
     data={socialGraphData}
     config={this.myConfig}
     onClickNode={this.onClickNode}
     onDoubleClickNode={this.onDoubleClickNode}
     onRightClickNode={this.onRightClickNode}
     onClickLink={this.onClickLink}
     onRightClickLink={this.onRightClickLink}
     onMouseOverNode={this.onMouseOverNode}
     onMouseOutNode={this.onMouseOutNode}
     onMouseOverLink={this.onMouseOverLink}
     onMouseOutLink={this.onMouseOutLink}/>
</div>
);}
}