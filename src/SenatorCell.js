import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types'
import './SenatorCell.css'

export default class SenatorCell extends React.Component{
  static propTypes = {
    senatorData: PropTypes.object,
  };
  getColor(){
    const party = this.props.senatorData.terms[this.props.senatorData.terms.length-1].party
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
      <li onClick={this.props.onClick}>
        <Card body inverse color={this.getColor()}>
          <center><CardText>{this.props.senatorData.name.official_full} ({this.props.senatorData.terms[this.props.senatorData.terms.length-1].state})</CardText></center>
        </Card>
      </li>
    );
  }
}
