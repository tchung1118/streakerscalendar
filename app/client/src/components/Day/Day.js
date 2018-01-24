import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Day extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { active } = this.state;
    const { date } = this.props;
    return (
      <Button toggle circular active={active} onClick={() => { console.log('hitoggle'); this.setState({ active: !this.state.active }); }}>
        {date}
      </Button>
    );
  }
}

export { Day };
