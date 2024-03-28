import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLostCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedList: [], isMistaked: false}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateScores = id => {
    const {clickedList, score, topScore, isMistaked} = this.state
    this.setState(prevState => ({clickedList: [...prevState.clickedList, id]}))
    if (clickedList.includes(id) === false) {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      if (score > topScore) {
        this.setState({topScore: score})
        this.setState({clickedList: []})
        this.setState({isMistaked: true})
      }
    }
  }

  updateisMistaked = () => {
    const {isMistaked, score} = this.state
    this.setState({isMistaked: false})
    this.setState({score: 0})
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isMistaked, clickedList} = this.state
    const newList = this.shuffledEmojisList()
    console.log(clickedList)
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isMistaked={isMistaked} />
        <div className="emojis-container">
          {isMistaked ? (
            <div className="result-container">
              <WinOrLostCard
                score={score}
                updateisMistaked={this.updateisMistaked}
              />
            </div>
          ) : (
            <ul className="emoji-images">
              {newList.map(eachEmoji => (
                <EmojiCard
                  Emoji={eachEmoji}
                  key={eachEmoji.id}
                  updateScores={this.updateScores}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
