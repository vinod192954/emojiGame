// Write your code here.
import './index.css'

const WinOrLostCard = props => {
  const {score, updateisMistaked} = props

  const onChangeMistake = () => {
    updateisMistaked()
  }

  const greetText = score === 12 ? 'You Won' : 'You Lose'
  const text = score === 12 ? 'Best Score' : 'Score'
  const imageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="greet-container">
      <div className="text-container">
        <h1>{greetText}</h1>
        <p>{text}</p>
        <p>{score} / 12</p>
        <button type="button" onClick={onChangeMistake} className="btn-custom">
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} />
      </div>
    </div>
  )
}

export default WinOrLostCard
