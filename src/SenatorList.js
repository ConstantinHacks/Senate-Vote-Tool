import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SenatorCell from './SenatorCell.js'

export default class SenatorList extends React.Component{
  static propTypes = {
    senators: PropTypes.array,
  };
  render(){
    return(
      <ul>
        {this.props.senators.map((Senator) =>
          <SenatorCell key={Senator.id.govtrack} senatorData={Senator}/>
        )}
      </ul>
    )
  }
}
