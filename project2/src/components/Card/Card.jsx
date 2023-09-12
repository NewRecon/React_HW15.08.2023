import React, { Component } from 'react'
import "../Card/Card.css"

export default class Card extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="card" style={{backgroundColor:(this.props.color)}}>
        <div className="position">
          {this.props.position}
        </div>
        <div className="company">
          <ol>
            <li>{this.props.company}</li>
            <li>{this.props.company1}</li>
            <li>{this.props.company2}</li>
          </ol>
        </div>
      </div>
    )
  }
}
