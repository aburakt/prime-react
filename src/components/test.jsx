import React, { Component } from 'react'

export default class test extends Component {
  render() {
    console.log(this.props)
    const {baslik,aciklama} = this.props
    return (
      <>
        <h1>{this.props.baslik}</h1>
        <p>{this.props.aciklama}</p>
        <h1>{baslik}</h1>
        <p>{aciklama}</p>
      </>
    )
  }
}
