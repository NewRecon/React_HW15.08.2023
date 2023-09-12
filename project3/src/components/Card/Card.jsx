import React, { Component } from 'react'
import "../Card/Card.css"

export default class Card extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="card">
        <img className="avatar" src={(this.props.pic)} alt="" />
        <div className="name">
          Имя - {this.props.name}
          {(this.props.gender)?(
            <img className="gender" src='https://e7.pngegg.com/pngimages/988/544/png-clipart-male-computer-icons-symbol-sign-symbol-miscellaneous-sign.png'/>
          ):(
            <img className="gender" src='https://cdn.icon-icons.com/icons2/2167/PNG/512/female_woman_venus_sign_icon_133157.png'/>
          )}
        </div>
        <div className="age">
          Возраст - {this.props.age}
        </div>
      </div>
    )
  }
}
