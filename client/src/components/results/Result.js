import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import Button from '../Button';
import Ride from './Ride';

class Result extends Component {
  tableRows(estimates) {
    return estimates.map(({type, costEstimate}) => (
      <Table.Row><Table.Cell>{type}</Table.Cell> <Table.Cell>{costEstimate}</Table.Cell></Table.Row>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <h3>{this.props.header}</h3>
        <Table collapsing celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ride Type</Table.HeaderCell>
            <Table.HeaderCell>Cost</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.tableRows(this.props.estimates)}
              </Table.Body>
              </Table>
              <Button buttonTitle={this.props.buttonTitle}/>
              </React.Fragment>
    );
  }
}

export default Result;