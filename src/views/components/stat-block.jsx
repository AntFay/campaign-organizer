import React from 'react';

export default class StatBlock extends React.Component {

  renderAbilityScores() {
    let abilities = ["str", "dex", "con", "int", "wis", "cha"];

    return (
      <table>
        <thead>
          <tr>
            {abilities.map((ability, i) => {
              return (<th key={i}>{ability.toUpperCase()}</th>);
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {abilities.map((ability, i) => {
              let score = this.props.unit[ability];
              return (<td key={i}>{score} ({Math.floor((score-10)/2)})</td>);
            })}
          </tr>
        </tbody>
      </table>
    );
  }

  renderFeatures(featureArray) {
    if(featureArray) {
      return (
        <div className='traits'>
          {featureArray.map((feature, i) => {
            return (
              <div key={i}>
                <strong>{feature.name}.</strong> {feature.text}
              </div>
            );
          })}
        </div>
      )
    }
  }

  render() {
    let unit = this.props.unit;
    return (
      <div className='stat-block'>
        <h2>{unit.name}</h2>
        <em>{unit.size} {unit.type}, {unit.alignment}</em>
        <hr/>
        <strong>Armor Class</strong> {unit.ac}
        <br/>
        <strong>Hit Points</strong> {unit.hp}
        <br/>
        <strong>Speed</strong> {unit.speed}
        <hr/>
        {this.renderAbilityScores(unit)}
        <hr/>
        {unit.saving && <div><strong>Saving Throws</strong> {unit.saving}</div>}
        {unit.skills && <div><strong>Skills</strong> {unit.skills}</div>}
        {unit.vulnerabilities && <div><strong>Damage Vulnerabilities</strong> {unit.vulnerabilities}</div>}
        {unit.resistences && <div><strong>Damage Resistences</strong> {unit.resistences}</div>}
        {unit.immunities && <div><strong>Damage Immunities</strong> {unit.immunities}</div>}
        {unit.conditions && <div><strong>Condition Immunities</strong> {unit.conditions}</div>}
        {unit.senses && <div><strong>Senses</strong> {unit.senses}</div>}
        {unit.languages && <div><strong>Languages</strong> {unit.languages}</div>}
        {unit.cr && <div><strong>Challenge</strong> {unit.cr}</div>}
        <hr/>

        {unit.actions &&
          <div>
            {this.renderFeatures(unit.traits)}
          </div>
        }
        {unit.actions &&
          <div>
            <h4>Actions</h4>
            {this.renderFeatures(unit.actions)}
          </div>
        }
        {unit.reactions &&
          <div>
            <h4>Reactions</h4>
            {this.renderFeatures(unit.reactions)}
          </div>
        }
        {unit.legendary &&
          <div>
            <h4>Legendary Actions</h4>
            <p>Unit can take {unit["legendary-count"]} legendary actions, choosing from the options below.
            Only one legendary action option can be used at a time and only at the
            end of another creature's turn. The dragon regains spent legendary
            actions at the start of its turn.</p>
            {this.renderFeatures(unit.legendary)}
          </div>
        }
      </div>
    )
  }
}
