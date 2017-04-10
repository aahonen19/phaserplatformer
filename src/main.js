import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/BootState'
import GameState from './states/GameState'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('BootState', BootState, false)
    this.state.add('GameState', GameState, false)

    this.state.start('BootState')
  }
}

window.game = new Game()
