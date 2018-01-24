import _ from 'lodash';
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Day } from '../Day';

class Calendar extends Component {
  render() {
    const arr = _.range(31);
    return (
      <Grid>
        {_.map(arr, (day) => {
          return <Grid.Column key={`Column_${day}`}><Day date={day} /></Grid.Column>;
        })}
      </Grid>
    );
  }
}

export { Calendar };
