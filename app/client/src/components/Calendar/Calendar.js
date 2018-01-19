import _ from 'lodash';
import React, { Component } from 'react';
import GridList, { GridListTile } from 'material-ui/GridList';
import Button from 'material-ui/Button';

class Calendar extends Component {
  render() {
    const arr = _.range(31);
    return (
      <GridList cellHeight={60} cols={7}>
        {arr.map((date) => {
          return (
            <GridListTile key={date} cols={1}>
              <Button>{date+1}</Button>
            </GridListTile>
          );
        })}
      </GridList>
    );
  }
}

export { Calendar };
