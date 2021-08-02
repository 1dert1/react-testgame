import React, { Component } from 'react'
import './App.scss'
import Game from './Game'

export default class App extends Component {
  render() {
    return (
      <>
        <div className='header'>
          <h1>Кликер на реакцию</h1>
        </div>
        <Game/>
      </>
    )
  }
}
