import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types'


export default class SenatorCell extends React.Component{
  static propTypes = {
    senatorData: PropTypes,
  };
  getColor(){
    const party = this.props.senatorData.terms[this.props.senatorData.terms.length-1].party
    console.log(party);
    switch (party) {
      case 'Democrat':
        return "primary"
      case 'Republican':
        return "danger"
      default:
        return "success"
    }
  }
  render(){
    return (
      <Card body inverse color={this.getColor()}>
        <center><CardText>{this.props.senatorData.name.official_full}</CardText></center>
      </Card>
    );
  }
}
