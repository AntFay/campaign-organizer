import React from 'react';

export default class UnitPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unit: props.unit
    };
  }

  render() {
    return (
      <div className='unit-preview' onClick={this.props.onClick}>
        <h3>{this.state.unit.name}</h3> x{this.state.unit.number}
        <br/>
        <i>{this.state.unit.size} {this.state.unit.type}</i>
        <div className='stats'>
          AC: {this.state.unit.ac}
          <br/>
          HP: {this.state.unit.hp}
        </div>
      </div>
    )
  }
}
