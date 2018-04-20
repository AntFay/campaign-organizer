import React from 'react';

import StatBlock from './stat-block'

export default class InfoBlock extends React.Component {

  render() {
    if(this.props.active) {
      return (
        <div className='info-block'>
          <StatBlock unit={this.props.active} />
        </div>
      )
    }
    return (<p>No active unit selected</p>)
  }
}
