import React from 'react';
import UnitPreview from './unit-preview';
import InfoBlock from './info-block';

export default class EncounterView extends React.Component {
  constructor(props) {
    super(props);
    // set state to contain unit-array from props
    this.state = {
      units: props.units,
      active: props.units[0]
    };
  }

  addUnit(unit) {
    this.state.units.add(unit);
  }

  unitSelected(activeUnit) {
    this.setState({ active: activeUnit });
  }

  render() {
    return (
      <span className='enc-view'>
        <div className='unit-list'>
          <div className='list-header'>
            Encounter Units
          </div>

          {this.state.units.map((unit, i) => {
            return <UnitPreview unit={unit} onClick={this.unitSelected.bind(this, unit)} key={i} />;
          })}
        </div>
        <InfoBlock active={this.state.active} />
      </span>
    )
  }
}
